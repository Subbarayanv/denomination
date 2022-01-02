export default function Mycomp(props){
    console.log(props);
    const {name, email, address} = props;
    return(
        <ul>
            <li>Customer Name: {name}</li>
            <li>Email: {email}</li>
            <li>Adress: {address.door}</li>
        </ul>
    ) 
}
