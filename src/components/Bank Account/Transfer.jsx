function Transfer() {
  return (
    <div className="operation operation--transfer">
      <h2 className="mb-6 text-3xl font-semibold text-fontColor2">
        Transfer money
      </h2>
      <form className="form grid grid-cols-3 grid-rows-2 gap-x-1.5 gap-y-4  form--transfer">
        <input
          disabled
          type="text"
          className="form__input w-full  border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none  form__input--to"
        />
        <input
          disabled
          type="number"
          className="form__input  w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none form__input--amount"
        />
        <button disabled className="form__btn  form__btn--transfer">
          &rarr;
        </button>
        <label className="form__label">Transfer to</label>
        <label className="form__label">Amount</label>
      </form>
    </div>
  );
}

export default Transfer;
