export interface IExperienceDetail {
  title: string;
  description: string[];
}

export interface IExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  detailList: IExperienceDetail[];
}

export const experienceList: IExperience[] = [
  {
    company: 'ULIFT',
    position: 'Frontend Developer',
    startDate: '2024.01',
    endDate: '',
    detailList: [
      {
        title: '학습드라마로 배우는 모바일 코딩학습 ‘코딩밸리’ 프론트엔드 개발',
        description: ['사용된 기술: Next.js, TypeScript, tailwindcss'],
      },
    ],
  },
  {
    company: '액스(AX)',
    position: 'Frontend Developer(프리랜서)',
    startDate: '2023.09',
    endDate: '2023.09',
    detailList: [
      {
        title: '여행기업 B2B 예약관리 솔루션 ‘AX Cloud’ 프론트엔드 개발',
        description: [
          '사용된 기술: React, JavaScript, react-hook-form',
          'react-hook-form을 활용한 Form 및 Table, Modal 개발',
        ],
      },
    ],
  },
  {
    company: 'Ingkle',
    position: 'Frontend Developer(프리랜서)',
    startDate: '2023.05',
    endDate: '2023.08',
    detailList: [
      {
        title: '설비 모니터링 시스템 ‘Nazare Cloud’ 프론트엔드 개발',
        description: [
          '사용된 기술: React, TypeScript, GraphQL, Apollo Client, Redux',
          '컴포넌트 신규 개발',
          '프로젝트 아키텍처 개선',
        ],
      },
    ],
  },
  {
    company: 'FOURGRIT',
    position: 'Frontend Developer',
    startDate: '2022.05',
    endDate: '2023.02',
    detailList: [
      {
        title: '프론트엔드 성능 최적화 및 사용자 경험 개선',
        description: [
          'Lazy Loading 적용, Script 분리 및 Inlining, 정적 리소스 CDN 활용 등으로 초기 로딩 성능을 개선해 메인 페이지 LCP 50% 이상 단축',
          'SSR 아키텍처 수정, 컴포넌트 구조 리팩토링 등을 통해 API 요청 횟수 약 40% 감소',
        ],
      },
      {
        title: '개발 환경 개선',
        description: [
          'Gitlab CI/CD + Jest 기반의 테스트 자동화 도입 및 테스트 작성',
          'TypeScript 도입을 위한 TypeScript Template 및 문법 가이드 작성',
          '프로젝트 아키텍처, 컨벤션, 환경에 대한 부분 문서화',
        ],
      },
      {
        title: '데이터 다루는 사람들을 위한 커뮤니티인 Beuillage 개발',
        description: [
          '사용된 기술: Nuxt.js, JavaScript, Vuex, Gitlab CI/CD, Jest',
          '반응형 컴포넌트, 레이아웃 신규 개발',
          '웹 서버 구축 및 관리',
          'i18n 적용',
        ],
      },
      {
        title: '빅데이터를 통해 UX 솔루션을 제공하는 Beusable 개발',
        description: [
          'Vue.js, JavaScript, Vuex, SCSS, jQuery',
          '데이터 시각화 컴포넌트, 반응형 웹 신규 개발',
          '백오피스 기능 구현 및 운영',
          'i18n 적용',
        ],
      },
    ],
  },
  {
    company: 'GameSpring',
    position: 'Frontend Developer',
    startDate: '2022.02',
    endDate: '2022.05',
    detailList: [
      {
        title: '백오피스 개발',
        description: [
          '사용된 기술: React, TypeScript, React Query, Zustand, Styled-Components',
          '백오피스 기능 구현 및 운영',
          'React Query + Zustand를 활용한 리팩토링으로 코드량 70% 감소 및 Store & 비동기 통신 분리',
        ],
      },
    ],
  },
  {
    company: 'GameSpring',
    position: 'Client Developer',
    startDate: '2021.01',
    endDate: '2022.02',
    detailList: [
      {
        title: '게임 클라이언트 개발',
        description: ['Game Client(Unity3D + C#) 설계, 개발 및 유지 보수', 'API 연동 (HTTP, Socket.io)'],
      },
    ],
  },
];
