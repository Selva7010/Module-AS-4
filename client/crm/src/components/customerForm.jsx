import React, { useState } from 'react';

const CustomerForm = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [phone, setPhone]=useState("")
    const[address, setAddress]=useState("")

    const submitHandler=(e)=>{
      e.preventDefault()
      console.log({name, email, phone, address})
    }

    return (
        <form onSubmit={submitHandler} className="bg-white p-4 shadow rounded space-y-2">
            <input className="w-full border p-2 rounded mt-2" type="text" placeholder="Name" name='name' value={name} onChange={(e) => setName(e.target.value)} />
            <input className="w-full border p-2 rounded mt-2" type="email" placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="w-full border p-2 rounded mt-2" type="text" placeholder="Phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <input className="w-full border p-2 rounded mt-2" type="text" placeholder="address" name='address' value={address} onChange={(e) => setAddress(e.target.value)} />
            <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2" type="submit">Add Customer</button>
        </form>
    );
};

export default CustomerForm;
