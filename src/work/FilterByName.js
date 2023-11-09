import React from 'react'
import { Form } from 'react-bootstrap'

const FilterByName = ({inputSearch,setInputSearch}) => {
  return (
    <div>
             <Form.Control
    type="text"
    placeholder="Enter movie title "
    classname="filtrename"
    style={{width:'850px'}}
    onChange={(e) => setInputSearch(e.target.value)}
    value={inputSearch}
    />
    </div>
  )
}

export default FilterByName