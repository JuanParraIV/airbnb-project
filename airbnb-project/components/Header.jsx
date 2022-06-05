import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [nºofGuests, setNºofGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleSelect = ({ selection }) => {
    setStartDate(selection.startDate);
    setEndDate(selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/searchResult",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        nºofGuests,
      },
    });
  };
  return (
    /* navContainer */
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 h-auto md:px-10">
      {/* logo left container */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* mid container */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-lg">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 bg-transparent outline-none focus:outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder ? placeholder : "Start your search"}
          name=""
          id=""
        />
        <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right container */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer ml-3">Become a host</p>
        <GlobeAltIcon className="h-6  cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <UserIcon className="h-5" />
            <input
              onChange={(e) => setNºofGuests(e.target.value)}
              value={nºofGuests}
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
            />
          </div>
          <div className="flex">
            <button
              onClick={resetInput}
              className="flex-grow text-gray-500 font-semibold cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleSearch}
              className="flex-grow text-red-400  font-semibold py-2 px-4 rounded-full cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
