
import React from "react";
import profilepic from "../assets/pic.png"


import { useGlobalContext } from "../globalvars";
import { list } from "postcss";

function Profile()
{
    const { users, setUsers,permissions,setPermission } = useGlobalContext();
    return(
        <>

            <div className="card">


            <img src={profilepic}></img>

            <h1 className="font-bold font-mono">Name:{users[0].Name}</h1>
            <p className="font-bold font-mono">Email:{users[0].Email}</p>
            <p className="font-bold font-mono">Role:{users[0].Role}</p>

                      

            </div>
            
            

            
            
            {/* <ProfileCard id="0" Name={users[0].Name} Email={users[0].Email} Role={users[0].Role}></ProfileCard> */}
        
        
        </>
        
        
      
   
    );
}


export default Profile