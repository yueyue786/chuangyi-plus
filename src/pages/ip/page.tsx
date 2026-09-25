import { useState } from "react";
import { useParams } from "react-router-dom";
import AppShell from "@/components/feature/AppShell";
import FixedBottomBar from "@/components/feature/FixedBottomBar";
import ApplyFormModal from "@/components/base/ApplyFormModal";
import IpHero from "@/pages/ip/components/IpHero";
import IpOverview from "@/pages/ip/components/IpOverview";
import IpBackground from "@/pages/ip/components/IpBackground";
import IpProfile from "@/pages/ip/components/IpProfile";
import IpExtensions from "@/pages/ip/components/IpExtensions";
import IpBoard from "@/pages/ip/components/IpBoard";
import IpTeam from "@/pages/ip/components/IpTeam";
import { defaultIpContent, ipDetails } from "@/mocks/ipDetail";

export default function IpDetail() {
  const { id } = useParams();
  const numericId = String(Number(id) || 1);
  const content = ipDetails[numericId] ?? defaultIpContent;

  const [cooperated, setCooperated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <AppShell
      withNav={false}
      contentPadding="pb-28 md:pb-32"
      bottomBar={
        <FixedBottomBar>
          <button
            type="button"
            disabled={cooperated}
            onClick={() => setModalOpen(true)}
            className={[
              "mb-3 w-full whitespace-nowrap rounded-full py-3 text-[15px] font-semibold transition-colors",
              cooperated
                ? "cursor-default bg-secondary-200 text-secondary-700"
                : "cursor-pointer bg-primary-500 text-background-50 hover:bg-primary-600 active:scale-[0.99]",
            ].join(" ")}
          >
            {cooperated ? "已提交 · 等待对接" : "我要与这个 IP 共创"}
          </button>
        </FixedBottomBar>
      }
    >
      <main>
        <IpHero
          title={content.title}
          location={content.location}
          cover={content.cover}
        />
        <IpOverview
          subtitle={content.subtitle}
          tags={content.tags}
          summary={content.summary}
          highlights={content.highlights}
        />
        <IpBackground paragraphs={content.background} />
        <IpProfile items={content.profile} />
        <IpExtensions
          expressions={content.expressions}
          actions={content.actions}
          merchandise={content.merchandise}
        />
        <IpBoard title={content.title} cover={content.cover} />
        <IpTeam members={content.members} />

        <p className="px-6 pb-2 pt-7 text-center text-[10.5px] leading-relaxed text-foreground-400">
          创艺+ · 让非遗 IP，走进当代生活
        </p>
      </main>

      <ApplyFormModal
        open={modalOpen}
        title={`申请与「${content.title}」共创`}
        subtitle="填写以下信息，IP 项目组将在 2 个工作日内与你联系。"
        onClose={() => setModalOpen(false)}
        onSuccess={() => setCooperated(true)}
      />
    </AppShell>
  );
}