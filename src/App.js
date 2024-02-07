import './App.css';
import './Components/SendReceive.css';
import SendAndRecieve from './Components/SendAndRecieve';
import SendAgain from './Components/SendAgain';
import { FaMinus } from "react-icons/fa";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";


import { ImCross } from "react-icons/im";





function App() {
  return (
    <>
      <div className="bg-img">
        <div className="container-fluid mb-5">
          <nav className="nav">
            <p className="m-0 Signin"><img src='./images/signicon.png' alt='icon' /><span className='SigninText'>Sign in</span></p>
            <div className="d-flex gap-3 align-items-center">
              {/* icon  */}
              <div className='MainContainerTimeAndicon'>
               <span className='zoonicon'> <img src='./images/zoom.png' alt='icon' /></span>
                <span><p className="m-0 navtext">12:23 PM</p>
                <p className="m-0 navtextdate">3/25</p></span>
                <div className='navicon'><span >3</span></div>

              </div>
              {/* icon  */}
            </div>
          </nav>
        </div>
        <div className="container bg-blur midContainer" >
       <div className='SendAndRecieveTextIconBG'>
          <h6 className="text-center mb-3 text-white">Send and Receive</h6>
          <div className='iconForminimize'>
            <div className='Circle'><span className='circleIcon'><FaMinus /></span></div>
             <div className='Circle'><span className='circleIcon'>< RiCheckboxMultipleBlankLine    /></span></div> 
             <div className="Circle"><span className='circleIcon'><ImCross   /></span> </div>
             </div></div>
          <div className="row SendAndRecieve">
            <div className="col-lg-6 col-12 ">
              <SendAndRecieve />
            </div>
            <div className="col-lg-6 col-12 SendAgainCol" >
              <SendAgain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
