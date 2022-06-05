import React, {useContext} from "react";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import { AlertContext } from "../context/alert/AlertContext";

export const Notes = ({notes, onRemove}) =>{
    const alert = useContext(AlertContext)

 return(
    <TransitionGroup component='ul' className="list-group">
    {notes.map(note =>(
        <CSSTransition  key={note.id}
            classNames={'note'}
            timeout={800}
            >
            <li className="list-group-item note">
                <div className="">
                    <strong>{note.title}</strong>
                <small>{note.date}</small>
                </div>
            
            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => {
                onRemove(note.id)
                alert.show('Notes was Delete', 'dark')

            }}>&times;</button></li>
    </CSSTransition>

    ))}
   
</TransitionGroup>
)
}