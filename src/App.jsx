import UserAccount from "./components/Bank Account/UserAccount";

import "./App.css";

// import UserAccount from "./components/Bank Account/UserAccount";

import Navbar from "./components/Navbar/Navbar2";
import Dashboard from "./components/Dashboard/DashboardDisplay";
// import Account from "./components/Bank Account/UserAccount";
function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <UserAccount />
    </div>
  );
}

export default App;
