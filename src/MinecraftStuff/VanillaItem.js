import React, { Component } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import Textures from 'minecraft-textures/dist/textures/1.18'
import Overrides from './ItemOverrides'

export default class VanillaItem extends Component {
  render() {
    let id = Overrides[this.props.item]
    if (id[0] === "#") {
      return <VanillaItem mod={this.props.item} item={this.props.item + "#0"} scale={this.props.scale} />
    }
    let item = Textures.items.filter(x=>x.id==="minecraft:"+id)[0]
    return (
        <OverlayTrigger placement="top" overlay={
            <Tooltip className='mctooltip minecraft'><p>{item.readable}</p></Tooltip>
        }>
      <a href={`https://minecraft.fandom.com/wiki/${id}`}><img className="pixelated" src={item.texture} alt="" width={this.props.scale * 32} height={this.props.scale * 32} /></a>
      </OverlayTrigger>
    )
  }
}
