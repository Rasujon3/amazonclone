import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}
