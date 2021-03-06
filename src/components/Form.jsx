import React, {useState, useContext} from "react";
import { AlertContext } from "../context/alert/AlertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()

        if(value.trim()){
            firebase.addNote(value.trim()).then(() => {
                alert.show('Note was create', 'success')

            }).catch(() => {
          alert.show('Oh My God!!!', 'danger')

            })
        setValue('')

        } else {
            alert.show('Enter the Text!!!')
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter some text..."
                value={value}
                onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}