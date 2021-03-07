import React from 'react';
import './TagsList.scss';

export default function TagsList({tags, parent}){  
  const listItems = tags.map((tag,i) =>
    <span key={i} className={`${parent} tag`}>
      {tag}    
    </span>
  );
  return (<>{listItems}</>);
}
