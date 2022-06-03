import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = ({exploteData}) => {
  console.log(exploteData);
  return (
    <div className="">
      <Head>
        <title>airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          {/*Pull some data from a server - API endpoints */}
          {exploteData && exploteData.map((item, index) =>(
              <div className="flex flex-row">
                <div className="flex">
                  <img src={item.img} alt="" />
                </div>
                <div className="">
                  <h3 className="text-2xl font-semibold">{item.location}</h3>
                  <p className="text-lg">{item.distance}</p>

                </div>
              </div>
            )
          )}
        </section>
      </main>

    </div>
  )
}

export const getStaticProps = async () => {
  const exploteData = await fetch(
    'https://links.papareact.com/pyp')
    .then(
      res => res.json());

  return {
    props: {
      exploteData
    }
  }
}
export default Home
