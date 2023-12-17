interface IExperienceInfo {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
}

export default function ExperienceInfo({ company, position, startDate, endDate }: IExperienceInfo) {
  return (
    <div className="sticky top-16 flex  w-48 flex-col items-start justify-start gap-3">
      <h2 className="text-2xl font-bold">{company}</h2>
      <h3 className="text-sm">{position}</h3>
      <div className="flex gap-1">
        <span className="text-sm">{startDate}</span>
        <span className="text-sm">~</span>
        <span className="text-sm">{endDate}</span>
      </div>
    </div>
  );
}
