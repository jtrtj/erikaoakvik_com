import { useState } from "react";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Header({ title }) {
  return <h1>{title || "Default title"}</h1>;
}

export default function HomePage() {
  const names = [
    "Something very",
    "Very",
    "Very",
    "Exciting",
    "Is coming soon.",
  ];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <NavBar />
      <Hero />
    </>
  );
}
