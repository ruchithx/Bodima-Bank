/* eslint-disable */
import { useEffect, useState } from "react";
import { useUser } from "../../context/UserProvider";

function Summary({ userData }) {
  const { fullDeposit, fullWithdraw } = useUser();

  return (
    <div className="summary md:flex items-baseline px-0 py-1 mt-4 md:w-full  grid grid-cols-2 ">
      <p className="summary__label ">In</p>
      <p className="summary__value  text-summaryValueIn">
        {`Rs.${fullDeposit}`}
      </p>
      <p className="summary__label">Out</p>
      <p className="summary__value text-summaryValueOut">
        {`Rs.${fullWithdraw}`}
      </p>

      <button className="btn--sort ml-auto md:visible invisible  border-0 text-lg font-medium">
        &darr; SORT
      </button>
    </div>
  );
}

export default Summary;
