import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionDetails from './TransactionDetails';

const Transactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const handleSelectTransaction = (transaction) => {
    setSelectedTransaction(transaction);
  };

  return (
    <div className="container mx-auto p-4">
    
       
          {/* Transaction List */}
          <TransactionList onSelectTransaction={handleSelectTransaction} />
      
      
          {/* Transaction Details */}
          {selectedTransaction && <TransactionDetails transaction={selectedTransaction} />}
        
    </div>
  );
};

export default Transactions;
