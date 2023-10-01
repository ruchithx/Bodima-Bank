import { UserProvider } from "../../context/UserProvider";
import Account from "./Account";
import "./Account.css";

function UserAccount() {
  return (
    <UserProvider>
      <Account />
    </UserProvider>
  );
}

export default UserAccount;
