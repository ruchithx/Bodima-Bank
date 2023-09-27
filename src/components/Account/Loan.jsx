function Loan() {
  return (
    <div className="operation operation--loan mt-11">
      <h2 className="mb-6 text-3xl font-semibold text-fontColor2">
        Request loan
      </h2>
      <form className="form grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-4 form--loan">
        <input
          type="number"
          className="form__input w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none form__input--loan-amount"
        />
        <button className="form__btn w-1/4 form__btn--loan">&rarr;</button>
        <label className="form__label form__label--loan">Amount</label>
      </form>
    </div>
  );
}

export default Loan;
