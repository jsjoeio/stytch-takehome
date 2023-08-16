import { useStytchUser } from "@stytch/react";
import ContentGate from "./components/ContentGate";
import Login from "./components/Login";
import Profile from "./components/Profile";
import styles from "./index.css";

const App = () => {
  // The useStytchUser hook will return the existing Stytch User object if one exists
  const { user } = useStytchUser();
  // If there is a user show the profile, otherwise show the login form
  return (
    <div className="container">{user ? <Profile /> : <ContentGate />}</div>
  );
};

export default App;
