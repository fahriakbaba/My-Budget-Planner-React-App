import React from 'react';
import {RiDeleteBin5Line} from 'react-icons/ri';

function FilterSearch() {
  return(
    <article>
      <input type="text" className='form-control' placeholder='Type to search...' />
      <ul className='list-group mt-3'>
        <li className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'>
          budget list item
          <span className='ms-auto badge bg-primary'>$66</span>
          <RiDeleteBin5Line className='text-danger fs-5 ms-2 hover' style={{cursor: "pointer",}} />
        </li>
      </ul>
    </article>
  )
}

export default FilterSearch;