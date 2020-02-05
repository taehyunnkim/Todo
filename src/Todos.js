import React from 'react';

const Todos = ({ items, deleteItem }) => {

    const itemList = items.length ? (
        items.map(item => {
            return(
                <div className = "collection-item" key={item.id} onClick={() => {deleteItem(item.id)}}>
                    <span>{item.content}</span>
                </div>
            )
        })
    ): (<p className="center warning">You have no todo's left</p>);

    return (
        <div className="todos collection">
            {itemList}
        </div>
    );
}

export default Todos;