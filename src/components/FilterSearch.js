import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../redux/budgetSlice";

function FilterSearch() {
  const { items } = useSelector(state => state.budget);
  const dispatch = useDispatch();
  const handleDelete = (itemID) => {
    dispatch(deleteItem(itemID));
  }

  console.log(items);
  return (
    <article>
      <input type="text" className='form-control' placeholder='Type to search...' />
      <ul className='list-group mt-3'>
        {items.map(item => {
          return (
            <li key={item.id} className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
              {item.title}
              <span className='ms-auto badge bg-primary'>${item.price}</span>
              <RiDeleteBin5Line
                className='text-danger fs-5 ms-2 hover'
                style={{ cursor: "pointer", }}
                onClick={() => handleDelete(item.id)}
              />
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default FilterSearch;



