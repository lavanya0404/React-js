import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", { id: "heading" }, "React Element");

// JSX => Babel tranpiled it to React.creteElement (object) => Html  element
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="2">
  Namaste react
  </h1>);

const HeadingComponent = () => {
   return <h1>Namaste Function component1</h1>
};
const Title = () => (
  <h1>Title React component</h1>
);
const num = 100;
const HeadingComponent2 = () => (
  <div>
    <Title />
    <Title></Title>
    {Title()}
    <HeadingComponent />
    <h2>{num+num}</h2>
    <h1>Namaste React Function component2</h1>
    </div>
);

const fn = () => true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);