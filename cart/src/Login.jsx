import React, { useState } from 'react'
import login, {useLoggedIn} from './cart'

export default function Login(){
    const loggedIn = useLoggedIn();
    const [showLoggin, setShowLogin] = useState(false)
    const [username, setUsername]= useState("sally")
    const [password, setPassword] =  useState('123')
    if(loggedIn){
        return null
    }
    return <>
    <span onClick={() => setShowLogin(!showLoggin)}>
        <i className="ri-fingerprint-ling text-2xl" id="showlogin"></i>
    </span>
    {
        showLoggin && (
            <div 
                className="absolute p-5 border-4 border-blue-800" style={{
                width:300, top:"2rem", left:-250
            }}>
                <input 
                    type="text" 
                    name="" 
                    id="usernamebtn" 
                    placeholder='user name' 
                    value={username} 
                    onChange={evt => setUsername(evt.target.value)}
                    className="border text-sm border-gray-400 p-2 rounded-md w-full "
                />
                <input 
                    type="password" 
                    name="" 
                    id="passwordbtn" 
                    value={password} 
                    onChange={evt => setPassword(evt.target.value)}
                    className="border text-sm border-gray-400 p-2 rounded-md w-full "
                />
                <button className="bg-green-900 text-white py-2 px-5 rounded-md" onClick={() => login(username, password)} id='loginbtn'>
                    Login
                </button>
            </div>
        )
    }
    </>
}