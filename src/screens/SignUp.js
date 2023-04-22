
import React,{useState} from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link,useNavigate} from 'react-router-dom';



const SignUp = ()=>{

  
  const [name,setname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');
  const [location,setlocation] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(name,email,password,location);

    let result = await fetch('http://localhost:5000/create/user',{
      method : 'POST',
      body : JSON.stringify({name,email,password,location}),
      headers : {
        'Content-type' : 'application/json'
      },
     
    });

   result = await result.json()
   console.log(result);

   if(result.success){
    navigate('/')
   }
   
   if(!result){
    alert('yha problem ha');
   }

  }

  const changeName = (e)=>{
    setname(e.target.value);

  }
  const changeEmail = (e)=>{
    setemail(e.target.value);
  }
  const changePassword = (e)=>{
    setpassword(e.target.value);
  }
  const changelocation = (e)=>{
    setlocation(e.target.value);
  }
 
  const AlreadyUser = ()=>{
    navigate('login')
  }

    return(
        <>
        <div>
    <Header/>
  </div>

        <div className="container">
          <form className="FormSignup">
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" onChange={changeName}  value= {name}  placeholder="Enter Your Name"/>
   
  </div>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" className="form-control"  onChange={changeEmail} value= {email}  placeholder="Enter Your Email"/>
   
  </div>
  <div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control" onChange={changePassword} value= {password}  placeholder="Password"/>
  </div>
  <div className="form-group">
  <label>Address</label>
    <input type = "text" className="form-control" onChange={changelocation}  value= {location}  placeholder="Address"/>
  </div>
  
  <button  className="m-3 btn btn-danger" onClick={handleSubmit}>Submit</button>
  <Link to = '/login' className = 'm-3 btn btn-danger' onClick={AlreadyUser}>Already a user</Link>
</form> 

</div> 

<div>
        
      </div>
        </>
        
        
        
    )
    
    
 
}

    

export default SignUp;