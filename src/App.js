import Mycomp from "./Mycomp";
import data from "./jsonexample";


export default function App(){
  const renderAddressList = () => {
    return data.map((element) => {
      return <Mycomp key={element.id} name={element.name} email={element.email}/>
    })
  }
  return (
    <>
      {renderAddressList()}
    </>
  ) 
} 