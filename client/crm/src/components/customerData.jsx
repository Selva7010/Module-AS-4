import React from 'react'

const CustomerData = () => {

    const updateData=()=>{
        console.log('Update Data');
        
    }
    const deleteData=()=>{
        console.log('Delete Data');
        
    }


  return (
    <div>
            <div className="overflow-x-auto bg-white shadow-lg rounded-2xl p-6 w-full">
        {/* <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email ID</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Address</th>
              <th className="p-3 text-center">Action</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
                <td className='p-3'>Selvakumar</td>
                <td className='p-3'>Selva@gmail.com</td>
                <td className='p-3'>7010718564</td>
                <td className='p-3'>Sivakasi</td>
                <td className='p-3 flex justify-center'><button onClick={()=>updateData()} className='bg-green-500 px-10 py-2 text-white rounded text-lg font-bold mr-2 cursor-pointer'>Edit</button>
                <button onClick={()=>deleteData()} className='bg-red-500 px-10 py-2 text-white rounded text-lg font-bold cursor-pointer'>Delete</button></td>
                
            </tr>
          </tbody>
        </table> */}
        <table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email ID</th>
      <th>Phone Number</th>
      <th>Address</th>
      <th className='text-center'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>selva</td>
      <td>selva@gmail.com</td>
      <td>7010718564</td>
      <td>Sivakasi</td>
      <td className='p-3 flex justify-evenly'><a href="/updateData"><button onClick={()=>updateData()} className='bg-green-500 px-10 py-2 text-white rounded text-lg font-bold cursor-pointer'>Edit</button></a>
                <button onClick={()=>deleteData()} className='bg-red-500 px-10 py-2 text-white rounded text-lg font-bold cursor-pointer'>Delete</button></td>
    </tr>
   
  </tbody>
</table>
      </div>
    </div>
  )
}

export default CustomerData
