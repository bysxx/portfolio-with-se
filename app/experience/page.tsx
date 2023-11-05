'use client';

import useFadeIn from '@hooks/Utils/useFadeIn';

import ExperienceContainer from './components/item/container';
import ExperienceDetail from './components/item/detail';
import ExperienceInfo from './components/item/info';
import { experienceList } from './list';

export default function ExperiencePage() {
  const fadeIn = useFadeIn(0.5);

  return (
    <main className="flex w-full flex-col items-center p-4">
      <div {...fadeIn}>
        <ul>
          {experienceList.map((experience) => (
            <ExperienceContainer key={experience.company}>
              <ExperienceInfo {...experience} />
              <ExperienceDetail detailList={experience.detailList} />
            </ExperienceContainer>
          ))}
        </ul>
      </div>
    </main>
  );
}
