import { createContext, useContext } from "react";
import { db } from "./../../server/fairbase";
import {
  collection,
  getDoc,
  orderBy,
  query,
  where,
  limit,
  startAfter,
  endAt,
  endBefore,
  doc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [fullDeposit, setFullDeposit] = useState();

  const [fullWithdraw, setFullWithdraw] = useState();
  const [fullBalance, setFullBalance] = useState();

  useEffect(function () {
    async function getData() {
      const userQuery = doc(collection(db, "user"), "lk6TX1UAIV4kAPliNZTt");
      const user = await getDoc(userQuery);

      setUserData(user.data());
    }
    getData();
  }, []);

  function GetFullDepositAndWithdraw() {
    let deposit = fullDeposit;
    let withdraw = fullWithdraw;

    {
      userData.movements?.map((state) =>
        state.data > 0
          ? (deposit += state.data)
          : (withdraw += Math.abs(state.data))
      );
    }
    setFullDeposit(deposit);
    setFullWithdraw(withdraw);
    setFullBalance(deposit - withdraw);
  }

  return (
    <userContext.Provider
      value={{
        userData,
        fullBalance,
        fullDeposit,
        fullWithdraw,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

function useUser() {
  const data = useContext(userContext);
  if (data === undefined)
    throw new Error("🧨🧨User Context was used outside the UserProvider");
  return data;
}

export { UserProvider, useUser };
