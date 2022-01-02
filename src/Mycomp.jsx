export default function Mycomp(props){
    console.log(props);
    return(
        <ul>
            <li>Customer Name: {props.name}</li>
            <li>Email: {props.email}</li>
            <li>Adress: {props.address}</li>
        </ul>
    ) 
}