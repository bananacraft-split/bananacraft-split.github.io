import React from 'react'

export default function ThreeDimensionalItemImage(props) {
  return (
    <div className='cube' style={{"--scale": props.scale}}>
      <div className='face front' style={{background: `url(/${props.mod}/data/assets/${props.item.leftPicture})`}}></div>
      <div className='face side' style={{background: `url(/${props.mod}/data/assets/${props.item.leftPicture})`}}></div>
      <div className='face top' style={{background: `url(/${props.mod}/data/assets/${props.item.leftPicture})`}}></div>
    </div>
  )
}
