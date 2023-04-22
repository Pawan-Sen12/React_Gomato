
import React,{useState} from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import {Link,useNavigate} from 'react-router-dom';

const Login = ()=>{
 let navigate = useNavigate();
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');

  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(email,password);

    let result = await fetch('http://localhost:5000/create/login',{
      method : 'POST',
      body : JSON.stringify({email,password}),
      headers : {
        'Content-type' : 'application/json'
      },
     
    });

   result = await result.json()
   console.log(result);
   
   if(result.success){
    localStorage.setItem('userEmail',email);
    localStorage.setItem('authToken',result.authToken);
    console.log(localStorage.getItem('authToken'));
    // console.log(localStorage.getItem('email'));
    navigate('/');
   }
   else if(!result.success){
    alert('Enter Valid Email Address');
   }

  }

  
  const changeEmail = (e)=>{
    setemail(e.target.value);
  }
  const changePassword = (e)=>{
    setpassword(e.target.value);
  }
 
  const NewUser = ()=>{
    navigate('/signup')
  }
 
    return(
      
  <div>
    <div><Header/></div>
     
     <div className="container">
          <form className='Form' >
  <div className="form-group">
    <label >Email address</label>
    <input   type="email" className='form-control'  onChange={changeEmail} value= {email}  placeholder="Enter Your Email"/>
   
  
  <div className="form-group ">
    <label>Password</label>
    <input   type="password" className='form-control' onChange={changePassword} value= {password}  placeholder="Password"/>
  </div>
  </div>
  
  <button  className="m-3 btn btn-danger" onClick={handleSubmit}>Submit</button>
  <Link to = '/signup' className = 'm-3 btn btn-danger ' onClick={NewUser}>New User</Link>
</form> 
</div> 
 
  </div>

    )
}

export default Login;