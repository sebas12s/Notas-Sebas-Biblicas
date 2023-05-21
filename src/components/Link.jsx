import React from 'react';
import '../style/Link.css';

const Link = (props) => {
    return <a href={props.src} target='_blank' rel="noreferrer"> {props.text}. </a>
}
export default Link;