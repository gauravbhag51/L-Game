import React, { useState, useEffect, useRef } from "react";
import "./Game.css";
import Valid from "../valid_L.js";
import Moves from "../get_no_of_move"
import { db } from "../firebase"
import {useStateValue} from "../StateProvider";
function Game({color,socket}) {
    
  let colors = ["white", "red", "blue", "white", "pink","lightblue","#0deaff"];
  const [arr, setArr] = useState([
    3,
    0,
    0,
    0,
    1,
    2,
    2,
    2,
    1,
    1,
    1,
    2,
    0,
    0,
    0,
    3
  ]);
  const [{user,win,lost,played,win_perc},dispatch]=useStateValue();
  const [gridSize, setGridSize] = useState(4);
  const [tempState, setTempState] = useState([]);
  const [previous, setPrev] = useState([]);
  const [wrongMove, setMove] = useState(false);
  const [possibleArray, setArray] = useState([]);
  const [secondStep, setSecondStep] = useState(false);
  const [coin, setCoin] = useState(-1);
  const [newCoin, setNewCoin] = useState(null);
  const [firstStep, setFirstStep] = useState(false);
  //console.log(color==="red",firstStep);
  const[moves,setMoves]=useState(Moves(arr));
  const [loss, setLost] = useState(false);
  const [won, setWin] = useState(false);
  socket?.on('state-changed',(state)=>{
    setArr(state);
})
socket.on("your-turn",()=>{
    setFirstStep(true);
    setMoves(Moves(arr,color));
})

socket.on("YOU-WIN",()=>{
  db.collection("users")
  .doc(user?.uid)
  .set({
    win: win+1,
    lost: lost,
    played:played+1,
    win_perc:((win+1)/(played+1))*100,
  });
  dispatch({
    type:"SET_DATA",
    win: win+1,
    lost: lost,
    played:played+1,
    win_perc:((win+1)/(played+1))*100,
  })
    setWin(true)
    setFirstStep(false);
})
useEffect(()=>{
    if(moves===0)
    {
        socket?.emit("GAME-END")
        //console.log(user?.uid)
        db.collection("users")
          .doc(user?.uid)
          .set({
            win: win,
            lost: lost+1,
            played:played+1,
            win_perc:(win/(played+1))*100,
          });
          dispatch({
            type:"SET_DATA",
            win: win,
            lost: lost+1,
            played:played+1,
            win_perc:(win/(played+1))*100,
          })
        setLost(true);
        setFirstStep(false);
    }
},[moves])
  let my,opp,my_sec;
  if(color==="red")
  {
  my=1;
  opp=2;
  my_sec=4;
  }
  else
  {
    my=2;
    opp=1;
    my_sec=5;
  }
  useEffect(() => {
    if (wrongMove) {
      //console.log(previous);
      let temp_array = arr;
      for (let i = 0; i < arr.length; i++) {
        if (temp_array[i] === my || temp_array[i] === my_sec) {
          temp_array[i] = 0;
        }
      }
      for (let i = 0; i < previous.length; i++) {
        temp_array[previous[i]] = my;
      }
      setArr(temp_array);
      setClick(false);
      setPrev([]);
      setMove(false);
      setTempState([]);
    }
  }, [wrongMove]);

  useEffect(() => {
    if(newCoin)
    {
    let ard = arr;
    ard[coin] = 0;
    ard[newCoin] = 3;
    setArr(ard);
    //console.log(arr);
    socket?.emit('change-state',ard);
    // setImage(newCoin);
    setMoves(Moves(arr,color));
    setSecondStep(false);
    setFirstStep(false);
    socket?.emit('move-complete',ard);
    setCoin(-1);
    }
    // colors[3]='white';
  }, [newCoin]);

  useEffect(()=>{
      setFirstStep(color==="red");
      setSecondStep(false);
  },[])
  const boardRef = useRef(null);

  const [clickState, setClick] = useState(false);
  useEffect(() => {
    if (tempState.length === 4) {

      let check = 1;
      for (let i = 0; i < possibleArray.length; i++) {
        check = 1;
        for (let j = 0; j < tempState.length; j++) {
          if (possibleArray[i][j] !== tempState[j]) {
            check = 0;
          }
        }
        if (check) break;
      }
      let temp_check=1;
      let a1=tempState.sort((a,b)=>a-b);
      let a2=previous.sort((a,b)=>a-b);
      //console.log(a1,a2);
      for(let i=0;i<4;i++)
      {
          if(a1[i]!==a2[i])
          {
              temp_check=0;
              break;
          }
      }
      if(temp_check)
      check=0;
//console.log(check)
      if (check) {
        let ard = arr;

        for (let i = 0; i < ard.length; i++) {
          if (ard[i] === my_sec) {
            ard[i] = 0;
          }
        }
        setFirstStep(false);
        setSecondStep(true);
        setArr(ard);
        socket?.emit('change-state',ard);
      } else {
        setMove(true);
      }
      setClick(false);
      setTempState([]);
      // setPrev([]);
    }
  }, [tempState]);




  const handleSkip=()=>{
    setSecondStep(false);
    setFirstStep(false);
    socket?.emit('move-complete',arr);
    setCoin(-1);
  }
  return (
    <div className="game">



  <h1 style={{color:`${firstStep||secondStep?colors[my]:colors[opp]}`}}>{firstStep||secondStep?"Your Turn":`${colors[opp]}'s turn`}</h1>
      <div className="board">
        {Array(16)
          .fill()
          .map((e, index) => (
            <div
              className="square"
              key={index}
              id={index}
              style={{ background: `${colors[arr[index]]}` }}
              onClick={(e) => {
                let indexii = Number(e.target.id);
                if (secondStep) {
                  if (arr[indexii] === 3) {
                    setCoin(indexii);
                    let ard=arr;
                    ard[indexii]=6;
                    setArr(ard);
                  }
                  if (arr[indexii] === 0 && coin !== -1) {
                    setNewCoin(indexii);
                    let ard=arr;
                    ard[coin]=0;
                    setArr(ard);

                  }
                }
                if (firstStep) {
                  //console.log(arr);
                  if (
                    arr[indexii] !== 0 &&
                    arr[indexii] !== my &&
                    arr[indexii] !== my_sec
                  ) {
                    return;
                  }
                  if (clickState === false) {
                    setClick(true);
                    setPrev([]);
                    setArray(Valid(indexii));
                    setTempState((prevValue) => {
                      return [...prevValue, indexii];
                    });
                    let ar = arr;
                    //console.log("a==" + ar);

                    for (let i = 0; i < ar.length; i++) {
                      if (ar[i] === my) {
                        ar[i] = my_sec;

                        setPrev((prevValue) => {
                          return [...prevValue, i];
                        });
                      }
                    }

                    ar[index] = my;
                    //console.log("b==" + ar);
                    setArr(ar);
                  }
                }
              }}
              onMouseOver={(e) => {
                let indexi = Number(e.target.id);
                // //console.log(indexi);
                if (clickState && !tempState.includes(indexi)) {
                  if (
                    arr[indexi] !== my &&
                    arr[indexi] !== 0 &&
                    arr[indexi] !== my_sec
                  ) {
                    // //console.log(previous);
                    setMove(true);

                    return;
                  }
                  setTempState((prevValue) => {
                    return [...prevValue, indexi];
                  });

                  let ar = arr;

                  ar[indexi] = my;
                  setArr(ar);
                }
              }}
            >
              {(arr[index]===3||arr[index]===6)&&<img id={index} className="image" src="https://hwwmath.looiwenli.com/loonie.gif" alt="" />}
            </div>
          ))}
          
      </div>
      
          <h1 className="moves">{moves} Possible No. of Moves</h1>
          {loss&&<h1 className="moves"> You LOST</h1>}
          {won&&<h1 className="moves"> You WON</h1>}
          {secondStep&&<button className="skip" onClick={handleSkip}>Skip</button>}
    </div>
  );
}

export default Game;
