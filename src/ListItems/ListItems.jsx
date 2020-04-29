import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';

const ListItems = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
        <p> <input type="text" id={item.key} value={item.text}
        onChange={ (e) => {props.setUpdate(e.target.value, item.key)}}
        />
         <span onClick={ () => props.deleteItem(item.key)} >x</span> </p>
       
        </div>
    })
    return (
        <div className="list">
        <FlipMove duration={300} easing="ease-in-out">
        {listItems}
        </FlipMove>
        </div>
    );
}

export default ListItems; 