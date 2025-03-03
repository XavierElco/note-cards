import Note from './Note'
import CreateNotes from './CreateNotes'

const Notes = () => {
    return (
        <div className='notes'>
            <Note></Note>
            <CreateNotes></CreateNotes>
        </div>
    );
};

export default Notes;