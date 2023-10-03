'use client';

import useFadeIn from '@hooks/Utils/useFadeIn';

export interface IWorkItem {
  src: string;
  year: string;
  type: string;
  name: string;
  delay?: number;
}

export default function WorkItem({ src, year, type, name, delay = 0 }: IWorkItem) {
  const fadeIn = useFadeIn(1, delay);

  return (
    <li className="w-full">
      <div {...fadeIn} className="flex w-full flex-col gap-[13px]">
        <img className="w-full" src={src} alt="" />

        <div className="font-work-item flex w-full justify-between">
          <div>
            <div className="font-work-item-year">{year}</div>
            <div className="pt-[1px]">{type}</div>
          </div>

          <span>{name}</span>
        </div>
      </div>
    </li>
  );
}
