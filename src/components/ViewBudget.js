import React from 'react'
import { FaRegEdit } from 'react-icons/fa';

function ViewBudget({budget}) {
  return (
    <div className='d-flex justify-content-between align-items-center'>
      Budget
      <span style={{fontWeight: "bold", marginLeft:"auto"}}>${budget}</span>
      <button className='edit-btn'><FaRegEdit /> </button>
    </div>
  )
}

export default ViewBudget;