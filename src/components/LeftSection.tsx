import React from 'react'
import UserName from './userName'
import Sidebar from './sideDashBoard'
import InvitationBar from './InvitationBar'

function leftSection() {
  return (
    <div className='flex flex-col'>
     <div>
    <UserName/>
     </div>
     <div>
     <Sidebar/>
     </div>
     <div>
       <InvitationBar/>
     </div>
    </div>
  )
}

export default leftSection