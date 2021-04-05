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
* Alternatively, JSX can be rendered inline in between the opening and closing tags of the component instance, rather than as key-pair values. This data can then be available in the component definition on `props.children`.
### React State and Auto-rendering
* React components monitor state changes and re-render the component automatically every time the state (data) changes.
* The state property is defined as an object with properties, setting initial values for all the dynamic data changes to be tracked in the application.
* The setState method is used to change data values. It takes in a callback function with the previous state as its only argument. This is because setState calls are batched together and executed asynchronously, so that the virtual DOM can calculate what actually needs to be rendered efficiently. When this method is called, and the values of the state are updated, the render method is called automatically to also update the user-interface.
* The state object should not be mutated. Rather all changes to state are effected using setState as mentioned previously.
### Stateless, Functional Components
* Some components do not manage state, and as such are *stateless*. It would therefore be more efficient to define them as *functional components* - as a regular function, not an object. It should still have a title-cased name to distinguish it as a class. The only parameter defined for the function is props, which is an object that contains all the props passed in when an instance of the component is defined. Stateless components only return and render JSX, they do not manage state, also they do not make use of life-cycle methods.

## LIFE-CYCLE METHODS
* Life cycle methods are functions that when defined in a component, are executed behind the scenes when the component changes, thus allowing us to perform some defined actions whenever the component changes. ***ComponentDidMount*** fires after the component is rendered for the first time, enabling us to run code to fetch data from a server. ***ComponentDidUpdate*** fires after the component's state or props are updated. It takes in two arguments; *prevProps* and *prevState*, allowing us to save the changed data to the database. ***ComponentWillUnmount*** is used to perform an operation before a component is removed from the browser.

## LOCAL STORAGE
* **localStorage** helps to store data persistently in memory, and is a good tool for development in absence of a database. It stores the data as a string, therefore it has to be stringified and parsed to and from JSON before saving to and retrieving from memory. Various methods are used to manipulate data: *setItem* saves the data taking in two arguments, the name of the data and the data being stored. *getItem* retrieves the data from memory, taking in the name as an argument. *removeItem* removes the item from memory, also taking in the name of the data as an argument. *clear* removes all items from local storage.

## WEBPACK
* Webpack is an asset bundler which bundles up all javascript files into a single compressed bundle that contains all the code needed for the application to run. A new ES6 feature helps to break up client-side javascript into modules and use the import-export keywords to make the files interact with each other, as well as with third-party libraries. Separate modules are imported into a single entry point which is then bundled and served up by webpack. This solves the problem of having to load multiple script tags when the application renders, as only the bundle.js is loaded with all the code needed.
* Webpack uses loaders along with defined rules for using compilers. For babel, the babel-core and babel-loader libraries are needed to configure webpack to use babel to compile JSX. It also configures dev tools such as source maps for easier debugging in development. Source maps point to the original source of an error, not the bundled file.

## ES6 CLASS PROPERTIES SYNTAX
* This new syntax removes the need for calling the constructor function when setting up new properties in a class, and also the `this` keyword is not required at all when assigning to variables.
* Also an arrow function is used to define methods. This ensures the `this` reference always points to the instance that was created, removing the need for manually binding the this object to the method.
* A babel plugin, `transform-class-properties` is installed and configured to compile this new feature.

## SCSS
SCSS provides more features than basic CSS. 
* Variables can be used to store values, which can be later referenced in the styles. 
* Code factoring is possible by using base files and partials to organise styles according to the different components or elements that are being styled. The `import` keyword is used to import partials into the base file.
* The BEM - `Body Element Modifier` naming convention is used to define classNames that group related content.

## REACT-ROUTER
The React-router implements client-side routing. 
* With server-side routing, a request to update the user interface has to be made to the server everytime a url is visited.
* With client-side routing, only one trip is made to the server the first time, to load all assets needed. Subsequent changes to the user interface are handled with client-side javascript, removing and rendering components as needed without a full page refresh.
* React-router-dom is the version used for web apps. When this has been installed, named exports such as `BrowserRouter` and `Route` are imported and used to define routes. `Switch` conditionally checks the routes to find a match for the requested route. `Link` and `NavLink` are used for navigation. These components are defined so that the server is not visited when any of the links are clicked. It implements the preventDefault eventlistener method under the hood. To visit external data sources, the html anchor tag is used as usual.
* A webpack setting of `historyApiFallback:true` is configured so that the application does not visit the server anymore, rather the index.html file is served up for every route visited, and the bundle.js file which has been loaded in handles the routing as required.
* A prop of `exact:true` has to be specified for the root page to prevent all other components from being rendered alongside.
### Query Strings and URL Parameters
* React-router passes props through to every component rendered on a route. The props object contains various properties which can be used to access query strings and params, as well as carry out location redirects.

