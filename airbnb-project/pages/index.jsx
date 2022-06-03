import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";

const Home = ({ exploteData }) => {
  console.log(exploteData);
  return (
    <div className="">
      <Head>
        <title>airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/*Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploteData &&
              exploteData?.map(({ img, location, distance }, index) => (
                <SmallCard
                  key={index}
                  img={img}
                  location={location}
                  distance={distance}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const exploteData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploteData,
    },
  };
};
export default Home;
