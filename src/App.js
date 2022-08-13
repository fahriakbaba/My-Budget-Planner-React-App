import './App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import AddExpense from './components/AddExpense';
import FilterSearch from './components/FilterSearch';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Spent from "./components/Spent";


function App() {
  const { items } = useSelector(state => state.budget);
  React.useEffect( () => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <div className="container mt-5 mx-auto">
      <h1 className='text-capitalize my-4'>my budget planner toggle</h1>
      <div className="row  d-flex justify-content-between">
        <div className="col-md alert alert-dark mx-2">
          <Budget />

        </div>
        <div className="col-md alert alert-success mx-2">
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
