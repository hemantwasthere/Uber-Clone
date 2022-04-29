import Map from './components/Map'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'


export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])


  return (
    <div className='wrapper flex flex-col h-screen'>

      <Map />

      {/* Action Items */}
      <div className='action-items flex-1 p-4'>
        {/* Header */}
        <div className='header flex justify-between items-center'>
          <img className='w-28' alt="Uber logo here" src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <div className='profile flex items-center'>
            <div className='name mr-4 font-semibold'>{user && user.name}</div>
            <img onClick={() => signOut(auth)} className="h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer" alt="" src={user && user.photoUrl} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex'>
          <Link passHref href={'/search'}>
            <button className='flex text-xl font-semibold bg-gray-200 flex-1 m-1 h-32 flex-col justify-center items-center rounded-lg transform hover:scale-105 transition cursor-pointer'>
              <img className='h-3/5' src="https://i.ibb.co/cyvcpfF/uberx.png" alt="" />
              Ride
            </button>
          </Link>

          <button className='flex text-xl font-semibold bg-gray-200 flex-1 m-1 h-32 flex-col justify-center items-center rounded-lg transform hover:scale-105 transition cursor-pointer'>
            <img className='h-3/5' src="https://i.ibb.co/n776JLm/bike.png" alt="" />
            Wheels
          </button>

          <button className='flex text-xl font-semibold bg-gray-200 flex-1 m-1 h-32 flex-col justify-center items-center rounded-lg transform hover:scale-105 duration-100 cursor-pointer'>
            <img className='h-3/5' src="https://i.ibb.co/5RjchBg/uberschedule.png" alt="" />
            Reserve
          </button>
        </div>


        {/* Input Buttons */}
        <div className='h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8'>
          Where to?
        </div>
      </div>
    </div>
  )
}
