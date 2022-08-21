import { getSortedPostsData } from "../../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function FirstPost({ allPostsData }) {
  return (
    <section className="">
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          {" "}
          <p className="title is-1">The Open Window</p>
        </div>
      </div>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          {allPostsData.map(({ id, date, title }) => (
            <div className="box" key={id}>
              <p>
                <strong>{title}</strong>
              </p>
              {date}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
