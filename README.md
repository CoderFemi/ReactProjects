# REACT WEB DEVELOPER COURSE (REFRESHER)

## WHY REACT?
* React has a small learning curve, building on what we already know in Javascript.
* Component-based architecture makes code easier to debug
* It is fast and lightweight due to rendering with the virtual DOM
* The React community is diverse and strong, with lots of libraries available for use.
* A lot of companies use the ecosystem, hence lots of jobs available for React developer.

## STARTING WITH REACT
### Environment Setup
 * The React libary has companion libraries depending on the type of application being built.  For web applications, the accompanying library is the React-DOM library. These can be included in the browser via CDN scripts, or required into code via NPM.
* Babel is used to compile JSX down to HTML for the browser, as well as ES6 & ES7 code down to ES5 that older browsers can understand. It converts JSX to React.createElement() calls which take the HTML tag, key-value pairs of attributes, and the HTML content as arguments. To use babel, the following dependencies/plugins have to be installed:
    * babel cli (installed globally)
    * babel-preset-env (to compile ES6/ES7)
    * babel-preset-react (to compile JSX)
* The babel command is run specifying the server-side script to run, the outfile for the client-side compiled script, and a comma-separated list of react presets to run.

## JSX
* ReactDOM.render() is the method used to render JSX (Javascript XML, which is an extension used to write HTML in server side javascript).
* JSX is written by wrapping all child elements within a parent div. A pair of enclosing parentheses are added for code readability, as a convention.
* React will render nothing when a value of undefined is returned. This is particularly useful during conditional rendering.
### Rendering With JSX
* JSX does not re-render JSX automatically to reflect changes made to the DOM via user interaction. This is achieved by wrapping the JSX and the call to render within a wrapper function, and then calling the function everytime a new change needs to be rendered to the browser. A React component, on the other hand, has no need for this, and re-renders automatically. However, these multiple calls to render are quite efficient and fast, because React's virtual DOM uses an algorithm to calculate the minimal number of changes that need to be made in the browser and only re-renders the parts that are needed.
* JSX rendered as arrays need to have key attributes specified in order to enable efficient rendering.
### Conditional Rendering
* Only Javascript expressions can be written within JSX by enclosing them within a pair of curly braces. To write statements such as conditional logic a function has to be defined outside the JSX and the function called within the JSX to inject the returned value.
* The ternary operator and the && operator can be used to write logic directly in JSX concisely.
### Events and Attributes
* React attributes are identical to HTML attributes and are defined inline within JSX elements. With the exception of class, which is a reserved keyword in Javascript, which is renamed to className.
* Events are basically the same but are written in camelCase. Event handlers are defined outside the JSX and referenced within the JSX.

## REACT COMPONENTS
* React components use Javascript classes to create reusable chunks of JSX representing sections of the user interface. Individual instances of those components are used to render dynamic data to the browser.
* RCs are created by extending the global React.Component class and calling the render() method specifying what the component renders. It is important that they are title-cased to render them as React components, otherwise, if in lower-case, they are rendered as html elements.
* Event handlers are defined as class methods, therefore they lose their "this" binding when assigned to an event. This binding is preserved by calling the bind() method on the event handler in the constructor class.
### React Props
* Props are the arguments (data) passed from the parent into the individual instance of a component to give it it's own unique value. In the component class definition, the props property (this.props) is used to carry out specific operations every time an instance is created. Default values can be set for props, if none are passed in. This is done by setting the *defaultProps* property available on the component to an object we define.
### React State and Auto-rendering
* React components monitor state changes and re-render the component automatically every time the state (data) changes.
* The state property is defined as an object with properties, setting initial values for all the dynamic data changes to be tracked in the application.
* The setState method is used to change data values. It takes in a callback function with the previous state as its only argument. This is because setState calls are batched together and executed asynchronously, so that the virtual DOM can calculate what actually needs to be rendered efficiently. When this method is called, and the values of the state are updated, the render method is called automatically to also update the user-interface.
* The state object should not be mutated. Rather all changes to state are effected using setState as mentioned previously.
### Stateless, Functional Components
* Some components do not manage state, and as such are *stateless*. It would therefore be more efficient to define them as *functional components* - as a regular function, not an object. It should still have a title-cased name to distinguish it as a class. The only parameter defined for the function is props, which is an object that contains all the props passed in when an instance of the component is defined. Stateless components only return and render JSX, they do not manage state.