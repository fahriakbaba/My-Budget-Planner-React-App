import React from 'react'
import { useDispatch} from "react-redux";
import { addToItems} from "../redux/budgetSlice";

function AddExpense() {
  const [data, setData] = React.useState({
    title: "",
    price: "",
  })
  const dispatch = useDispatch();


  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData(oldState => ({ ...oldState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToItems({price:data.price, title: data.title}));
    setData({
      title:"",
      price:""
    });
  }

  return (
    <form>
      <div className="row" onSubmit={handleSubmit}>
        <div className="form-group col-sm">
          <label htmlFor="name" className='form-label fw-bold'>Name</label>
          <input
            id='name'
            type="text"
            className='form-control'
            value={data.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-sm">
          <label htmlFor="cost" className='form-label fw-bold'>Cost</label>
          <input
            id='cost'
            type="number"
            className='form-control'
            value={data.price}
            name="price"
            onChange={handleChange}
          />
        </div>
      </div>
      <button
       type='submit'
       className='btn btn-primary my-3'
       onClick={handleSubmit} >
        Save
      </button>
    </form>
  )
}

export default AddExpense;