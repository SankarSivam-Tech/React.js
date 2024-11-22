import React from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["javascript ", "react", "next"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  return (
    <main>
      <p>Let's Learn {handleNameChange()}</p>
    </main>
  );
};

export default Content;
