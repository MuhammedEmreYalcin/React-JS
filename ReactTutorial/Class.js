// Creating a Class Component called Car
class Car extends React.Component {
    render() {
      return <h2>This is a Car!</h2>;
    }
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);


// If there is a constructor() function in your component, this function will be called when the component gets initiated.
class Car extends React.Component {
    constructor() {
      super(); // executes the parent component's constructor function
      this.state = {color: "red"}; //state: where you store property values that belongs to the component
    }
    render() {
      return <h2>This is a {this.state.color} Car!</h2>;
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />); //This is a red Car




