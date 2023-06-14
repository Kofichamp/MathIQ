
import React, { useState } from "react";

function Addition() {
  const [state, setState] = useState({
    level: 1,
    num1: 3,
    num2: 5,
    response: "",
    score: 0,
    incorrect: false
  });

  function inputKeyPress(event) {
    if (event.key === "Enter") {
      const answer = parseFloat(state.response);
      let correctAnswer;
      if (state.level === 1) {
        correctAnswer = state.num1 + state.num2;
      } else if (state.level === 2) {
        correctAnswer = state.num1 - state.num2;
      } else if (state.level === 3) {
        correctAnswer = state.num1 * state.num2;
      } else if (state.level === 4) {
        correctAnswer = state.num1 / state.num2;
      }

      const tolerance = 0.01; // Adjust this value based on desired tolerance
  
      if (Math.abs(correctAnswer - answer) <= tolerance) {
        // User got the answer correct
        setState((prevState) => ({
          ...prevState,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          score: prevState.score + 1,
          response: "",
          incorrect: false,
        }));
      }  else {
        // User got the answer incorrect
        setState(prevState => ({
          ...prevState,
          score: prevState.score - 1,
          response: "",
          incorrect: true
        }));
      }
    }
  }

  function updateResponse(event) {
    setState({
      ...state,
      response: event.target.value
    });
  }

  function moveToNextLevel() {
    const nextLevel = state.level + 1;
    setState({
      ...state,
      level: nextLevel,
      score: 0
    });
  }

  if (state.level === 1 && state.score === 10) {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 75, color: "green" }}>Level 1 Completed!</div>
        <button onClick={moveToNextLevel}>Move to Level 2</button>
      </div>
    );
  } else if (state.level === 2 && state.score === 10) {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 75, color: "green" }}>Level 2 Completed!</div>
        <button onClick={moveToNextLevel}>Move to Level 3</button>
      </div>
    );
  } else if (state.level === 3 && state.score === 10) {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 75, color: "green" }}>Level 3 Completed!</div>
        <button onClick={moveToNextLevel}>Move to Level 4</button>
      </div>
    );
  } else if (state.level === 4 && state.score === 10) {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 75, color: "green" }}>Level 4 Completed!</div>
        <button onClick={moveToNextLevel}>Level Completed, Congratulations!!!</button>
      </div>
    );
  }

  let operator;
  if (state.level === 1) {
    operator = '+';
  } else if (state.level === 2) {
    operator = '-';
  } else if (state.level === 3) {
    operator = '×';
  } else if (state.level === 4) {
    operator = '÷';
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
      <div style={{ color: state.incorrect ? "red" : "black", fontSize: 72 }}>
        {state.num1} {operator} {state.num2}
      </div>
      <input
        autoFocus={true}
        onKeyDown={inputKeyPress}
        onChange={updateResponse}
        value={state.response}
      />
      <div>Score: {state.score}</div>
    </div>
  );
}

export default Addition;


  

// import { useState } from "react";

// function Addition() {
//     const [state, setState] = useState({
//         level: 1,
//         num1: 3,
//         num2: 5,
//         response: "",
//         score: 0,
//         incorrect: false
//     });

//     function inputKeyPress(event) {
//         if (event.key === "Enter") {
//             const answer = parseInt(state.response)
//             if (state.level === 1) {
//                 state.num1 + state.num2;
//             } else if (state.level === 2) {
//                 state.num1 - state.num2;
//             } else if (state.level === 3) {
//                 state.num1 * state.num2;
//             } else if (state.level === 4) {
//                 state.num1 / state.num2;
//             }
//             if (state.num1 + state.num2 === answer) {
//                 // User got the answer correct
//                 setState(prevState => ({
//                     ...prevState,
//                     num1: Math.ceil(Math.random() * 10),
//                     num2: Math.ceil(Math.random() * 10),
//                     score: prevState.score + 1,
//                     response: "",
//                     incorrect:false
//                 }));
//             } else {
//                 // User got the answer incorrect
//                 setState(prevState => ({
//                     ...prevState,
//                     score: prevState.score - 1,
//                     response: "",
//                     incorrect:true
//                 }));
//             }
//         }
//     }

//     function updateResponse(event) {
//        setState({
//         // ...state means that everything need to stay the same only the response one
//         ...state,
//         response: event.target.value
//        })
//     }

//     function moveToNextLevel() {
//         const nextLevel = state.level + 1;
//         setState({
//             ...state,
//             level: nextLevel,
//             score: 0
//         });
//         // create generateNewNumber
//     }

//     if (state.level === 1 && state.score === 10) {
//         return (
//             <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
//             <div style={{ fontSize: 75, color: 'green' }}>Level 1 Completed!</div>
//             <button onClick={moveToNextLevel}>Move to Level 2</button>
//           </div>
//         );
//     } else if (state.level === 2 && state.score < 10) {
//         return (
//             <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
//             <div style={{ fontSize: 75, color: 'green' }}>Level 2 Completed!</div>
//             <button onClick={moveToNextLevel}>Move to Level 3</button>
//           </div>
//         );
//     } else if (state.level === 3 && state.score < 10) {
//         return (
//             <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
//             <div style={{ fontSize: 75, color: 'green' }}>Level  3Completed!</div>
//             <button onClick={moveToNextLevel}>Move to Level 4</button>
//           </div>
//         );
//     } else if (state.level === 4 && state.score < 10) {
//         return (
//             <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
//             <div style={{ fontSize: 75, color: 'green' }}>Level 4 Completed!</div>
//             <button onClick={moveToNextLevel}>Level Completed, Congratulations!!!</button>
//           </div>
//         );
//     }

//     let operator;
//     if (state.level === 1) {
//       operator = '+';
//     } else if (state.level === 2) {
//       operator = '-';
//     } else if (state.level === 3) {
//       operator = '*';
//     } else if (state.level === 4) {
//       operator = '÷';
//     }

//     return (
//        <div style={{ textAlign: "center", fontFamily: "sans-serif", }}>
//             <div style={{color: state.incorrect ? 'red' : 'black', fontSize: 72 }}>{state.num1} {operator} {state.num2}</div>
//             <input autoFocus={true} onKeyDown={inputKeyPress} onChange={updateResponse} value={state.response} />
//             <div>Score: {state.score}</div>
//        </div>
//     );
// }

// export default Addition;