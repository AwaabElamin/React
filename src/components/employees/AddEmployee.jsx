import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/employees.css"
import { useState } from "react";
let AddEmployee = (props) => {
    let [empId, setEmpId] = useState(0);
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    return(<tr className="addEmployeeRow">
        <td><input type="text" placeholder="empID" onChange={(target)=> setEmpId(target.target.value)}/></td>
        <td><input type="text" placeholder="first name" onChange={(target)=> setFirstName(target.target.value)}/></td>
        <td><input type="text" placeholder="last name" onChange={(target)=> setLastName(target.target.value)}/></td>
        <td><button className='btn btn-primary' value= 'CreateForm' 
        onClick={()=>props.insertNew(empId,firstName,lastName)}>Create From</button>
        </td>
        </tr>)
}
export default AddEmployee;