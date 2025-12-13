import { auth } from '@/auth'
import EditRoleMobile from '@/components/EditRoleMobile'
import connectDb from '@/lib/db'
import User from '@/models/user.model'
import { redirect } from 'next/dist/server/api-utils'
import React, { use } from  'react'

async function Home() {
  await connectDb()
  const session = await auth()
  const user = await User.findById(session?.user?.id)
  if (!user) {
    redirect("/login")
  }

  const inComplete=!user.mobile || !user.mobile || (!user.mobile && user.role=="user")
  if(inComplete){
    return <EditRoleMobile/>
  }
  
  return (
    <div>
 
    </div>
  )
}

export default Home