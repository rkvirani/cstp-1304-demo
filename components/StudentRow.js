export default function StudentRow(props)  {
    return (
        <>
        <tr key={props.key}><td>Name:</td><td>{props.firstName}</td></tr>
        <tr key={props.key}><td>Last Name:</td><td>{props.lastName}</td></tr>
        <tr key={props.key}><td>Last Name:</td><td>{props.program}</td></tr>
        </>

    )
}
