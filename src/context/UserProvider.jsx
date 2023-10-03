/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import db from "./../../server/fairbase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const userContext = createContext();

function UserProvider({ children, id }) {
  const userQuery = doc(db, "user", "lk6TX1UAIV4kAPliNZTt");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [fullDeposit, setFullDeposit] = useState({});
  const [fullWithdraw, setFullWithdraw] = useState({});
  const [fullBalance, setFullBalance] = useState({});

  useEffect(function () {
    async function getData() {
      setIsLoading(true);
      const user = await getDoc(userQuery);
      setUserData(user.data().movements);
      setIsLoading(false);
    }
    getData();
  }, []);

  async function updateWithdraw(wholeData) {
    try {
      await updateDoc(userQuery, {
        movements: wholeData,
      });
      notifySccess("WithDraw Success");
    } catch (err) {
      console.log(err);
    }
  }

  function GetFullDepositAndWithdraw() {
    let deposit = 0;
    let withdraw = 0;

    {
      userData.map((state) =>
        state.data > 0
          ? (deposit += state.data)
          : (withdraw += Math.abs(state.data))
      );
    }
    setFullDeposit(deposit);
    setFullWithdraw(withdraw);
    setFullBalance(deposit - withdraw);
  }

  useEffect(
    function () {
      GetFullDepositAndWithdraw();
    },
    [userData]
  );

  function notifyError(message) {
    toast.error(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  function notifySccess(message) {
    toast.success(`${message}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <userContext.Provider
      value={{
        userData,
        fullBalance,
        fullDeposit,
        fullWithdraw,
        setUserData,
        updateWithdraw,
        notifyError,
        notifySccess,
        isLoading,
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
