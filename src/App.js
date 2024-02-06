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
      <div className="bg-img">
        <div className="container-fluid mb-5">
          <nav className="nav">
            <p className="m-0">Sign in</p>
            <div className="d-flex gap-3 align-items-center">
              {/* icon  */}
              <div>
                <p className="m-0">12:23 PM</p>
                <p className="m-0">3/25</p>
              </div>
              {/* icon  */}
            </div>
          </nav>
        </div>
        <div className="container bg-blur">
          <h6 className="text-center mb-3 text-white">Send and Receive</h6>
          <div className="row SendAndRecieve">
            <div className="col-6">
              <div className="bg-black">
                <div className="tab-buttons">
                  <button
                    className={`tab-button ${activeTab === "send" ? "active" : ""}`}
                    onClick={() => handleTabClick("send")}
                  >
                    Send
                  </button>
                  <button
                    className={`tab-button ${activeTab === "receive" ? "active" : ""}`}
                    onClick={() => handleTabClick("receive")}
                  >
                    Receive
                  </button>
                </div>

                <div className="send">
                  <div className="send-display p-3">
                    {activeTab === "send" && (
                      <div className="">
                        <div className="d-flex gap-5 align-items-center">
                          <div>
                            <h1>
                              $100.00
                            </h1>
                            <p>
                              0 BTC ≈ $0.00
                            </p>
                          </div>
                          <div className="flex items-center justify-center text-black">
                            <FaArrowRight size={18} />
                          </div>
                        </div>
                        <div className="form-content p-3">
                          <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary">
                            <p>
                              Pay with
                            </p>
                            <h6>
                              Bitcoin
                            </h6>
                          </div>
                          <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary">
                            <p>
                              Send to
                            </p>
                            <h6>
                              bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx
                            </h6>
                          </div>
                          <div className="d-flex gap-5 py-3 align-items-center ">
                            <p>
                              Pay with
                            </p>
                            <p>
                              Type to add a note
                            </p>
                          </div>
                          <button>
                            Continue Transfer
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {activeTab === "receive" && (
                    <div className="receive">
                      Content 2
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-6">
              <SendAgain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
