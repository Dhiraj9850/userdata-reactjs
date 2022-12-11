import React,{useState} from 'react';
import Data from '../data/data'

const TableData = () => {
    const [userData, setUserData] = useState(Data);
    const [order, setOrder] = useState("ASC")
    const [isSelected, setIsSelected] = useState(false)

    const sorting =(col)=>{
       if(order ==="ASC"){
         const sorted =[...userData].sort((a,b)=>
            a[col].toLowerCase() > b[col].toLowerCase()?1:-1
         );
         setUserData(sorted);
         setOrder("DSC")
       }
       if(order ==="DSC"){
         const sorted =[...userData].sort((a,b)=>
            a[col].toLowerCase() < b[col].toLowerCase()?1:-1
         );
         setUserData(sorted);
         setOrder("ASC")
       }
    }
    

    const handleOnClick=()=>{
      
            setIsSelected(!isSelected);
    }
    return (
        <div>

            <table className="table table-bordered table-striped ">
                <thead>
                    <tr className="bg-dark text-light">

                        <th scope="col"onClick={()=>sorting("first_name")}>Firstname</th>
                        <th scope="col" onClick={()=>sorting("last_name")}>Lastname</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
              
                  {userData.map((user,id)=>{
                    console.log(user);
                    return(
                        <tr key={id} onClick={()=>handleOnClick(id)} style={{backgroundColor:isSelected?"yellow":"white"}}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.gender}</td>
                        <td style={{color:user.status?"green":"red"}}>{user.status ? "success":"failed"}</td>
                    </tr>
                    )
                  })}
                   
                </tbody>
            </table>

        </div >
    )
}

export default TableData