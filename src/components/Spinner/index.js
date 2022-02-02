import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { ThreeDots } from "react-loader-spinner";

function Spinner() {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
        <ThreeDots color="#ffffff" height="15"/>
    )
  );
};

export default Spinner;