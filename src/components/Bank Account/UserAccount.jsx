import { UserProvider } from "../../context/UserProvider";

import Account from "./Account";

function UserAccount() {
  return (
    <UserProvider>
      <Account />
    </UserProvider>
  );
}

export default UserAccount;
// ("lk6TX1UAIV4kAPliNZTt");
