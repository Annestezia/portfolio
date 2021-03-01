import React,{useState} from 'react';

export default function ToggleMore({text}){
   const [visible, setVisible ] = useState(true);   
    function toggle() {
       setVisible(!visible);
     }
    return (<div className = "project-tile__details">
       <div className ={visible?`more--hidden`: `more`} onClick = {toggle}>{text}</div>
       </div>);
 }