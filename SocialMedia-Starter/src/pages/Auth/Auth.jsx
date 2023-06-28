import { useState } from "react"
import React from 'react'
import './Auth.css'
import Logo from '../../img/butterfly.png'
import {useDispatch, useSelector} from 'react-redux'
import { login, signUp } from "../../actions/AuthAction"
const Auth = () => {

  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  const [isSignUp,setIsSignUp] = useState(true)

  console.log(loading)
  const[data,setData]=useState({firstname:"",lastname:"",username:"",password:"",confirmpassword:""})

  const [confirmPass,setConfirmPass]=useState(true)
   //can change for every parameter
  const handleChange =(e)=>{
   setData({...data,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(isSignUp){
      data.password === data.confirmpassword
      ?dispatch(signUp(data)):setConfirmPass(false)
    }
    else{
      dispatch(login(data))
    }
  }

  const resetForm=()=>{
    setConfirmPass(true);
    setData({firstname:"",
    lastname:"",
    username:"",
    password:"",
    confirmpassword:""
  })
  }

  return (
    <div className="Auth">
      {/* left side */}
        <div className="a-left">
            <img src={Logo}alt="" />
            <div className="Webname">
                <h1>Being Social</h1>
                <h3>Way to connect...</h3>
            </div>
        </div>
      {/* right side */}
        <div className="a-right">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
    <h3> {isSignUp ? "SIGN UP":"LOGIN"}</h3>
    {isSignUp && 
    <div> 
      <input type="text" placeholder='First Name' className='infoInput' name='firstname' onChange ={handleChange} value={data.firstname}/>
      <input type="text" placeholder='Last Name' className='infoInput' name='lastname' onChange ={handleChange} value={data.lastname}/>
    </div>
    }
    
    <div>
    <input type="text" placeholder='Username' className='infoInput' name='username' onChange ={handleChange} value={data.username}/>
    </div>
    <div>
      <input type="password" placeholder='Password' className='infoInput' name='password' onChange ={handleChange} value={data.password}/>
     {isSignUp && <input type="password" placeholder='Confirm Password' className='infoInput' name='confirmpassword' onChange ={handleChange} value={data.confirmpassword}/> } 
    </div>

    <span style={{display:confirmPass?"none":"block",color:"red",fontSize:'12px',alignSelf:"flex-end",marginRight:'5px'}}>
      *Confirm Password is not same
    </span>

    <div>
      <span style={{fontSize:"13px",cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=>!prev);resetForm()}}>{isSignUp ?"Already have an account? Login":"Don't have an account? Sign Up"}</span>
    </div>
    <button className='button infoButton' type="submit" disabled={loading}>{loading? "loading":isSignUp?"SIGN UP":"LOGIN"}</button>
      </form>
    </div>
    </div>
  )
}

export default Auth
