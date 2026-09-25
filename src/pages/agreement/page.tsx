import AppShell from "@/components/feature/AppShell";
import PageHeader from "@/components/feature/PageHeader";

const sections = [
  {
    title: "一、平台定位",
    body: "创艺+ 是由高校设计力量驱动的乡村文化振兴公益共创平台，为乡村需求方与青年设计师提供需求发布、设计共创与成果沉淀的公益服务。",
  },
  {
    title: "二、用户行为规范",
    body: "用户在使用平台时应遵守国家法律法规，发布真实、合法的需求与作品信息，不得上传侵权、虚假或含有违法内容的资料。",
  },
  {
    title: "三、知识产权说明",
    body: "用户上传的原创设计作品著作权归创作者所有。平台在公益共创项目中有权用于展示、传播与教学研究，使用时会标注作者信息。",
  },
  {
    title: "四、公益共创承诺",
    body: "平台内发布的公益设计需求不得用于商业牟利。参与者应本着真实、负责的态度完成共创，共同维护良性的公益协作氛围。",
  },
  {
    title: "五、隐私保护",
    body: "平台仅在必要时收集用户信息，用于身份识别、服务沟通与成果记录，不会在未经授权的情况下向第三方泄露用户个人信息。",
  },
  {
    title: "六、免责声明",
    body: "平台不对用户之间自行达成的线下合作结果承担直接责任。若出现争议，平台将协助沟通协调，并保留对违规账号的处理权利。",
  },
];

export default function Agreement() {
  return (
    <AppShell>
      <main>
        <PageHeader title="平台协议" />

        <section className="px-6 pb-16 pt-8 md:px-8 lg:px-10">
          <div className="mx-auto max-w-[860px] rounded-card border border-background-200 bg-background-50 p-8 shadow-card lg:p-12">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary-100 px-3 py-1 text-[12.5px] font-semibold text-primary-700">
              <i className="ri-shield-check-line text-[13px] leading-none text-primary-500"></i>
              用户协议
            </span>
            <h1 className="mt-4 font-heading text-[28px] font-black text-foreground-950">
              创艺+ 公益共创平台用户协议
            </h1>
            <p className="mt-2 text-[12.5px] text-foreground-500">更新日期：2026 年 01 月</p>

            <div className="mt-8 space-y-7">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-[16px] font-bold text-foreground-950">{section.title}</h2>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-foreground-600">
                    {section.body}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 border-t border-background-200 pt-6 text-[12.5px] leading-relaxed text-foreground-500">
              使用创艺+ 即表示你已知悉并同意本协议内容。如对协议条款有疑问，可通过平台联系方式与我们沟通。
            </p>
          </div>
        </section>
      </main>
    </AppShell>
  );
}