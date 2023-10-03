export default function MainPage() {
  return (
    <main className="min-h-scrren-nav w-full p-8 py-16">
      <div className="main-layout">
        <div className="main-text text-3xl">Hello</div>

        <div className="main-animated-container">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              style={{
                animationDelay: `${500 * (7 - i)}ms`,
                left: `${i % 2 === 0 ? '0' : ''}`,
                right: `${i % 2 === 1 ? '0' : ''}`,
              }}
              className="main-animated-item"
              src={`/images/emoji/emoji-${i + 1}.png`}
              alt=""
            />
          ))}
        </div>
      </div>
    </main>
  );
}
