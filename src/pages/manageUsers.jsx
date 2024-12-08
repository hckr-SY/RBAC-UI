import React, { useContext, useState } from "react";
import { useGlobalContext } from "../globalvars";
import ModalDel from "./modaldel";
import ModalEdit from "./modaledit";
import ModalNew from "./modalnew";
function ManageUsers()
{

    const { users, setUsers,permissions,setPermission } = useGlobalContext();

    const [delopen,setDelOpen] = useState(false);
    const [editopen,setEditOpen] = useState(false);
    const [newopen,setNewOpen] = useState(false);

    const [useridx,setUseridx] = useState(0);
     

    // 
    
   
    return(
        <>

        
        
        <div className="overflow-x-auto max-w-4xl mx-auto mt-10">
        <div >

        <p className="font-bold text-xl underline text-left mb-5 ">Manage Users </p>

        <button class="bg-green-500 text-white rounded mb-5 float-right px-2 py-1" onClick={(()=>{{setNewOpen(true);}})}>Create User</button>
        

        </div>
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">ID</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">EMAIL</th>
            <th className="px-4 py-2 border border-gray-300">ROLE</th>
            <th className="px-2 py-1 border border-gray-300 ">MODIFY</th>
          </tr>
        </thead>
        <tbody>
          {users.map((row,idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border border-gray-300">{idx}</td>
              <td className="px-4 py-2 border border-gray-300">{row.Name}</td>
              <td className="px-4 py-2 border border-gray-300">{row.Email}</td>
              <td className="px-4 py-2 border border-gray-300">{row.Role}</td>
              <td className="px-2 py-1 border border-gray-300  flex gap-4"><button class="bg-red-500 text-white px-2 py-1 rounded ml-auto" onClick={()=>{if(idx!==0){setDelOpen(true); setUseridx(idx);}}}>Del</button>
              <button class="bg-blue-500 text-white px-2 py-1 rounded mr-auto" onClick={()=>{if(idx!==0){setEditOpen(true); setUseridx(idx);}}}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {delopen && <ModalDel  index={useridx} setvalue={setDelOpen}/>}
    {editopen && <ModalEdit index={useridx} setvalue={setEditOpen}/>}
    {newopen && <ModalNew  setvalue={setNewOpen}/>}


    </>
        
    );
}


export default ManageUsers