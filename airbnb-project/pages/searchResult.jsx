import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';
import { format } from 'date-fns';

const SearchResult = ({searchResults}) => {
  const router = useRouter();
  const { location, startDate, endDate, nºofGuests } = router.query;
  const startDateFormatted = format(new Date(startDate), 'MMM dd, yyyy');
  const endDateFormatted = format(new Date(endDate), 'MMM dd, yyyy');

  const rangeDates = `${startDateFormatted} - ${endDateFormatted}`;
  return (
    <div className=''>
      {<Header placeholder={`${location} | ${rangeDates} | ${nºofGuests} guests`} />}
      <main className="flex">
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs'>
            300+ Stays {rangeDates} for {nºofGuests} guests
          </p>
          <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
          <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
            <p className='button'>Cancellation Flexibility</p>
            <p className='button'>Type of place</p>
            <p className='button'>Price</p>
            <p className='button'>Rooms and Beds</p>
            <p className='button'>More filters</p>
          </div>

          {searchResults && searchResults?.map(result => (
            <div></div>
          ))}
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default SearchResult

export const getServerSideProps = async () => {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json().catch((err) => console.log(err))
  );
  return {
    props: {
      searchResults,
    },
  };
};