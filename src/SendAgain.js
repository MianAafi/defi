import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SendAgain.css';

const transactions = [
    { icon: "./images/Bitcoin.png", id: 'a3373f8ac9d3313abbfab1839', amount: '0.65 BTC', },
  { icon: "./images/Ethereum.png", id: 'aa55dacfa6c6975396291e', amount: '148 ETH', },
    { icon: "./images/Bitcoin.png", id: 'dc13d8aab0b7f24e75e9a8', amount: '0.93 BTC', },
    { icon: "./images/Litecoin.png", id: '0b2e7c498776f3c56660', amount: '148 LTC',  }, 
    { icon: "./images/Bitcoin.png", id: '00af48c5a70c8e2a6d80d7', amount: '1.8 BTC', },
    { icon:"./images/Litecoin.png", id: '932489e25085e4e670', amount: '36.9 LTC',  }, 
    { icon: "./images/Tezos.png", id: 'c1b5244030ab98b806e5', amount: '238.5 TE',  }, 
    { icon: "./images/Stellar.png", id: '08627da1fb889af14ef4b0', amount: '24.6 XLM',  }, 
    { icon: "./images/Bitcoin.png", id: 'a3373f8ac9d3313abbfab1839', amount: '0.65 BTC', }
];

function SendAgain() {
  // Inline Transaction Component
  const Transaction = ({ icon, id, amount, bgColor }) => (
    <div className="transaction">
      <p className='CryptoMoneyData'>
        <span className='CryptoIcon'><img src={icon} alt=''></img><span className='CryptoNumber'>{id}</span></span> <span className='CryptoAmount'>{amount}</span>
      </p>
    </div>
  );

  return (
   <div className='SendAgainContainer'> 
   <div className="SendAgain">
      <h5 className="SendAgaintexth5">Send Again</h5>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          icon={transaction.icon}
          id={transaction.id}
          amount={transaction.amount}
          bgColor={transaction.bgColor} // Pass the background color as a prop
        />
      ))}
      <a className='AllTransactionLink' href="/transactions">See All Transactions</a>
    </div></div>
  );
}

export default SendAgain;
