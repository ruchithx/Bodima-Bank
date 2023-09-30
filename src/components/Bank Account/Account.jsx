/* eslint-disable */

import Balance from "./Balance";
import Loan from "./Loan";
import Movements from "./Movements";
import Summary from "./Summary";
import Transfer from "./Transfer";
import Withdraw from "./Withdraw";
import SyncLoader from "react-spinners/SyncLoader";

import { useUser } from "../../context/UserProvider";

function Account() {
  const { userData, isLoading } = useUser();

  return isLoading ? (
    <div className="h-screen bg-white w-full flex justify-center mt-96  ">
      <SyncLoader color="#f00" size={30} />
    </div>
  ) : (
    <div className=" container mx-auto w-10/12 mt-5  ">
      <Balance />
      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col  mt-10 gap-10">
        <div className="main-1 col-span-2">
          <div className="movements max-h-128 bg-white rounded-xl overflow-scroll h-4/6">
            {userData?.map((state, i) => (
              <Movements state={state} key={i} i={i} />
            ))}
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
