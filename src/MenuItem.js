import React from 'react'
import {Dropdown, Button, ButtonGroup} from 'react-bootstrap'

export default function MenuItem(props) {
  return (
        <Dropdown as={ButtonGroup} className="m-1">
            <Button variant="secondary" href={props.url}>{props.name}</Button>
            <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />
            <Dropdown.Menu>
                <Dropdown.Item href={props.url + "/blocks"}>Blocks</Dropdown.Item>
                <Dropdown.Item href={props.url + "/items"}>Items</Dropdown.Item>
                <Dropdown.Item href={props.url + "/mobs"}>Mobs</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>  )
}
