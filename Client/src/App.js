import './App.css';
import React,{useEffect} from "react";
import Home from "./components/Home"
import Tutorial from "./components/Tutorial"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Room from "./components/Room"
import Login from "./components/Login"
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";
import { db } from "./firebase"

function App() {
const [{user},dispatch]=useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      //console.log("THE USER IS>",authUser);
      
      if(authUser){
        var data={
          win:0,
          lost:0,
          played:0,
          win_perc:0,
        }
        db.collection("users")
      .doc(authUser?.uid).get().then(doc=>{
        if(doc.exists)
        {
          //console.log(doc.data());
           data=doc.data()
        }
        dispatch({
          type:"SET_USER",
          user:authUser,
          win:data.win,
          lost:data.lost,
          played:data.played,
          win_perc:data.win_perc,
        })
      })
        
      }
      else{
        auth.signOut();
        dispatch({
          type:"SET_USER",
          user:null,
        })
      }
    })

  }, [])


  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/join">
        <Room/>
      </Route>
      <Route path="/tutorial">
        <Tutorial/>
      </Route>
      <Route path="/">
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
