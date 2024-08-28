"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const ErrorPage = ({ error, reset }: Props) => {
  return (
    <>
      <div>Error</div>
      <button className="btn" onClick={() => reset()}>
        {" "}
        Retry{" "}
      </button>
    </>
  );
};

export default ErrorPage;
