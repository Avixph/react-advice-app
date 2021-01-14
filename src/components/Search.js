import React, { useState, useEffect } from "react";
import axios from "axios";
import { SEARCH_URL } from "../Constants";
import Advice from "./Advice";
import "./css/Search.css";

function Search() {
  const [searchResult, setSearchResult] = useState("");
  const [searchRandAdvice, setSearchRandAdvice] = useState(undefined);

  const handleChange = (event) => {
    setSearchResult(event.target.value);
  };

  const getSearchRandAdvice = () => {
    const searchSlip = axios.get(`${SEARCH_URL}${searchResult}`);
    searchSlip.then(({ data }) => {
      setSearchRandAdvice(data.slips[0]);
      console.log(data.slips[0]);
    });
  };
  useEffect(() => {
    getSearchRandAdvice();
  }, []);

  return (
    <div className="advice-search">
      <form action="" className="search-bar">
        <input
          type="text"
          placeholder="Search For Advice"
          onChange={handleChange}
        />
        <button type="submit" onClick={getSearchRandAdvice}>
          Ask Advice
        </button>
        <div className="search-advice-container">
          {searchRandAdvice === undefined ? (
            ``
          ) : (
            <Advice searchRandAdvice={searchRandAdvice.advice} />
          )}
        </div>
      </form>
    </div>
  );
}

export default Search;
