import { useState } from "react"

import {Link, useNavigate} from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

import visibilityIcon from '../assets/svg/visibilityIcon.svg'
function Signin() {

    const [showPassword, setShowPassword] = useState(false)

    const[formData, setFormData] = useState({
        email:"",
        password:""
    })

    const {email, password} = formData

    const navigate = useNavigate()

    const onChange = (e)=>{
      setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
       
      
        
  
    }
    return (
     <>
     <div className="pageContainer">
        <header>
            <p className="pageHeader">Welcome!</p>
        </header>

        <form>
          
            <input type="email" className="emailInput" placeholder="Email" id="email" value={email} onChange={onChange}/>

            <div className="passwordInputDiv">
                <input type={showPassword ? 'text' : 'password'} className='passwordInput' placeholder="Password" id="password" value={password} onChange={onChange} />

                <img src={visibilityIcon} alt="Show Password" className="showPassword" onClick={()=> setShowPassword((prevState) => !prevState)} />
            </div>

            <Link to='/forgotpassword' className="forgotPasswordLink">Forgot Password</Link>

            <div className="signInBar">
                <p className="signInText">
                    Sign In
                </p>
                <button className="signInButton">
                    <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
                </button>
            </div>

        </form>

        <Link to = '/signup' className="registerLink">Sign Up Instead?</Link>
     </div>
     </>
    )
  }
  
  export default Signin
