import React, { useState } from 'react';
import useAppData from '../Hooks/useAppData';
import AppCard from '../Components/AppCard';
import MyContainer from '../Components/MyContainer';
import LoadingSpinner from "../Components/LoadingSpinner";
import NoAppFound from "../Components/NoAppFound";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const { appData, loading } = useAppData();

  const term = search.trim().toLowerCase();
  const searchedApps = term
    ? appData.filter(app =>
        app.title.toLowerCase().includes(term)
      )
    : appData;

  return (
    <div>
      <MyContainer>

        {/* Header */}
        <div className='flex justify-between mt-2 mb-8 p-5 items-center'>
          <h1 className='text-sm font-bold'>
            ({searchedApps.length}) Apps Found
          </h1>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
            />
          </label>
        </div>

        {/* Main Content */}
        {loading ? (
          <LoadingSpinner />
        ) : searchedApps.length === 0 ? (
          <NoAppFound />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-16 mb-16 gap-8 mx-4'>
            <h1 className='col-span-full text-center text-4xl font-extrabold'>
              Our All Applications
            </h1>

            <p className='col-span-full text-center text-lg'>
              Explore All Apps on the Market developed by us. We code for Millions
            </p>

            {searchedApps.map(item => (
              <AppCard item={item} key={item.id} />
            ))}
          </div>
        )}

      </MyContainer>
    </div>
  );
};

export default AllApps;
