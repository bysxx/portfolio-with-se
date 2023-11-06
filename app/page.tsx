import '@styles/main.css';

import Image from 'next/image';

const stackList: { src: string; justify: 'justify-start' | 'justify-center' | 'justify-end' }[] = [
  { src: 'amazonaws', justify: 'justify-start' },
  { src: 'docker', justify: 'justify-end' },
  { src: 'github', justify: 'justify-center' },
  { src: 'tailwindcss', justify: 'justify-start' },
  { src: 'react', justify: 'justify-end' },
  { src: 'javascript', justify: 'justify-start' },
  { src: 'typescript', justify: 'justify-end' },
  { src: 'nextdotjs', justify: 'justify-center' },
];

export default function MainPage() {
  return (
    <main className="min-h-screen-nav w-full p-8 py-16">
      <div className="main-layout">
        <div className="main-text text-3xl">Hello</div>
        <div className="main-animated-container">
          {stackList.map((item, i) => (
            <div
              key={item.src}
              style={{
                animationDelay: `${500 * i}ms`,
                zIndex: `${stackList.length - i}`,
              }}
              className={`main-animated-item ${item.justify}`}
            >
              <Image width={200} height={200} src={`/images/stacks/${item.src}.svg`} alt="" priority={true} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
