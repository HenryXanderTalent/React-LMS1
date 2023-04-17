
//children
const Pet = (props) => {
    return React.createElement("div", {}, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
    ]);
};

//parent
const App = () => {
    return React.createElement("div", {}, [
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese" }),
            React.createElement(Pet, { name: "Pepper", animal: "Bird", breed: "Cockatiel" }),
            React.createElement(Pet, { name: "Doink", animal: "Cat", breed: "Mix" }),
    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

//JSX version4

// import React from "react";
// import "./styles.css";

// function Pet(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h3>{props.breed}</h3>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="Dog" breed="Havanese" />
//       <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
//       <Pet name="Doink" animal="Cat" breed="Mix" />
//     </div>
//   );
// }

// export default App;


      
            