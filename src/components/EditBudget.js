import React from 'react'
import { useDispatch } from "react-redux";
import { saveBudget } from "../redux/budgetSlice"; 

function EditBudget() {
  const dispatch = useDispatch();
  const [price, setPrice] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveBudget(price));
    setPrice(0);
  }

  return (
    <form className='form-edit' onSubmit={handleSubmit} >
      <input
        type="text"
        className='input-number'
        placeholder='$100'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className='save-btn'>Save</button>
    </form>
  )
}

export default EditBudget;