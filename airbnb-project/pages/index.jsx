import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";

const Home = ({ exploteData,cardsData}) => {

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

        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData && cardsData?.map(({img,title},index)=>(
              <MediumCard
                key={index}
                img={img}
                title={title}
              />
            ))}
          </div>
        </section>

        <LargeCard
          className=""
          img='https://links.papareact.com/4cj'
          title='The Greatest Outdoors'
          description='Wishlists curated by Airbnb'
          buttonText='Get Inspired'
        />
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const exploteData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then(
    (res) => res.json()
  );


  return {
    props: {
      exploteData,
      cardsData
    },
  };


};
export default Home;
