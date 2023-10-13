export default function ContactPage() {
  return (
    <main className="flex flex-col justify-center gap-8">
      <section className="mt-40 px-[178px]">
        <ul>
          <li className="flex gap-2">
            <div className="font-contact-label">Email.</div>
            <div className="font-contact-contents">enya336@gmail.com</div>
          </li>
          <li className="flex gap-2">
            <div className="font-contact-label">Tel.</div>
            <div className="font-contact-contents">+82 10 4258 0021</div>
          </li>
        </ul>
      </section>
      <img src="/images/contact/subway.png" alt="subway" />
    </main>
  );
}
