import React from 'react'
import Button from './Button';

const btnList = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "Recently Uploaded", "Live Television"];

const ButtonList = () => {
  return (
    <div className='flex'>
      {btnList.map(item => <Button key={item} name={item}/>)}  
    </div>
  )
}

export default ButtonList;