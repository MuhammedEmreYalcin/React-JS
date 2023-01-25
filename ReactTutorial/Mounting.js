// Mounting: putting elements into the DOM.

// constructor(): (method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.)
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritevegetable: "carrot"};
    }
    render() {
      return (
        <h1>My Favorite Vegetable is {this.state.favoritevegetable}</h1>
      );
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />); //My Favorite Vegetable is carrot


// getDerivedStateFromProps(): The method is called right before rendering the element(s) in the DOM
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritevegetable: "carrot"};
    }
    static getDerivedStateFromProps(props, state) {
        return {favoritevegetable: props.favcol };
      }
    render() {
      return (
        <h1>My Favorite Vegetable is {this.state.favoritevegetable}</h1>
      );
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header favcol="cucumber"/>); //My Favorite Vegetable is cucumber


// render(): The method outputs the HTML to the DOM.
class Header extends React.Component {
    render() {
      return (
        <h1>This is the content by using render</h1>
      );
    }
  }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />); //This is the content by using render


// componentDidMount(): This  method is called after the component is rendered.
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritevegetable: "carrot"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritevegetable: "cucumber"})
      }, 1000)
    }
    render() {
      return (
        <h1>My Favorite vegetable is {this.state.favoritevegetable}</h1>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Header />); // My Favorite vegetable is carrot (after a second it changes to) My Favorite vegetable is cucumber)