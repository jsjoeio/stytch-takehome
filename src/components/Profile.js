import { useStytch, useStytchSession, useStytchUser } from "@stytch/react";
import React from "react";
import AhsokaGuide from "./AhsokaGuide";
import Header from "./Header";

/*
The Profile component is shown to a user that is logged in.

This component renders the full User and Session object for education. 

This component also includes a log out button which is accomplished by making a method call to revoking the existing session
*/
const Profile = () => {
  const stytch = useStytch();
  // Get the Stytch User object if available
  const { user } = useStytchUser();
  // Get the Stytch Session object if available
  const { session } = useStytchSession();

  return (
    <>
    <Header />
    <div className="card">
      <h1>Your FREE Guide</h1>
      <p>
        Thanks for joining the Ahsoka Super Fans! Here is your free guide:
      </p>
      <AhsokaGuide />
      
    </div>
    </>
  );
};

export default Profile;
