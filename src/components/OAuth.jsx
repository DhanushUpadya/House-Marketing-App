import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { setDoc , doc , getDoc, serverTimestamp} from 'firebase/firestore'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { db } from '../firebase.config'
import googleIcon from '../assets/svg/googleIcon.svg'
import { async } from '@firebase/util'
function OAuth() {

    const navigate = useNavigate()

    const location = useLocation()

    const onGoogleClick = async() =>{
        try {
            const auth = getAuth()

            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth,provider)

            const user = result.user

           const docRef = doc(db,'users',user.uid)

           const docSnap = await getDoc(docRef)

           if(!docSnap.exists()){
            await setDoc(doc(db,'users',user.uid),{
                name: user.displayName,
                email:user.email,
              timeStamp:serverTimestamp()
            })
           }

           navigate('/')
        } catch (error) {
            toast.error('Could not authorize with Google')
        }
    }


  return (
    <div className='socialLogin'>
      <p>Sign {location.pathname === '/signup'? 'up' : 'in'} with </p>
      <button className='socialIconDiv'>
        <img className='socialIconImg' src={googleIcon} alt="Google" onClick={onGoogleClick}/>
      </button>
    </div>
  )
}

export default OAuth
