function Movements() {
  return (
    <div className="movements__row px-9 py-16 flex items-center border-b-2 h-6">
      <div className="movements__type sm:text-lg text-xs uppercase rounded-rem font-normal sm:px-2 px-1 py-px sm:py-0.5   mr-8  text-white movements__type--deposit">
        12 deposit
      </div>
      <div className="movements__date sm:visible invisible">3 days ago</div>
      <div className="movements__value sm:text-3xl text-2xl ml-auto">
        4 000€
      </div>
    </div>
  );
}

export default Movements;
