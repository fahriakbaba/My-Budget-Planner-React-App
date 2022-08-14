import React from 'react';
import { useSelector } from "react-redux";

function Remaining() {
  const { total, budget } = useSelector(state => state.budget);
  return (
    <div className='d-flex justify-content-between align-items-center w-100'>Remaining
      <span style={{fontWeight:"bold",}}>${budget - total}</span>
    </div>
  )
}

export default Remaining;