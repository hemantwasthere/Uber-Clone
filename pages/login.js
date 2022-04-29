import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'


function Login() {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])


    return (
        <div className='flex flex-col h-screen w-screen bg-gray-200 p-4'>
            <img className="h-20 w-20 object-contain self-start" src="https://i.ibb.co/n6LWQM4/Post.png" alt="" />
            <img className="h-40 w-full object-contain self-center" src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="" />
            <h1 className='text-5xl pt-4 text-gray-500'>Log in to access your account</h1>
            <button onClick={()=>signInWithPopup(auth, provider)} className='bg-black text-white text-center py-4 mt-8 self-center w-full'>Sign in with google</button>
        </div>
    )

}

export default Login