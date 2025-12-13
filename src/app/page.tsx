import { auth } from '@/auth'
import connectDb from '@/lib/db'
import User from '@/models/user.model'
import React from  'react'

async function Home() {
  await connectDb()
  const session = await auth()
  const user = await User.findById(session?.user?.id)
  
  return (
    <div>
 
    </div>
  )
}

export default Home