import {useEffect,useState} from "react";
import {db} from "./firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    serverTimestamp,
    query,
    orderBy
} from "firebase/firestore";

export default function Notes({user}){
    const [notes,setNotes] = useState([]);
    const [text,setText] = useState("");

    useEffect(() => {
        const notesRef = collection(db,"users",user.uid,"notes");
        const q = query(notesRef, orderBy("createdAt","desc"));

        const unsubscribe = onSnapshot(q,snapshot => {
            setNotes(snapshot.docs.map(doc => ({
               id : doc.id,
               ...doc.data() 
            })));
        });
        return unsubscribe;
    }, [user.uid]);

    const addNote = async () => {
        await addDoc(
            collection(db,"users",user.uid,"notes"),
            {
                content : text,
                createdAt : serverTimestamp()
            }
        );
        setText("");
    };

    return (
  <div className="notes-container">
    <h2>Your Notes</h2>

    <div className="notes-input">
    <textarea
        placeholder="Write your note here..."
        value={text}
        onChange={e => setText(e.target.value)}
        className="note-textarea"
    />
      <button onClick={addNote}>Add</button>
    </div>

    {notes.map(note => (
      <div className="note-item" key={note.id}>
        {note.content}
      </div>
    ))}
  </div>
);
}
