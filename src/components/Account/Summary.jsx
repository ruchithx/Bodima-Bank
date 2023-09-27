function Summary() {
  return (
    <div className="summary md:flex items-baseline px-0 py-1 mt-4 md:w-full  grid grid-cols-2 ">
      <p className="summary__label ">In</p>
      <p className="summary__value  text-summaryValueIn">0000€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value text-summaryValueOut">0000€</p>

      <button className="btn--sort ml-auto md:visible invisible  border-0 text-lg font-medium">
        &darr; SORT
      </button>
    </div>
  );
}

export default Summary;