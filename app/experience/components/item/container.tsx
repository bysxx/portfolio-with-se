export default function ExperienceContainer({ children }: { children: React.ReactNode }) {
  return <div className="flex gap-24 border-b border-b-gray-400 p-12 max-sm:flex-col max-sm:gap-8">{children}</div>;
}
