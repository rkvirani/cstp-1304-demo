export default function StudentRow(props)  {
    return (
        <>
        <tr> <td>Name:</td> <td>{props.firstName}</td> </tr>
        <tr> <td>Last Name:</td> <td>{props.lastName}</td> </tr>
        <tr> <td>Last Name:</td> <td>{props.program}</td> </tr>
        </>

    )
}
