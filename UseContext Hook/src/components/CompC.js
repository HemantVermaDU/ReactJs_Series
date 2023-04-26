import React, { useContext } from 'react'
import { AppContext } from '../App'

const CompC = () => {
    const name = useContext(AppContext);
    return (
      <>
          <h3> and age is {name.age}</h3>
      </>
    )
}

export default CompC