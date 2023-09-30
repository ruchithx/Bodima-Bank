import { useParams } from "react-router-dom";
import { UserProvider } from "../../context/UserProvider";
import Account from "./Account";

function UserAccount() {
  const { id } = useParams();
  return (
    <UserProvider id={id}>
      <Account />
    </UserProvider>
  );
}

export default UserAccount;
// ("lk6TX1UAIV4kAPliNZTt");
