import React,{useRef, useEffect} from 'react';
import './App.css';
import useWebAnimations,{rubberBand} from "@wellyshen/use-web-animations";
// function App() {
  // const element= useRef(null);
  // // useEffect(()=>{
  // //   element.current.focus();
  // // },[]);
  // return (
  //   <div>
  //     {/* <input ref={element} type="text"/> */}
  //     <div className="target" ref={element}>
  //       <h1>Hello world</h1>
  //     </div>
  //   </div>
  // )
  const App = () => {
    const { ref, playState,getAnimation } = useWebAnimations({...rubberBand});
    //   keyframes: [
    //     // transform: ["translateX(500px)"], // Move by 500px
    //     // background: ["red", "blue", "green"], // Go through three colors
    //     {transform:'translate(0,0)'},
    //     {transform:'translate(600px,0)'},
    //   ],
    //   timing: {
    //     // delay: 500, // Start with a 500ms delay
    //     duration: 3000, // Run for 1000ms
    //     iterations: Infinity, // Repeat once
    //     direction: "alternate", // Run the animation forwards and then backwards
    //     easing: "ease-in-out", // Use a fancy timing function
    //   },
    //   onReady: ({ playState, animate, animation }) => {
    //     // Triggered when the animation is ready to play (Google Chrome: available in v84+)
    //   },
    //   onUpdate: ({ playState, animate, animation }) => {
    //     // Triggered when the animation enters the running state or changes state
    //   },
    //   onFinish: ({ playState, animate, animation }) => {
    //     // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
    //   },
    //   // More useful options...
    // });
  
    return (
      <div>
      <div className="target" ref={ref}>
        {/* <p>🍿 Animation is {playState}</p>
        <div className="target" ref={ref} /> */}
      
      </div>
      <div>
      <h1>Current animation State: {playState}</h1>
        <button onClick={()=>getAnimation().pause()}>Pause</button>
        <button onClick={()=>getAnimation().play()}>Play</button>
        </div>
      </div>
      
    );
  
}

export default App;
