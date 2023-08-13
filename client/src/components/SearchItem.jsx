import React, { useState,useEffect } from "react";

const SearchItem = ({ search, setSearch}) => {
    return (
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <input className="ml-4 form-control " type="text" placeholder="Search" aria-label="Search"
          id='search'
          role='searchbox'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
      />
  </form>
    )
}

export default SearchItem