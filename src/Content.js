import React from "react";
import StateHook from "./StateHook/statehook";
import { useState } from "react";
import List from "./To-Do-List/list";
import PdfGenerator from "./PDF generation/pdf";

const Content = ({ items, handleCheckbox, handleDelete_btn }) => {
  const [code, setCode] = useState("earn");

  const handleSubmit_btn = () => {
    return alert("Submitted");
  };

  const handleLogin_btn = () => {
    console.log("Login Succesfully");
  };

  const handleRegister_btn = (name) => {
    console.log(`welcome to ${name}`);
  };

  const handleReadMore_btn = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
    console.log(e.target.type);
  };

  const handleLogout_btn = () => {
    return alert("logout successfully");
  };

  const codeChange = () => {
    const names = ["java", "javascript", "react"];
    const int = Math.floor(Math.random() * 3);
    setCode(names[int]);
  };
  return (
    <main>
      <button onClick={handleSubmit_btn}>Submit</button>

      <br />

      {/*when pass onclick function with empty parameter, it load the data even without happening onclick function  */}
      <button onClick={handleLogin_btn()}>Login</button>

      <br />

      {/* when create a anonymous function with filled paramete, it pass the data only when click the register button */}
      <button onClick={() => handleRegister_btn("gravitorix")}>Register</button>

      <br />

      {/* event */}
      <button onClick={(e) => handleReadMore_btn(e)}>read more</button>

      <br />

      {/* DoubleClick */}
      <button onDoubleClick={() => handleLogout_btn()}>Logout</button>

      <br />

      {/* state hook */}
      <StateHook />

      {/* <p>lets {code} together</p>
      <button onClick={codeChange}>codeChange</button> */}

      <br />

      <List
        items={items}
        handleCheckbox={handleCheckbox}
        handleDelete_btn={handleDelete_btn}
      />
      {/* 
      <PdfGenerator/> */}
    </main>
  );
};

export default Content;
