import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSelector } from "react-redux";

function FilterSearch() {
  const { items } = useSelector(state => state.budget);
  console.log(items);
  return (
    <article>
      <input type="text" className='form-control' placeholder='Type to search...' />
      <ul className='list-group mt-3'>
        {items.map(item => {
          return (
            <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
              {item.title}
              <span className='ms-auto badge bg-primary'>${item.price}</span>
              <RiDeleteBin5Line className='text-danger fs-5 ms-2 hover' style={{ cursor: "pointer", }} />
            </li>
          )
        })}
      </ul>
    </article>
  )
}

export default FilterSearch;



