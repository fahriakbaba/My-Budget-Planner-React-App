import React from 'react'

function FilterSearch() {
  return(
    <article>
      <input type="text" className='form-control' placeholder='Type to search...' />
      <ul className='list-group mt-3'>
        <li className='list-group-item list-group-item-action'>
          budget list item
        </li>
      </ul>
    </article>
  )
}

export default FilterSearch;