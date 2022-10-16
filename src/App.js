import "./App.css";
import Movie from "./higherOrder/tech";
import MovieReview from "./PureComponent/techField";

function App() {
  return (
   
      <>
        <h1 style={{ textAlign:"center",color:"red"}}>Higher-Order-Component</h1>
        <p style={{fontSize:"18px"}}>HOC is a function which takes a Wrapped component as input argument and returns a new Enhanced component 
It should always be a pure function. 
It should never modify the Wrapped Component.</p>
        <Movie id={1} />
      
      <div >
        <h1 style={{ textAlign:"center",color:"green"}}>Pure Component </h1>
        <p style={{fontSize:"18px"}}>ReactJS has provided us a Pure Component. If we extend a class with Pure Component, there is no need for shouldComponentUpdate() Lifecycle Method. ReactJS Pure Component Class compares current state and props with new props and states to decide whether the React component should re-render itself or  Not.
In simple words, If the previous value of state or props and the new value of state or props is the same, the component will not re-render itself. Since Pure Components restricts the re-rendering when there is no use of re-rendering of the component. Pure Components are Class Components which extends React.PureComponent. </p>
        <MovieReview />
      </div>
    </>
  );
}

export default App;