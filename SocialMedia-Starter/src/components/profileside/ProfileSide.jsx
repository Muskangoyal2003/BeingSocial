import React from 'react'
import FollowerCard from '../FollowerCard/FollowerCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
const ProfileSide = () => {
  return (
    <div className='ProfileSide'> 
      <LogoSearch/>
      <ProfileCard location='homepage'/>
      <FollowerCard/>
    </div>
  )
}

export default ProfileSide
