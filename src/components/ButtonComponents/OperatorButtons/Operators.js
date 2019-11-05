import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import { operators } from '../../../data'
import OperatorsButton from './OperatorButton'

export default function Operators() {
  // STEP 2 - add the imported data to state
  const [ops] = useState(operators);
  return (
    <div className="operatorWrapper wrapper">
      {ops.map((operator, index)=>(
        <OperatorsButton key={index} button={operator}/>
      ))}
    </div>
  );
};
