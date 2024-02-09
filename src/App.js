import "./App.css";
import "./Components/SendReceive.css";
import SendAndRecieve from "./Components/SendAndRecieve";
import SendAgain from "./Components/SendAgain";
import Nav from "./Components/Commons/Nav";
import Navbtn from "./Components/Ui-Components/Nav-btn";
import LendAndBorrow from "./Components/Pages/LendAndBorrow/LendAndBorrow";

function App() {
  return (
    <>
      <div className="bg-img">
        <Nav />
        <LendAndBorrow  />
        {/* <div className="container bg-blur midContainer">
          <div className="SendAndRecieveTextIconBG">
            <h6 className="text-center mb-3 text-white">Send and Receive</h6>
            <Navbtn />
          </div>
          <div className="row SendAndRecieve">
            <div className="col-lg-6 col-12 ">
              <SendAndRecieve />
            </div>
            <div className="col-lg-6 col-12 SendAgainCol">
              <SendAgain />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
