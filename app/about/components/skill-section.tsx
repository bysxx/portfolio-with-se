interface ISkill {
  title: string;
  description: string[];
}

const skills: ISkill[] = [
  {
    title: 'Common',
    description: [
      '<b>사용자 경험</b>을 가장 우선으로 생각합니다.',
      '<b>개발 문화</b>는 기술만큼 중요하다고 생각해 개발 문화를 적극적으로 개선합니다.',
      '<b>애자일 방법론</b>에 관심이 많고, 적극적으로 적용합니다.',
      '<b>문제 해결 및 위기 대처 능력</b>이 뛰어납니다.',
    ],
  },

  {
    title: 'Web',
    description: [
      '<b>브라우저 렌더링</b>에 대한 이해를 기반으로 성능을 최적화한 경험이 있습니다.',
      'IE, Safari를 포함한 <b>크로스 브라우징</b>에 대한 경험이 있습니다.',
    ],
  },

  {
    title: 'React, Next.js',
    description: [
      'React의 소스 코드를 분석한 경험을 바탕으로 문제 해결에 근본적인 접근이 가능합니다.',
      '<b>Next.js 13(App Router)</b> 기반의 아키텍처 설계 경험이 있습니다.',
      'React Suspense을 포함한 <b>SSR 기술</b>에 대한 관심이 많고, 이를 통해 사용자 경험을 개선할 수 있습니다.',
      'Jest를 사용해 <b>테스트 코드</b>를 작성합니다.',
    ],
  },

  {
    title: 'TypeScript, JavaScript',
    description: [
      '실행 컨텍스트를 포함한 <b>JavaScript의 핵심 원리</b>를 이해하고 있습니다.',
      'JavaScript에서의 <b>비동기 처리</b>에 능숙합니다.',
      '<b>TypeScript</b>를 사용해 개발하며, 타입 시스템을 통해 코드의 안정성을 높입니다.',
      '<b>Yarn Berry</b>를 통한 의존성 관리를 선호합니다.',
    ],
  },

  {
    title: 'DevOps',
    description: ['Docker, Github Actions, Gitlab CI를 사용해 <b>CI/CD</b>를 구축한 경험이 있습니다.'],
  },
];

export default function SkillSection() {
  return (
    <section className="flex h-screen-nav w-full snap-center flex-col items-start gap-8">
      <div className="font-skill-title w-full bg-black px-[178px]">Skills</div>
      <ul className="flex w-full flex-col gap-12 px-[178px]">
        {skills.map((skill) => (
          <li key={skill.title} className="grid grid-cols-[1fr_600px] justify-between gap-10">
            <h3 className="text-3xl font-bold">{skill.title}</h3>
            <ul>
              {skill.description.map((description, index) => (
                <li key={index}>
                  <span dangerouslySetInnerHTML={{ __html: description }} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
