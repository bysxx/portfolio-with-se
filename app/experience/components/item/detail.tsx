import useScrollFadeIn from '@hooks/Utils/useScrollFadeIn';
import type { IExperienceDetail } from 'app/experience/list';

interface IExperienceInfo {
  detailList: IExperienceDetail[];
}

function ExperienceDetailItem({ title, description }: IExperienceDetail) {
  const fadeIn = useScrollFadeIn('up', 1);
  return (
    <div {...fadeIn}>
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 flex flex-col gap-3">
        {description.map((contents, index) => (
          <li key={index} className="before:mr-1.5 before:content-['•']">
            {contents}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperienceDetail({ detailList }: IExperienceInfo) {
  return (
    <div className="flex w-72 flex-col gap-16">
      {detailList.map((detail) => (
        <ExperienceDetailItem key={detail.title} {...detail} />
      ))}
    </div>
  );
}
