export function Employee({ employee }) {
    return (
        <tr key={employee.empId}>
            <td>{employee.empId}</td><td>{employee.firstName}</td><td>{employee.lastName}</td>
        </tr>
    )
}
