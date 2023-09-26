function Account() {
  return (
    <div className=" container mx-auto w-10/12 mt-5  ">
      <div className="balance flex items-end justify-between">
        <div>
          <p className="balance__label text-4xl font-medium">Current balance</p>
          <p className="balance__date text-lg text-fontColor">
            As of <span className="date">05/03/2037</span>
          </p>
        </div>
        <p className="balance__value text-7xl font-normal">0000€</p>
      </div>

      <div className="md:grid md:grid-cols-3 sm:flex sm:flex-col  mt-10 gap-10">
        <div className="main-1 col-span-2">
          <div className="movements bg-white rounded-xl overflow-scroll h-4/6">
            {/* Movement */}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4  mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>{" "}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>{" "}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>{" "}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>{" "}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white movements__type--deposit">
                2 deposit
              </div>
              <div className="movements__date  ">3 days ago</div>
              <div className="movements__value text-3xl ml-auto">4 000€</div>
            </div>
            {/* Movement */}
            <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
              <div className="movements__type text-lg uppercase font-normal px-0.5 py-4 rounded-rem mr-8  text-white    movements__type--withdrawal">
                1 withdrawal
              </div>
              <div className="movements__date text-lg uppercase font-normal text-textColor">
                24/01/2037
              </div>
              <div className="movements__value text-3xl ml-auto">-378€</div>
            </div>
          </div>
          <div className="summary flex items-baseline px-0 py-1 mt-4">
            <p className="summary__label ">In</p>
            <p className="summary__value  text-summaryValueIn">0000€</p>
            <p className="summary__label">Out</p>
            <p className="summary__value text-summaryValueOut">0000€</p>
            <p className="summary__label">Interest</p>
            <p className="summary__value text-summaryValueIn">0000€</p>
            <button className="btn--sort">&downarrow; SORT</button>
          </div>
        </div>
        <div className="main-2">
          <div className="operation operation--transfer">
            <h2 className="mb-6 text-3xl font-semibold text-fontColor2">
              Transfer money
            </h2>
            <form className="form grid grid-cols-3 grid-rows-2 gap-x-1.5 gap-y-4  form--transfer">
              <input
                type="text"
                className="form__input w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none  form__input--to"
              />
              <input
                type="number"
                className="form__input w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none form__input--amount"
              />
              <button className="form__btn  form__btn--transfer">&rarr;</button>
              <label className="form__label">Transfer to</label>
              <label className="form__label">Amount</label>
            </form>
          </div>
          <div className="operation operation--loan mt-11">
            <h2 className="mb-6 text-3xl font-semibold text-fontColor2">
              Request loan
            </h2>
            <form className="form grid grid-cols-2 grid-rows-2 gap-x-1.5 gap-y-4 form--loan">
              <input
                type="number"
                className="form__input w-full border-0 bg-bgColor1 font-inherit text-2xl text-center text-fontColor2 rounded-lg transition-all duration-300 focus:bg-bgColor2 focus:outline-none form__input--loan-amount"
              />
              <button className="form__btn w-1/4 form__btn--loan">
                &rarr;
              </button>
              <label className="form__label form__label--loan">Amount</label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
