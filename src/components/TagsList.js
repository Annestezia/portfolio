import React from 'react';
import './TagsList.scss';

export default function TagsList({tags, parent}){  
  const listItems = tags.map((tag,i) =>
    <span key={i} className={`${parent} tag p-sm m-xs`}>
      {tag}    
    </span>
  );
  return (<>{listItems}</>);
}
