import { Navigate, Outlet } from "react-router-dom"
import useAuthStatus from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {

    const {loggedIn, checkingStatus} = useAuthStatus()

    if(checkingStatus){
        return <Spinner/>
    }
  return loggedIn ? <Outlet/> : <Navigate to='/signin'/> // Outlet gives child component that is Profile and Navigate navigates us to signin
}

export default PrivateRoute
