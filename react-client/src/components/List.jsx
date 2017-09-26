import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => (
  <div className="List" >
    <h4> listings </h4>
    <p>There are { props.items.length } items.</p>
    { props.items.map((item,i) => <ListItem item={item} key={i}/>)}
  </div>
)

export default List;