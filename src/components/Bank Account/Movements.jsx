import { useState } from "react";

function Movements({ state, i }) {
  const date = new Date();
  const Today = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  const date1 = new Date(Today);
  const date2 = new Date(state.date);

  const diffTime = Math.abs(date1 - date2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
      <div
        className={`movements__type sm:text-lg text-xs  rounded-rem font-normal sm:px-2 px-1 py-px sm:py-0.5   mr-8  text-white ${
          state.data > 0
            ? `movements__type--deposit`
            : `movements__type--withdrawal`
        } `}
      >
        {`${i + 1} ${state.data > 0 ? "deposit" : "withdraw"}`}
      </div>
      <div className="movements__date sm:visible invisible">
        {diffDays != 0 ? `${diffDays} days ago` : "today"}
      </div>
      <div className="movements__value sm:text-3xl text-2xl ml-auto">
        {`Rs. ${Math.abs(state.data)}`}
      </div>
    </div>
  );
}

export default Movements;
