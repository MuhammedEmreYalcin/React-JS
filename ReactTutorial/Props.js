// Props are like function arguments (parameters) in JavaScript and attributes in HTML
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
const myElement = <Car brand="Ford" />; // I am a Ford!


// Props by using components
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
  }
  function Garage() {
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </>
    );
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Garage />); // Who lives in my garage? I am a Ford!