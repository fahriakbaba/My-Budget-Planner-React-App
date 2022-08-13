import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddExpense from './components/AddExpense';
import FilterSearch from './components/FilterSearch';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from "./components/Spent";
import { calculateTotalPrice } from "./redux/budgetSlice";


function App() {
  const { items, total, budget } = useSelector(state => state.budget);
  const dispatch = useDispatch();

  React.useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  React.useEffect( () => {
    dispatch(calculateTotalPrice());
  }, [items, dispatch])

  const numberState = budget - total;
  let bootstrapText ="";
  if(numberState> 0){
    bootstrapText= "col-md alert alert-success mx-2";
  }
  else if(numberState <= 0) {
    bootstrapText ="col-md alert alert-danger mx-2"
  }

  return (
    <div className="container mt-5 mx-auto">
      <h1 className='text-capitalize my-4'>my budget planner toggle</h1>
      <div className="row  d-flex justify-content-between">
        <div className="col-md alert alert-dark mx-2">
          <Budget />

        </div>
        <div className={bootstrapText}>
          <Remaining />

        </div>
        <div className="col-md alert alert-info mx-2">
          <Spent />

        </div>
      </div>
      <h2 className='mt-5 mb-2'>Add Expense</h2>
      <div className="row">
        <AddExpense />
      </div>
      <h2 className='mt-5 mb-2'>Expenses</h2>
      <div className="row">
        <FilterSearch />
      </div>
    </div>
  );
}

export default App;
