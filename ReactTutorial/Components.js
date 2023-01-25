// A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
class Car extends React.Component {
    render() {
      return <h2>Hi, This is a Car!</h2>;
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);


// Here is the same example as above, but created using a Function component instead  
function Car() {
    return <h2>Hi, This is a Car!</h2>;
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);


// We can refer to components inside other components:
function Car() {
    return <h2>a Car!</h2>;
  }
  
  function Garage() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car /> {/* İt calls the Car function (a car)*/}
      </>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />); // Who lives in my Garage? a Car!