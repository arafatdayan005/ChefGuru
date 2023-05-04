import React, { useContext } from 'react'
import { Circles } from 'react-loader-spinner'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {

    const { user, loader } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)


    if (loader) {
        return <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }

    if (user) {
        return children
    }

    return <Navigate to="/login" state={{from: location}} replace ></Navigate>


    return (
        <div>
        </div>
    )
}

export default PrivateRoute