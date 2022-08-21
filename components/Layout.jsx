import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Layout({ children }) {
  return (
    <>
      <Head name="viewport" content="width=device-width, initial-scale=1" />
      <NavBar />

      <div>{children}</div>
    </>
  );
}
