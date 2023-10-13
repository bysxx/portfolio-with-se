export default function AboutPage() {
  return (
    <main className="flex items-center px-[178px]">
      <section className="mt-[200px] flex w-full items-start justify-between gap-32">
        <img src="/images/seeun.png" className="w-[400px]" alt="" />
        <div className="flex flex-col gap-4">
          <h2>Hello!</h2>
          <p>
            Branding agency Tomnick is a strategy-based branding design and content creation agencycreated by experts
            from companies and agencies in Seoul and New York. Through bold and energetic approaches, we constantly
            create unconventional and interesting results. Based on in-house branding and global agency experience,
            Tomnick differs from existing Korean agencies. We pursue a branding rooted in exceptional strategies and
            sales, not just an aesthetically pleasing design.
          </p>
          <p>
            우리는 대담하고 활기찬 접근을 통해 완전히 다른 우리만의 흥미로운 결과물을 꾸준히 만들어왔습니다. 인하우스
            브랜딩과 글로벌에이전시 동시 경험을 토대로 기존 국내 에이전시와의 결을 달리합니다. 우리는 단순 심미적 충족의
            디자인이 아닌 차별적인 전략과 매출에 근기 한 브랜딩을 추구합니다. 이를 바탕으로 탐앤닉은 기업과 브랜드가
            나아가야 하는 비전과 가치를 제시합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
