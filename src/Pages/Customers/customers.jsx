
import React, { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerDetails from './CustomerDetails';

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="container mx-auto p-4">
      <div>
        <CustomerList onSelectCustomer={handleSelectCustomer} />
      
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default Customers;
