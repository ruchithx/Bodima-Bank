// import { Navbar } from "@material-tailwind/react";
import Navbar from "./components/Navbar/navbar";
import "./App.css";

// import UserAccount from "./components/Bank Account/UserAccount";

import UserAccount from "./components/Bank Account/UserAccount";
import Navbar1 from "./components/Navbar/Navbar1";
import Navbar2 from "./components/Navbar/Navbar2";
// import Account from "./components/Bank Account/UserAccount";
function App() {
  return (
    <div>
      <Navbar2 />
      <UserAccount />
    </div>
  );
}

export default App;
