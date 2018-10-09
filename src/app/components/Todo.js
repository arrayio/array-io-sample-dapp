import React from 'react'

const Todo = ({ onClick, completed, text }) => (
    <li className={"list-group-item" + (completed ? " active" : "")} onClick={onClick}>
        {text}
    </li>
)

export default Todo