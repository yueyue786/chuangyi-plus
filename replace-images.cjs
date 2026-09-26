/**
 * 将所有 readdy.ai/api/search-image 动态 AI 图片 URL
 * 替换为静态 SVG data URI（按 seq 哈希生成不同渐变色）
 *
 * 用法: node replace-images.cjs
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "src");

// 品牌色板：绿 + 暖金 + 米色
const PALETTES = [
  ["#2d6a4f", "#74c69d"], // 深绿→草绿
  ["#1b4332", "#52b788"], // 墨绿→翠绿
  ["#40916c", "#95d5b2"], // 森林绿→薄荷
  ["#588157", "#a3b18a"], // 橄榄绿→灰绿
  ["#344e41", "#b7e4c7"], // 深森林→浅薄荷
  ["#606c38", "#dda15e"], // 橄榄→暖金
  ["#283618", "#bc6c25"], // 深绿→棕金
  ["#0f5132", "#d4a373"], // 深绿→沙金
  ["#3a5a40", "#e9edc9"], // 森林→米黄
  ["#264653", "#2a9d8f"], // 深青→青绿
  ["#1d3557", "#457b9d"], // 深蓝→钢蓝
  ["#774936", "#d5a06c"], // 棕褐→暖棕
];

function hashSeq(seq) {
  let h = 0;
  for (let i = 0; i < seq.length; i++) {
    h = (h * 31 + seq.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/**
 * 生成一张带远山剪影的渐变 SVG data URI。
 * 风格贴合「乡村文化振兴」主题：绿调渐变 + 层叠远山。
 */
function makeSvg(seq, orientation) {
  const h = hashSeq(seq);
  const palette = PALETTES[h % PALETTES.length];
  const angle = (h % 8) * 45; // 0~315°
  // 根据 seq 末位决定是否加山形剪影
  const withMountains = h % 3 !== 0;
  const w = orientation === "portrait" ? 600 : orientation === "squarish" ? 800 : 1200;
  const ht = orientation === "portrait" ? 800 : 800;

  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${ht}" width="${w}" height="${ht}">`;
  svg += `<defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${angle})">`;
  svg += `<stop offset="0%" stop-color="${palette[0]}"/>`;
  svg += `<stop offset="100%" stop-color="${palette[1]}"/>`;
  svg += `</linearGradient></defs>`;
  svg += `<rect width="${w}" height="${ht}" fill="url(#g)"/>`;

  if (withMountains) {
    // 远山层叠剪影
    svg += `<path d="M0,${ht * 0.7} L${w * 0.15},${ht * 0.5} L${w * 0.3},${ht * 0.62} L${w * 0.45},${ht * 0.42} L${w * 0.6},${ht * 0.58} L${w * 0.75},${ht * 0.45} L${w * 0.9},${ht * 0.55} L${w},${ht * 0.5} L${w},${ht} L0,${ht} Z" fill="rgba(0,0,0,0.12)"/>`;
    svg += `<path d="M0,${ht * 0.82} L${w * 0.2},${ht * 0.66} L${w * 0.38},${ht * 0.76} L${w * 0.55},${ht * 0.6} L${w * 0.72},${ht * 0.72} L${w * 0.88},${ht * 0.64} L${w},${ht * 0.72} L${w},${ht} L0,${ht} Z" fill="rgba(0,0,0,0.20)"/>`;
  } else {
    // 柔和光斑
    svg += `<circle cx="${w * 0.3}" cy="${ht * 0.4}" r="${Math.min(w, ht) * 0.25}" fill="rgba(255,255,255,0.10)"/>`;
    svg += `<circle cx="${w * 0.7}" cy="${ht * 0.65}" r="${Math.min(w, ht) * 0.2}" fill="rgba(255,255,255,0.08)"/>`;
  }

  svg += `</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// 匹配所有外部图片 URL：动态 AI 生成 + 静态 CDN
const URL_RE =
  /https?:\/\/(?:readdy\.ai\/api\/search-image\?[^"'\s)]+|static\.readdy\.ai\/image\/[^"'\s)]+|storage\.helloreaddy\.io\/project_files\/[^"'\s)]+)/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let count = 0;
  content = content.replace(URL_RE, (url) => {
    const seqMatch = url.match(/[?&]seq=([^&]+)/);
    // 静态 CDN URL 没有 seq，用 URL 末段文件名作为标识
    const seq = seqMatch
      ? seqMatch[1]
      : (url.split("/").pop() || "default").split(".")[0] || "default";
    const orientMatch = url.match(/[?&]orientation=([^&]+)/);
    const orientation = orientMatch ? orientMatch[1] : "landscape";
    count++;
    return makeSvg(seq, orientation);
  });
  if (count > 0) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`  ${path.relative(ROOT, filePath)}: ${count} replaced`);
  }
  return count;
}

function walk(dir) {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += walk(full);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      total += processFile(full);
    }
  }
  return total;
}

console.log("Replacing dynamic readdy.ai search-image URLs with static SVGs...");
const total = walk(ROOT);
console.log(`\nDone. ${total} URLs replaced.`);
