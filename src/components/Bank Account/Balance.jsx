import { useEffect, useState } from "react";
import { useUser } from "../../context/UserProvider";

function Balance() {
  const date = new Date();

  const { fullBalance } = useUser();

  return (
    <div className="balance flex items-end justify-between">
      <div>
        <p className="balance__label md:text-4xl text-xl font-medium">
          Current balance
        </p>
        <p className="balance__date text-lg text-fontColor">
          As of{" "}
          <span className="date">{`${date.getDate()}/${
            date.getMonth() + 1
          }/${date.getFullYear()}`}</span>
        </p>
      </div>
      <p
        className={`balance__value md:text-7xl text-4xl font-normal `}
      >{`Rs.${fullBalance} `}</p>
    </div>
  );
}

export default Balance;
