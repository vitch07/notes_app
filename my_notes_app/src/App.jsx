import {useState} from "react";
import Auth from "./Auth";
import Notes from "./Notes";
import "./styles/app.css"
function App() {
    const [user,setUser] = useState(null);


return (
    <div class = "app-container">
        {user ? <Notes user = {user} /> : <Auth setUser = {setUser}/>}
    </div>
);
}
export default App;


