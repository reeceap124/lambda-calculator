import React, {useState} from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
 
import { numbers } from '../../../data' 
import NumberButton from './NumberButton'
//Import your array data to from the provided data file

export default function Numbers () {

  // STEP 2 - add the imported data to state
  const [numButt] = useState(numbers); //create numbutt and its setter. make equal to imported numbers array.
  return (
    <div className='numberWrapper wrapper'>
    {numButt.map((num, index)=>(
      <NumberButton key={index} button={num}/>
    ))}
    </div>
  );
};
