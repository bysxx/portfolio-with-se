'use client';

import { useRef } from 'react';

import SkillSection from './components/skill-section';

export default function AboutPage() {
  const ref = useRef<HTMLElement>(null);

  const scrollDown = () => {
    if (!ref.current) return;

    ref.current.scrollTo({
      top: ref.current.clientHeight,
      behavior: 'smooth',
    });
  };

  return (
    <main ref={ref} className="h-screen-nav snap-y snap-mandatory overflow-scroll">
      <section className="flex min-h-screen-nav w-full snap-center items-center justify-center px-[178px] py-5">
        <div className="flex justify-between gap-32">
          <img className="h-[440px] w-[380px] min-w-[380px]" src="/images/baek.png" alt="" />

          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-about-title">Hello!</h2>
              <div className="flex flex-col gap-4">
                <ul className="font-about-desc-ko flex flex-col">
                  <li>저는 프론트엔드 중심의 3년 차 소프트웨어 엔지니어 백윤성입니다.</li>
                  <li>
                    만드는 사람이 수고로우면 쓰는 사람이 편하고, 만드는 사람이 편하면 쓰는 사람이 수고롭다. 라는
                    마음가짐을 가지고 개발을 합니다.
                  </li>
                  <li>주로 Next.js, TypeScript를 사용해 웹 어플리케이션을 설계 및 개발하고 있습니다.</li>
                </ul>
                <ul className="font-about-desc-en flex flex-col">
                  <li>
                    I am Baek, a software engineer with 3 years of experience, primarily focusing on frontend
                    development.
                  </li>
                  <li>
                    I develop with the mindset that If the creator puts in the effort, the user will find it easy. If
                    the creator takes it easy, the user will struggle.
                  </li>
                  <li>I mainly design and develop web applications using Next.js and TypeScript.</li>
                </ul>
              </div>
            </div>
            <img
              onClick={() => scrollDown()}
              className="w-[70px] cursor-pointer"
              src="/images/icon/scroll-down.svg"
              alt=""
            />
          </div>
        </div>
      </section>

      <SkillSection />
    </main>
  );
}
