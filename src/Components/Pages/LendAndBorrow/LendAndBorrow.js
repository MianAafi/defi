    import React, { useState } from 'react';
import "./LendAndBorrow.css"
import { FaAngleDown } from "react-icons/fa";
import Lend from './Lend';
import Borrow from "./Borrow";

const LendAndBorrow = () => {
    const [activeTab, setActiveTab] = useState('Lend');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className="bg-blur mx-3">
                <h5 className='title-heading'>
                    Lend and Borrow
                </h5>
                <div className="lb-content-box">
                    <div className='d-flex justify-content-between gap-2 flex-wrap'>
                        <div className="lb-box lb-border">
                            <h6 className='text-center d-flex align-items-center gap-1'>
                                <img src="/images/Ethereum.png" alt="" srcSet="" className='pe-1' />
                                Ethereum
                                <p>ETH</p>
                                <FaAngleDown />
                            </h6>
                        </div>

                        <div className="lb-box lb-border">
                            <h6 className='text-center d-flex align-items-center gap-1'>
                                <img src="/images/Ethereum.png" alt="" srcSet="" className='pe-1' />
                                AAVE
                                <FaAngleDown />
                            </h6>
                        </div>

                        <div className="lb-box lb-border">
                            <div>
                                <p>Aggregated Value</p>
                                <h5 className=''>$10.368</h5>
                            </div>
                        </div>

                        <div className="lb-box lb-border">
                            <div>
                                <p>Combined APY</p>
                                <h5 className=''>3.3%</h5>
                            </div>
                        </div>

                        <div className="lb-box lb-border d-flex gap-2">
                            <div>
                                <p>Lending Overview</p>
                                <h5 className=''>$16.549</h5>
                            </div>
                            <div>
                                <p>Earning APY</p>
                                <h5 style={{ color: "#23E33E" }}>3.3%</h5>
                            </div>
                        </div>
                        <div className="lb-box lb-border d-flex gap-2">
                            <div>
                                <p>Borrowing Overview</p>
                                <h5 className=''>$10.368</h5>
                            </div>
                            <div>
                                <p>Borrow APY</p>
                                <h5 style={{ color: "#FF0000" }}>5.3%</h5>
                            </div>
                        </div>
                        <div className="lb-box lb-border d-flex gap-2">
                            <div>
                                <p>Borrow Limit</p>
                                <h5 className=''>3.3%</h5>
                            </div>
                            <div className="loader"></div>
                        </div>
                    </div>

                    <div className="tab-buttons">
                        <button
                            className={`tab-button ${activeTab === 'Lend' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Lend')}
                        >
                            Lend
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'Borrow' ? 'active' : ''}`}
                            onClick={() => handleTabClick('Borrow')}
                        >
                            Borrow
                        </button>
                    </div>

                    <div className="">
                        {activeTab === 'Lend' && <Lend />}

                        {activeTab === 'Borrow' && <Borrow />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LendAndBorrow;
