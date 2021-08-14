import ChatScreen from "./screens/ChatScreen";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./screens/Login";

function App() {
  const[user , setuser]=useState(null)
  return (
    <div className="App">
      {!user?(
        <Login/>
      ):(
        <Router>
        <Switch>
          <Route path="/chat">
            <ChatScreen />
          </Route>
        </Switch>
    </Router>
      )}
       
      </div>
  );
}

export default App;
