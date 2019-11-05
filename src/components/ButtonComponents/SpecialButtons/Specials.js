import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from '../../../data'
import SpecialButton from './SpecialButton'

export default function Specials() {
  // STEP 2 - add the imported data to state
const [special] = useState(specials)
  return (
    <div className='specialWrapper wrapper'>
      
       {special.map((value, index)=>(
         <SpecialButton key={index} button={value}/>
       ))}
    </div>
  );
};
