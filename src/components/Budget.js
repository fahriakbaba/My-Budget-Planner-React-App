import React from 'react';
import { useSelector } from "react-redux";
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

function Budget() {
  const { budget, showBudget } = useSelector(state => state.budget);
  return (
    <>
    {
      showBudget ? (
        <ViewBudget budget={budget} />
      ) : (
        <EditBudget />
      )
    }
    </>

    // <div className='d-flex justify-content-between align-items-center'>
    //   Budget
    //   <span style={{fontWeight: "bold", marginLeft:"auto"}}>${budget}</span>
    //   <button className='edit-btn'>Edit</button>
    // </div>
  )
}


/*
<EditBudget />
<ViewBudget />
*/

export default Budget;