import React, { useState } from 'react';

const Lend = () => {
    const lendData = [
        { title: 'Total Borrowed', amount: '$10.368' },
        { title: 'Loan APY%', amount: '5.3%', color: 'rgba(255, 0, 0, 1)' },
        { title: 'Borrow Limit', amount: '3.3%' },
    ];
    const borrowData = [
        { token: 'Ethereum', symbol: 'ETH', available: '15.04', liquidity: '48.0545', totalAPY: '6.06%', image: '/images/Ethereum.png', Btn: "Enable" },
        { token: 'USD Coin', symbol: 'USDC', available: '1523.36', liquidity: '124,365.58', totalAPY: '2.90%', image: '/images/USDC.png', Btn: "Enable" },
        { token: 'Bitcoin', symbol: 'BTC', available: '1.84', liquidity: '24.0654', totalAPY: '0.54%', image: '/images/Bitcoin.png', Btn: "Trade" },
    ];
    const borrowData2 = [
        { token: 'Ethereum', symbol: 'ETH', available: '3.56', image: '/images/Ethereum.png', Btn: "Repay" },
        { token: 'USD Coin', symbol: 'USDC', available: '1246.54', image: '/images/USDC.png', Btn: "Repay" },
    ];
    const borrowData3 = [
        { token: 'Ethereum', symbol: 'ETH', available: '15.04', image: '/images/Ethereum.png', Btn: "Claim" },
        { token: 'USD Coin', symbol: 'USDC', available: '1523.36', image: '/images/USDC.png', Btn: "Claim" },
    ];
    const [activeTab, setActiveTab] = useState('ActiveDeposits');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className=''>
            <div className='Lend-Box my-4'>
                <div className='row'>
                    {lendData.map((data, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4 mb-md-3 mb-lg-0">
                            <div className="lb-border">
                                <div className='p-3'>
                                    <h5>{data.title}</h5>
                                </div>
                                <div className='border-t py-4 text-center'>
                                    <h4 style={{ color: data.color }}>{data.amount}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lb-table lb-border'>
                <div className="t-head mb-2 ">
                    <div className='border-b p-3'>
                        <h5>Borrow Markets</h5>
                    </div>
                </div>
                <div className='p-1 table-responsive'>
                    <div className='min-content'>
                        {borrowData.map((data, index) => (
                            <div key={index} className='lb-border d-flex gap-5 justify-content-between align-items-center p-1 mb-1'>
                                <h4 className='text-center d-flex align-items-center gap-1'>
                                    <img src={data.image} alt="" srcSet="" className='pe-1' />
                                    {data.token}
                                    <p>{data.symbol}</p>
                                </h4>
                                <div><h6>{data.available}</h6> <p>Available</p></div>
                                <div><h6>{data.liquidity}</h6> <p>Liquidity</p></div>
                                <div><h6 style={{ color: "#FF0000" }}>{data.totalAPY}</h6><p>Total APY</p></div>
                                <button className='common-btn'>{data.Btn}</button>
                            </div>

                        ))}
                    </div>

                </div>
            </div>
            <div className="tab-btn2">
                <div className="tab-buttons mb-3 justify-content-start">
                    <button
                        className={`tab-button ${activeTab === 'ActiveDeposits' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ActiveDeposits')}
                    >
                        Active Deposits
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'ActiveBorrows' ? 'active' : ''}`}
                        onClick={() => handleTabClick('ActiveBorrows')}
                    >
                        Active Borrows
                    </button>
                </div>

                <div className="p-2">
                    {activeTab === 'ActiveDeposits' && (

                        <div className='lb-table'>
                            <div className='row'>
                                {borrowData3.map((data, index) => (
                                    <div key={index} className='lb-border d-flex justify-content-between align-items-center py-1 px-2 mb-1'>
                                        <h4 className='text-center d-flex align-items-center gap-1'>
                                            <img src={data.image} alt="" srcSet="" className='pe-1' />
                                            {data.token}
                                            <p>{data.symbol}</p>
                                        </h4>
                                        <div className='d-flex gap-5 align-items-center'>
                                            <div><h6>{data.available}</h6> <p>Lend</p></div>
                                            <button className='common-btn'>{data.Btn}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'ActiveBorrows' && (
                        <div className='lb-table'>
                            <div className='row'>
                                {borrowData2.map((data, index) => (
                                    <div key={index} className='lb-border d-flex justify-content-between align-items-center py-1 px-2 mb-1'>
                                        <h4 className='text-center d-flex align-items-center gap-1'>
                                            <img src={data.image} alt="" srcSet="" className='pe-1' />
                                            {data.token}
                                            <p>{data.symbol}</p>
                                        </h4>
                                        <div className='d-flex gap-5 align-items-center'>
                                            <div><h6>{data.available}</h6> <p>Borrowed</p></div>
                                            <button className='common-btn'>{data.Btn}</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lend;
