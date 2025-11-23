import React from 'react'
import CustomerForm from "./customerForm.jsx";
import CustomerData from './customerData.jsx';

const CustomerHomePage = () => {
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="font-bold text-xl">CRM App</h1>
        </nav>
        <CustomerForm/>
        <CustomerData/>
    </div>
  )
}

export default CustomerHomePage

