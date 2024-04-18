import React from 'react'
import { FcSearch } from "react-icons/fc";


const Search = ({handleSearch}) => {
  return (
    <div className="search">
    <FcSearch className="search-icon" size="1.2rem" />
    <input
      onChange={(event) => handleSearch(event.target.value)}
      type="text"
      placeholder="Type to search.."
    />
  </div>
  )
}

export default Search
