import React,{useState} from 'react';
import axios from 'axios';

const User=()=>{
    const [user,setUser]= useState();
    const [password,setPassword] =useState();
    const Login = (user,password)=>{
const config = {
  headers: {    
  }
};
        let MatUtil=user
        let password_Util =password
        axios.post("http://localhost:8080/utilisateurById?password_Util="+password_Util+"&MatUtil="+MatUtil,config)

        .then(res=>{
          console.log("res",res)
         
        }).catch(e=>console.log("e",e))
    }
    return (
     <center><p><div><bdi><h1>Authentfication  </h1></bdi>
     <p>  <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} placeholder="Matricule" /> </p>
     <p>   <input type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/> </p>
            <button type="submit"   onClick={Login(user,password)} >Connecter</button>  
        </div></p></center> 
    )

    }



export default User;