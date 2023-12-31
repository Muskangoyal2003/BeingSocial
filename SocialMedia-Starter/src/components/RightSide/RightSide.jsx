import React from 'react'
import './RightSide.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import Home from '../../img/homeicon.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'
import ModalShare from '../ModalShare/ModalShare'
const RightSide = () => {
  const [modalOpened,setModalOpened] = useState(false);
  return ( 
    <div className="RightSide">
        <div className="navIcons">
          <Link to='../home'>
          <img src={Home} alt="" />
          </Link>
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard/>

        <button className='button r-button'onClick={()=>setModalOpened(true)}>Share</button>
        <ModalShare modalOpened={modalOpened} setModalOpened={setModalOpened} />
          
    </div>
  )
}

export default RightSide
