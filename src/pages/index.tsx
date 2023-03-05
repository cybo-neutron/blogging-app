import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Navbar from "~/components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Blogging App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col bg-primary-900 bg-opacity-50">
        <Navbar />
      </main>
    </>
  );
};

export default Home;
