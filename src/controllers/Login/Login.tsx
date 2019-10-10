import React from "react";
import LoginUI from "../../components/Login/LoginUI/LoginUI";
export default function Login() {
  let tempTest = (va: any) => {
    console.log(va);
  };
  return (
    <div>
      <LoginUI Temp={tempTest} />
    </div>
  );
}
