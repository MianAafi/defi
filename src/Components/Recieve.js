import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import "../App.css";

function Recieve() {
  return (
  
      <div> <div className="">
    <div className="d-flex gap-5 align-items-center">
      <div className="QRCodeDiv">
       <span className="QRCodespan"> <img src='./images/Bitmap.png' alt='QR'/></span>
       
      </div>
      <div className="flex items-center justify-center text-black">
        <FaArrowRight size={18} />
      </div>
    </div>
    <div className="form-content " id='formContentRecieve'>
      <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary totalAmountData" >
       <p >
          Assets
        </p>
        <h6>
        <span className='BitcoinRecieveAssests'><img style={{width:'18px', marginRight:'5px',marginBottom:'5px'}} src="./images/Bitcoin.png" alt="icon"></img></span> Bitcoin
        </h6>
      </div>
      <div className='divider'></div>
      <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary totalAmountData" id='totalAmountDataRecieve'>
        <p>
         BTC Address
        </p>
        <h6>
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx
        </h6>
      </div>
    
     
    </div>
    <button className="ContinueTransferBtn">
       Share BTC Address
      </button>
  </div></div>
 
  );
}

export default Recieve;
