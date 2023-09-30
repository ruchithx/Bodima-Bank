import Account from "./components/Account/Account";
import "./App.css";
import { UserProvider } from "./context/UserProvider";
import UserAccount from "./components/Account/UserAccount";

function App() {
  return (
    <div className="bg-BackgroundColor">
      <UserAccount />
    </div>
  );
}

export default App;
