import { async } from "@firebase/util"
import { getAuth , sendPasswordResetEmail} from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'



function Forgotpassword() {

  const [email,setEmail] = useState('')

  const onChange = (e)=>{
    setEmail(e.target.value)

  }

  const onSubmit = async (e) =>{
    e.preventDefault()

  try {
    const auth = getAuth()
    
    await sendPasswordResetEmail(auth,email)
    toast.success('Email was sent')
  } catch (error) {
    toast.error('Could not send reset email')
  }
  }
    return (
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot password</p>
        </header>

        <main>

          <form onSubmit={onSubmit}>
            <input type="email" className="emailInput" placeholder="email" id="email" value={email} onChange={onChange}/>

            <Link className="forgotPasswordLink" to='/signin'>Sign in</Link>

            <div className="signInBar">
              <div className="signInText">Send Reset link</div>
              <button className="signInButton">
                <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
              </button>
            </div>
            
            </form>    
        </main>
      
      </div>
    )
  }
  
  export default Forgotpassword
  
  