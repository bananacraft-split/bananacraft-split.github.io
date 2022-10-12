import React from 'react'
import { useParams } from 'react-router-dom';

function RouteHelper(props) {
    const ChildClass = props.element
    return (
        <ChildClass {...useParams()} />
    );
}
export default RouteHelper
