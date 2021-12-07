import React,{useState} from 'react';
import axios from 'axios'

const User2=()=>{
    const [id,setId]= useState();
    const [MatUtil,setMatUtil] =useState();
    const [nomUtil,setNomUtil] =useState();
    const [Prenom_Util,setPrenom_Util] =useState();
    const [ville_Utilisateur,setVille_Utilisateur] =useState();
    const [poste_Utilisateur,setPoste_Utilisateur] =useState();
    const [password_Util,setPassword_Util] =useState();
    const AddUtil = (id,MatUtil,_nomUtil,_Prenom_Util,ville_Utilisateur,poste_Utilisateur,password_Util)=>{
    const config = {
    headers: {}
};
let id=id
let MatUtil=MatUtil
let nomUtil=nomUtil
let Prenom_Util=Prenom_Util
let ville_Utilisateur=ville_Utilisateur
let poste_Utilisateur=poste_Utilisateur
let password_Util=password_Util
     
        axios.post("http://localhost:8080/addUtilisateur? id="+id+MatUtil+"+MatUtil+nomUtil="+nomUtil+Prenom_Util+"+Prenom_Util+ville_Utilisateur="+ville_Utilisateur+poste_Utilisateur+"+poste_Utilisateur+password_Util="+password_Util+password_Util,config)
                                                                                                                                                        
        .then(res=>{
          console.log("res",res)
         
        }).catch(e=>console.log("e",e))
    }
    return (
     <center><p><div><bdi><h1>Ajout Utilisateur</h1></bdi>
     <p><input type="text" value={id} onChange={(e)=>setId(e.target.value)} placeholder="Identificatent Utilisateur" /> </p>
     <p><input type="text" value ={MatUtil} onChange={(e)=>setMatUtil(e.target.value)} placeholder="Matricule Utilisateur"/> </p>
     <p><input type="text" value ={nomUtil} onChange={(e)=>setNomUtil(e.target.value)} placeholder="Nom Utilisateur "/> </p>
     <p><input type="text" value ={Prenom_Util} onChange={(e)=>setPrenom_Util(e.target.value)} placeholder="Prénom Utilisateur"/> </p>
     <p><input type="text" value ={ville_Utilisateur} onChange={(e)=>setVille_Utilisateur(e.target.value)} placeholder="Ville utilisateur "/> </p>
     <p><input type="text" value ={poste_Utilisateur} onChange={(e)=>setPoste_Utilisateur(e.target.value)} placeholder="Poste utilisateur"/> </p>
     <p><input type="password" value ={password_Util} onChange={(e)=>setPassword_Util(e.target.value)} placeholder="Password utilisateur "/> </p>
      <button type="submit"  onClick={AddUtil(id,MatUtil,nomUtil,Prenom_Util,ville_Utilisateur,poste_Utilisateur,password_Util)} >Ajouter</button>  
      </div></p></center> 
    )
    }
export default User2;