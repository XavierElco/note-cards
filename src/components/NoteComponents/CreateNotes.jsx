import{ LinearProgress } from "@mui/material"

const CreateNotes = () => {
    return (
        <div className="note">
            <textarea></textarea>
            <div className="note__footer">
                <span className="label"></span>
                <button className="note__save"></button>
            </div>
            <LinearProgress className="char__progress"></LinearProgress>
        </div>
    )
};

export default CreateNotes;