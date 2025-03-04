import Note from './Note'

import CreateNotes from './CreateNotes'
import { useState, useEffect } from "react";
import {v4 as uuid} from 'uuid'
const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState("");

    const deleteNote = (id) => {
        const filterNotes = notes.filter((notes)=> notes.id !== id);
        setNotes(filterNotes);
    };
    // get text and store in state
    const textHandler = (e) => {
        setInputText(e.target.value);
    }

    const saveHandler = () => {
        // 如果需要更新state的时候参考之前的state， 可以在调用setState时候窜入一个
        // callback作为参数， 这个callback会接受之前的状态作为参数，并返回新参数
        setNotes((prevState) =>[
            ...prevState,
            {
                id:uuid(),
                text:inputText
            }
        ]);
    }
    useEffect(() => {
        // if can't find then return null from localStorage
        const data = JSON.parse(localStorage.getItem("Notes"));
        if(Array.isArray(data) && data.length > 0) {
            setNotes(data);
        }
        setLoading(false);
    },[])

    useEffect(() => {
        if (!loading) {
            localStorage.setItem('Notes', JSON.stringify(notes))
        }
    },[notes, loading])
       

    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className='notes'>
            {notes.map((notes) => (
                <Note
                    key={notes.id}
                    id={notes.id}
                    text={notes.text}
                    deleteNote={deleteNote}
                />
            ))}
            <CreateNotes
                textHandler = {textHandler}
                saveHandler = {saveHandler}
                inputText = {inputText}
            />
        </div>
    );
}

export default Notes;