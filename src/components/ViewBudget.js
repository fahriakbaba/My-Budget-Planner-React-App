import React from 'react'
import { useDispatch } from 'react-redux';
import { FaRegEdit } from 'react-icons/fa';
import { clickEdit } from "../redux/budgetSlice";

function ViewBudget({budget}) {
  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(clickEdit());
  }

  return (
    <div className='d-flex justify-content-between align-items-center'>
      Budget
      <span style={{fontWeight: "bold", marginLeft:"auto"}}>${budget}</span>
      <button className='edit-btn'><FaRegEdit onClick={handleEdit} /> </button>
    </div>
  )
}

export default ViewBudget;