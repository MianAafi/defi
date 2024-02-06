import React, { useState } from "react";
import './App.css';
import SendAgain from './SendAgain';
import { FaArrowRight } from "react-icons/fa";
function App() {
  const [activeTab, setActiveTab] = useState("send");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
  <>
    <div className="container">
      <div className="row SendAndRecieve">
        <div className="col-6  ">
        huhu
        </div>
        <div className="col-6 "> <SendAgain/></div>
      </div>

        </div>
      </>
      );
}

      export default App;
