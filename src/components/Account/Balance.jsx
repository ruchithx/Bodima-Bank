function Balance() {
  return (
    <div className="balance flex items-end justify-between">
      <div>
        <p className="balance__label md:text-4xl text-xl font-medium">
          Current balance
        </p>
        <p className="balance__date text-lg text-fontColor">
          As of <span className="date">05/03/2037</span>
        </p>
      </div>
      <p className="balance__value md:text-7xl text-4xl font-normal">0000€</p>
    </div>
  );
}

export default Balance;
