import React from 'react';
import { useSelector } from "react-redux";

function Spent() {
  const { total } = useSelector(state => state.budget);

  return (
    <div className='d-flex justify-content-between align-items-center w-100'>
      Spent so far
      <span style={{fontWeight:"bold"}}>${total}</span>
    </div>
  )
}

export default Spent;