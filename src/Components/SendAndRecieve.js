import React, { useState } from 'react';
import '../App.css';
import Send from './Send';
import Recieve from './Recieve';

function SendAndRecieve() {
  const [activeTab, setActiveTab] = useState('send');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="bg-black SendAndRecieveContainer" >
        <div className="tab-buttons">
          <button
            className={`tab-button ${activeTab === 'send' ? 'active' : ''}`}
            onClick={() => handleTabClick('send')}
          >
            Send
          </button>
          <button
            className={`tab-button ${activeTab === 'receive' ? 'active' : ''}`}
            onClick={() => handleTabClick('receive')}
          >
            Receive
          </button>
        </div>

        <div className="send">
          <div className="send-display ">
            {activeTab === 'send' && <Send />}
          </div>

          {activeTab === 'receive' &&  <div className="send-display "><Recieve/></div>}
        </div>
      </div>
    </div>
  );
}

export default SendAndRecieve;
