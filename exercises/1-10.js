// question (1)
// The constant JSX should return an h1 element.
// Passed
// The h1 tag should include the text Hello JSX!

const JSX = <h1>Hello JSX!</h1>;

// quetions (2)
// Define a new constant JSX that renders a div which contains the following elements in order:

// An h1, a p, and an unordered list that contains three li items. You can include any text you want within each element.

// Note: When rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required. Also notice this challenge uses a div tag to wrap all the child elements within a single parent element. If you remove the div, the JSX will no longer transpile. Keep this in mind, since it will also apply when you return JSX elements in React components.

// Passed
// The constant JSX should return a div element.
// Passed
// The div should contain an h1 tag as the first element.
// Passed
// The div should contain a p tag as the second element.
// Passed
// The div should contain a ul tag as the third element.
// Passed
// The ul should contain three li elements.

const JSX  =  <div>
  <h1>Heading</h1>
  <p>Paragraph</p>
 <ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
 </ul>
  </div>;

// Question (3)
// The code editor has a JSX element similar to what you created in
// the last challenge. Add a comment somewhere within the provided div element,
// without modifying the existing h1 or p elements.
// The constant JSX should return a div element.
// The div should contain an h1 tag as the first element.
// The div should contain a p tag as the second element.
// The existing h1 and p elements should not be modified.
// The JSX should use valid comment syntax.

answer here

// Question (4)
// The code editor has a simple JSX component.
// Use the ReactDOM.render() method to render this component to the page.
// You can pass defined JSX elements directly in as the first argument and use document.getElementById()
//  to select the DOM node to render them to. There is a div with id='challenge-node'
//  available for you to use. Make sure you don't change the JSX constant.
// The constant JSX should return a div element.
// Passed
// The div should contain an h1 tag as the first element.
// Passed
// The div should contain a p tag as the second element.
// Passed
// The provided JSX element should render to the DOM node with id challenge-node.
const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
ReactDOM.render(JSX,document.getElementById("challenge-node"));

// Question 5

// In fact, the naming convention for all HTML attributes and event references 
// in JSX become camelCase. For example, a click event in JSX is onClick, 
// instead of onclick. Likewise, onchange becomes onChange. While this is a subtle difference, 
// it is an important one to keep in mind moving forward.
// The constant JSX should return a div element.
// The div has a class of myDiv.

const JSX = (
  <div className= "myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// Qyestion 6
// Fix the errors in the code editor so that it is valid JSX and successfully transpiles.
//  Make sure you don't change any of the content -
//  you only need to close tags where they are needed.
// The constant JSX should return a div element.
// The div should contain a br tag.
// The div should contain an hr tag



