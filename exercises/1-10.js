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