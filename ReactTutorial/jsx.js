// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
// JSX converts HTML tags into react elements.
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1>This is JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement); // This is JSX!


// With JSX you can write expressions inside curly braces { }
import React from 'react';
import ReactDOM from 'react-dom/client';

const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement); // React is 10 times better with JSX


//The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
// We you className instead of class 
const myElement = <h1 className='myclass'>This is JSX!</h1>;
