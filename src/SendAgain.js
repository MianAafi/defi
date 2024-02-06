import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SendAgain.css';
import { FaBitcoin, FaEthereum } from 'react-icons/fa';

const transactions = [
  { icon:"./images/Bitcoin.png", id: 'a337f8ac9d3313bafbf1', amount: '0.65 BTC', },
  { icon: "./images/Ethereum.png", id: 'b337f8ac9d3313bafbf2', amount: '3.0 ETH',  },
  // Add more transactions as needed
];

function SendAgain() {
  // Inline Transaction Component
  const Transaction = ({ icon, id, amount, bgColor }) => (
    <div className="transaction">
      <p className='CryptoMoneyData'>
        <span><img src={icon} alt=''></img>{id}</span> <span className='Amount'>{amount}</span>
      </p>
    </div>
  );

  return (
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
      <a href="/transactions">See All Transactions</a>
    </div>
  );
}

export default SendAgain;
