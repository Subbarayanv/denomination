export default function Mycomp(props){
    console.log(props);
    const {name, email, address} = props;
    return(
        <ul>
            <li>Customer Name: {name}</li>
            <li>Email: {email}</li>
            <li>Door: {address.door}</li>
            <li>City: {address.city}</li>
            <li>State: {address.state}</li>
            <li>Country: {address.country}</li>
        </ul>
    ) 
}
