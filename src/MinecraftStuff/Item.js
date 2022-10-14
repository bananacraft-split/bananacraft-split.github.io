import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import ThreeDimensionalItemImage from './ThreeDimensionalItemImage'

export default function Item(props) {
  
  console.log(props)
  if(!props.item) {
    return null
  }
  return (
      <OverlayTrigger placement="top" overlay={
          <Tooltip  style={{ margin: 0 }} className='mctooltip minecraft'><p className={props.item.type==="music"?"aqua":""}>{props.item.name}</p>{props.item.show_hover_description?props.item.hover_description.map((x,i)=><p className="dark_gray" key={i}>{x}</p>):null}
          {props.item.show_main_hand_traits?<p className="mainhandlabel gray">When in Main Hand:</p>:null}
          {props.item.show_main_hand_traits?props.item.main_hand_traits.map((x,i)=><p className="green" key={i}>&nbsp;{x}</p>):null}
          {props.item.show_armor_trait?<p className="mainhandlabel gray">{props.item.armor_trait_type}</p>:null}
          {props.item.show_armor_trait?<p className="blue">&nbsp;{props.item.armor_trait}</p>:null}
          </Tooltip>
      }>
    <a href={`/#/mod/${props.mod}/item/${props.item.id}/`}  style={{width:props.scale * 32, height:props.scale * 32, display: "block", margin:"auto"}}>{props.item.is3d?<ThreeDimensionalItemImage item={props.item} mod={props.mod} scale={props.scale} />:<img className="pixelated" src={`${props.mod}/data/assets/${props.item.picture}`} alt="" width={props.scale * 32} height={props.scale * 32} />}</a>
    </OverlayTrigger>
  )
}
