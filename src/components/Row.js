import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '../context/useUser.js'

export default function ProtectedRoute() {
    const { user } = useUser()
    if (!user || !user.token)  return <Navigate to="/signin" />
    return <Outlet />
}

export default function Row({item, deleteTask}) {
    return (
       <ul>
        <li key = {item.id}>{item.decription}
            <button className = 'delete-button' onClick = {() => deleteTask(item.id)}>Delete</button>
        </li>
        {
            tasks.map(item => (
                <Row key = {item.id} item = {item} deleteTask = {deleteTask}/>
            ))
        }
        </ul>
    )
}