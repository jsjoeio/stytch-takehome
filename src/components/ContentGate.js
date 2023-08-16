import React from "react";
import GuideImage from "./GuideImage";
import Login from "./Login";

const ContentGate = () => {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <GuideImage />
      <h1 className="text-3xl font-bold mb-4">
        Ahsoka Tano: From Padawan to Icon - Your Ultimate Guide
      </h1>
      <p className="mb-6">
        In a galaxy teeming with unforgettable characters, Ahsoka Tano shines as
        a remarkable force to be reckoned with. Created by the visionary Dave
        Filoni, Ahsoka emerged as a symbol of resilience and growth. Inspired by
        Filoni's desire to showcase the personal struggles of a Jedi during the
        Clone Wars, Ahsoka embodies the complexities of loyalty, sacrifice, and
        self-discovery.
      </p>
      <p className="text-xl font-bold pb-2 text-center">
        Enter your email and read the guide today!
      </p>
      <div>
        <Login />
      </div>
    </div>
  );
};

export default ContentGate;
