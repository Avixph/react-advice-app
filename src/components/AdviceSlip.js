import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/AdviceSlip.css";
import { RANDOM_URL } from "../Constants";
import Advice from "./Advice";
import Search from "./Search";

function AdviceSlip() {
  const [randAdvice, setRandAdvice] = useState(undefined);

  // const getRandAdvice = async () => {
  //   try {
  //     const response = await axios.get(RANDOM_ADVICE_URL);
  //     const { slip } = response.data;
  //     setRandomAdvice(slip.advice);
  //   } catch (err) {
  //     console.log("Error", err);
  //   }
  // };
  const getRandAdvice = () => {
    const slip = axios.get(RANDOM_URL);
    slip.then(({ data: { slip } }) => {
      setRandAdvice(slip.advice);
    });
  };
  useEffect(() => {
    getRandAdvice();
  }, []);

  return (
    <div className="advice-wrapper">
      <div className="advice-request">
        <h1>Feeling Down?</h1>
        <Search />
        <button type="submit" onClick={getRandAdvice}>
          Random Advice
        </button>
        <Advice randAdvice={randAdvice} />
      </div>
    </div>
  );
}

export default AdviceSlip;
