import React from 'react'
import { FaArrowRight } from "react-icons/fa";

function Send() {
  return (
    <div> <div className="">
    <div className="d-flex gap-5 align-items-center">
      <div className="TotalAmountDiv">
       <span className="TotalAmountspan"> <h1 className="TotalAmount ">
          $100.00
        </h1>
        <p>
          0 BTC ≈ $0.00
        </p></span>
        <div className="amountIcon"><img src="./images/icon.png" alt="icon"/></div>
      </div>
      {/* <div className="flex items-center justify-center text-black">
        <FaArrowRight size={18} />
      </div> */}
    </div>
    <div className="form-content " id='formContentSend' >
      <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary totalAmountData ">
       <p className='mt-4'>
          Pay with
        </p>
        <h6 className='mt-4'>
        <span><img style={{width:'18px', marginRight:'5px',marginBottom:'5px'}} src="./images/Bitcoin.png" alt="icon"></img></span> Bitcoin
        </h6>
      </div>
      <div className='divider'></div>
      <div className="d-flex gap-5 py-3 align-items-center border-b border-secondary totalAmountData">
        <p>
          Send to
        </p>
        <h6>
          bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx
        </h6>
      </div>
      <div className='divider'></div>
      <div className="d-flex gap-5 py-3 align-items-center totalAmountData">
        <p>
         Note
        </p>
        <h5>
          Type to add a note
        </h5>
      </div>
     
    </div>
    <button className="ContinueTransferBtn">
        Continue Transfer
      </button>
  </div></div>
  )
}

export default Send;