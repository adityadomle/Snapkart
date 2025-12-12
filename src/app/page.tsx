import connectDb from '@/lib/db'
import User from '@/models/user.model'
import React from  'react'

async function Home() {
  await connectDb()
  const user = await User.find
  return (
    <div>

    </div>
  )
}

export default Home