## REDUX
* An app with a one-tree view - only one ancestor component - manages state in that component and communicates down the hierarchy with other components that need access to data. But the problem is components in this type of hierarchy are not really usable. A child component that relies on a parent for props, cannot be re-used elsewhere because it will not have access to the data it needs to render and will not be able to use methods to change the state in the parent.
* In a multiple-tree view, component state is not feasible, state is rather managed with a `Redux Store`. A store is just an object containing all the data that needs to be accessed and changed. It's centralised and independent of all the components, and any component that needs to access state communicates to the store for data. This makes components reusable anywhere on the page, without having to rely on a parent for state management.
* After installing redux, the `createStore()` method is used to create a new store, passing in a callback with the initial state set to a default as its argument. `getStore()` is used to retrieve data from the store. 
* `dispatch()` is used to dispatch an action to the store. An action is an object that manipulates/changes state. It contains a property that specifies the type of action to be executed. The action sent to the store is passed in as the second argument to the createStore callback (the callback is a reducer).
* A `reducer` is a function which defines what operations should be carried out with the actions sent to the store. It takes in the state and the action as arguments. A new object updating the state is returned after executing the action. A conditional switch statement is used to perform different operations on the state based on which action was sent to the store. The reducer is passed in as an argument to the createStore method.
* `subscribe()` watches for changes anytime an action is sent to the store, and any operation can be executed within the callback passed in. To unsubscribe, the subscribe function is saved to a variable, and that variable is called to unsubscribe from the store.
* An `action generator` is a function wrapper that is called to dispatch actions to the store. It's easier to call a function than to manually define the action object every single time.
* `combineReducers()` as the method name suggests, is used to combine multiple reducers, for complex apps in which various types of state need to be tracked/managed, and associated actions executed.
* Side Note: The object rest spread operator is useful for spreading an existing object into a new object, but also has the functionality to override any existing properties by defining new ones after the spread. It requires a babel plugin to function in React.
* Redux Dev-Tools are also available as a Chrome Extension. Additional code gotten from the library docs website has to be added to the store file configuration for it to work.

## REACT - REDUX
* Connecting React to Redux to access and manipulate the store involves the use of Higher Order Components (HOC). A HOC is simply a component which renders another component. It is implemented by using a wrapper function which takes in the component - that needs to access the store - as an argument. It then returns a new component that renders an instance of the passed in component.
* After installing React-redux, the `Provider` component and the `connect()` function are imported and used to connect components to the store. The Provider component becomes the parent component which renders BrowserRouter and makes the store available.
* The connect() function is called as an IIFE (Immediately-Invoked Function Expression) passing in the `mapStateToProps` callback (user-defined, which makes the state object available to the connected component. *This callback is not needed if the component does not need to read from the store.*). It also takes in another argument `mapDispatchToProps` which allows us to call the dispatch function from within another function. Then the connect function is immediately invoked with the component that needs to be connected into the function scope.
* The ConnectedComponent will have access to the props made available to it by the HOC, and also the dispatch() function for dispatching actions to the store. Therefore, the component will be able to read from and write to the store.

## CONTROLLED COMPONENTS
* Controlled components have their input value driven by React state. An input, textarea or select element will have their values set to the current state, and as the state changes, the value of the input changes. 
* For a select tag, the value is not set by using the `selected` attribute on a selected option as its done in html. In React, it is set by using a value attribute in the root select tag.
* To use an event value in an event handler, the `e.target.value` needs to be assigned to a variable first, before setting it as a state property value. To use it as is, `e.persist()` needs to be called beforehand.
* The `react-dates` library provides components such as the SingleDatePicker for selecting dates in React. It relies on the `moment` library as a dependency.

## AUTOMATED TESTING
* React automated testing is done with the Jest library, which is the most suitable for React applications. Test files use the test.js file extension, which enables Jest to locate these files appropriately. Test cases are defined using the `test()` global method, passing in a string as the first argument, and a callback function as the second argument.
* Another global method `expect()` is used to make assertions with matchers such as `toBe()` which uses the triple equality operator to check if two results are the same. `toEqual()` is used to compare two objects, as toBe() will not work correctly for this use case. Any results which are dynamic in nature and cannot be predetermined, such as auto-generated ids, are tested with `expect.any()`, passing in the expected data type as an argument. This is asserting something about the type of a value, if we don't know what the exact value is going to be.
* React, behind the scenes, dispatches an action type of `##INIT` to setup default values for state. The same action type is dispatched in the reducers test suite to test default state values.
### Snapshot Testing
* `Snapshot testing` tests React components to ascertain that they are rendering as they ought to, by creating a snapshot and comparing with a stored version of what it should be. Essentially, it tracks changes in components over time. The npm library `react-test-renderer` provides this functionality. Shallow test rendering renders only the given component, but full-DOM test rendering renders that component and its child component(s). A better alternative library is AirBnB's `enzyme` which has more functionality than react-test-renderer. It requires a few other dependencies and file configuration for full functionality.
* Snapshots do not work properly for some use cases, in situations where libraries are used that provide data that is automatically updated over time. Jest provides functionality to *mock the libraries* in a `__mocks__` folder and specify the updated functionality that the test should use for comparison. To import the original module for mocking, `require.requireActual()` is used, instead of the import statement.
* Test spies are mock functions created with `jest.fn()`. The mock function is called with defined arguments. And an assertion is done to check if the function was actually called with those arguments. This is particularly useful for simulating event handlers for form submission.