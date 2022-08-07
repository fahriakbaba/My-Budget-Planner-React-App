import './App.css';
import { useSelector } from 'react-redux';
import AddExpense from './components/AddExpense';
import FilterSearch from './components/FilterSearch';

function App() {
  const budget = useSelector(store => store.budget)
  console.log(budget);

  return (
    <div className="container mt-5 mx-auto">
      <h1 className='text-capitalize my-4'>my budget planner</h1>
      <div className="row  d-flex justify-content-between">
        <div className="col-md alert alert-dark mx-2">
          {/* <Budget /> */}
          Budget
        </div>
        <div className="col-md alert alert-success mx-2">
          {/* <Remaining /> */}
          Remaining
        </div>
        <div className="col-md alert alert-info mx-2">
          {/* <Spent /> */}
          Spent so far
        </div>
      </div>
      <h2 className='mt-5 mb-2'>Expenses</h2>
      <div className="row">
        <FilterSearch />
      </div>
      <h2 className='mt-5 mb-2'>Add Expense</h2>
      <div className="row">
        <AddExpense />
      </div>
    </div>
  );
}

export default App;
