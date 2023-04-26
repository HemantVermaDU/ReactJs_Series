import React, { useContext } from 'react'
import { AppContext } from '../App'
import CompC from './CompC';

const CompB = () => {
    const name = useContext(AppContext);
  return (
    <>
        <h3>My name is {name.myname}</h3>

        <CompC/>
    </>
  )
}

export default CompB