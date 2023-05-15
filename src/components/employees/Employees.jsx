import "bootstrap/dist/css/bootstrap.min.css";
import { Employee } from "./Employee";
import { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
export function Employees() {
    let [insertForm, setInsertForm] = useState(false);
    let [employees, setEmployees] = useState([
        { empId: 1, firstName: "empFirst1", lastName: "empLast1" }
        , { empId: 2, firstName: "empFirst2", lastName: "empLast2" }
        , { empId: 3, firstName: "empFirst3", lastName: "empLast3" }
        , { empId: 4, firstName: "empFirst4", lastName: "empLast4" }
        , { empId: 5, firstName: "empFirst5", lastName: "empLast5" }
    ]);
    const insertNew = (empId, firstName, lastName) => {
        setInsertForm(!insertForm);
        setEmployees([
            ...employees,
            { empId: empId, firstName: firstName, lastName: lastName }
        ]);
    }
    return (<div>
        <h3>Employees</h3>
        <table className="table" style={{ width: "60%" }}>
            <thead className="thead-light">
                <tr>
                    <th>ID</th><th>First Name</th><th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((emp) => {
                    return (
                        <Employee key={emp.empId} employee={emp} />
                    )
                })}
                <AddEmployee insertNew={insertNew} />
            </tbody>
        </table>
    </div>);
}
export function SampleEmployee() {
    const [name, setName] = useState("Jack");
    const [age, setAge] = useState(20);
    useEffect(() => { console.log("use effect in SampleEmployee called") },[age]);
    return (<div>
        <h1>Your name is: {name}</h1><br />
        <h1>Your age is: {age}</h1><br />
        <button className="btn btn-primary" onClick={() => setName("Tom")}>
            Update Name
        </button>&nbsp;&nbsp
        <button className="btn btn-primary" onClick={()=>setAge(age + 1)}>
            Increase Age
            </button>&nbsp;&nbsp
    </div>);
}