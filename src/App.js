import './components/scss/App.scss';
import Header from "./components/NoteComponents/Header.jsx";
import Notes from "./components/NoteComponents/Notes.jsx"
import './components/scss/Note.scss';

export default function App() {
  return (
    <div className="main">
       
      <Header></Header>
      <Notes></Notes>
    </div>
  );
}


