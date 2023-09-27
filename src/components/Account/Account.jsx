import Balance from "./Balance";
import Loan from "./Loan";
import Movements from "./Movements";
import Summary from "./Summary";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";

function Account() {
  return (
    <div className=" container mx-auto w-10/12 mt-5  ">
      <Balance />

      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col  mt-10 gap-10">
        <div className="main-1 col-span-2">
          <div className="movements bg-white rounded-xl overflow-scroll h-4/6">
            {/* Movement */}
            <Movements />
            <Movements />
            <Movements />
            <Movements />
            <Movements />
            <Movements />
          </div>
          <Summary />
        </div>
        <div className="main-2 md:mb-6">
          <Transfer />
          <Loan />
          <Withdraw />
        </div>
      </div>
    </div>
  );
}

export default Account;
