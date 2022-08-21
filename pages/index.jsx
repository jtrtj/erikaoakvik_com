import { useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";

function randColor() {
  let colors = ["pink", "lightsalmon", "aquamarine", "grey", "orchid", "plum"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function randGradient() {
  console.log("in rand gradient");
  return `linear-gradient(to bottom right, ${randColor()}, ${randColor()})`;
}

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>Erika Oakvik</title>
      </Head>
      <Hero gradient={props.gradientStyle} />
    </>
  );
}

export async function getServerSideProps() {
  const gradient = randGradient();
  console.log(gradient);

  return {
    props: {
      gradientStyle: gradient,
    },
  };
}
