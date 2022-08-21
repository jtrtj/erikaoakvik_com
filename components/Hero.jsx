import Image from "next/image";

export default function Hero({ gradient }) {
  return (
    <>
      <section
        style={{ backgroundImage: `${gradient}` }}
        className="hero is-link is-fullheight-with-navbar"
      >
        <div className="hero-body">
          <section className="section">
            <Image src="/images/profile.png" width="144" height="144" />
            <h1 className="title">Erika Oakvik</h1>
            <h2 className="subtitle">writer & editor</h2>
          </section>
        </div>
      </section>
    </>
  );
}
