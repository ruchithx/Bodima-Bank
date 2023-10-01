import { useState } from "react";
import { useUser } from "../../context/UserProvider";
import { ToastContainer } from "react-toastify";

function Withdraw() {
  const { setUserData, userData, updateWithdraw, notifyError } =
    useUser();
  const [withdraw, setWithdraw] = useState("");

  function withdrawMoney(e) {
    e.preventDefault();
    if (!withdraw) {
      notifyError("Enter amount ");
      return;
    }

    const date = new Date();
    const Today = `${
      date.getMonth() + 1
    }/${date.getDate()}/${date.getFullYear()}`;
    const newData = { data: -withdraw, date: Today };

    setUserData((datas) => [...datas, newData]);
    const wholeData = [...userData, newData];
    updateWithdraw(wholeData);
    setWithdraw("");
  }

  return (
    <div className="operation operation--withdraw mt-11">
      <h2 className="mb-6 text-3xl font-semibold text-fontColor2">Withdraw</h2>
      <form className="form grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-4 form--loan">
        <input
          type="number"
          value={withdraw}
          onChange={(e) => setWithdraw(Number(e.target.value))}
          className="form__input w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none form__input--loan-amount"
        />
        <button
          onClick={(e) => withdrawMoney(e)}
          className="form__btn w-1/4 form__btn--loan"
        >
          &rarr;
        </button>
        <label className="form__label form__label--loan">Amount</label>
        <ToastContainer />
      </form>
    </div>
  );
}

export default Withdraw;
