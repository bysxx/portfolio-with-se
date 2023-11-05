import type { IWorkItem } from './item';
import WorkItem from './item';

const workItems: IWorkItem[] = [
  {
    src: '/images/work/beusable.png',
    year: '2022',
    type: 'Fourgrit',
    name: 'Beusable',
  },
  {
    src: '/images/work/forum.png',
    year: '2022',
    type: 'Fourgrit',
    name: 'Beusable - Forum',
  },
];

export default function WorkPage() {
  return (
    <main className="flex items-center justify-center px-[178px] py-[200px]">
      {/* max-lg:grid-cols-2 */}
      <div className="grid grid-cols-3 gap-[50px]">
        <ul className="flex flex-col gap-[100px]">
          {workItems
            .filter((_, index) => index % 3 === 0)
            .map((item, index) => (
              <WorkItem key={index} {...item} delay={index * 1.2} />
            ))}
        </ul>
        <ul className="flex flex-col gap-[100px]">
          {workItems
            .filter((_, index) => index % 3 === 1)
            .map((item, index) => (
              <WorkItem key={index} {...item} delay={index * 1.2 + 0.4} />
            ))}
        </ul>
        <ul className="flex flex-col gap-[100px]">
          {workItems
            .filter((_, index) => index % 3 === 2)
            .map((item, index) => (
              <WorkItem key={index} {...item} delay={index * 1.2 + 0.8} />
            ))}
        </ul>
      </div>
    </main>
  );
}
