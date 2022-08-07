import React from 'react'

function AddExpense() {
  return (
    <form>
      <div className="row">
        <div className="form-group col-sm">
          <label htmlFor="name" className='form-label fw-bold'>Name</label>
          <input id='name' type="text" className='form-control' />
        </div>
        <div className="form-group col-sm">
          <label htmlFor="cost" className='form-label fw-bold'>Cost</label>
          <input id='cost' type="number" className='form-control' />
        </div>
      </div>
      <button type='submit' className='btn btn-primary my-3'>Save</button>
    </form>
  )
}

export default AddExpense;