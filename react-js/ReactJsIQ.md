# This file contains React JS Interview questions, their corresponding answers

1. what is ReactJS?
    - React is an open-source javascript library, most probably used for single page applications.
    - It is used to build reusable components.
    - ReactJS uses virtual DOM to render components.
    - It is used in client side and written in JSX.

2. Explain MVC architecture?
    - MVC stands for Model-View-Controller.
    - MVC framework is an architectural pattern which we used to seperate an application into three logical components model,view,controller.
    - Each architectural component is built to handle specific development aspects of an application.

3. How React makes use of MVC?
    - In ReactJS the concept of MVC framework is not used directly but here is how React aligns with the MVC pattern.
        - Model: In react the data is managed in the component state or props. We can think component state as the model which represents the current state of the application's data.
        - View: Each component can be seen as a view in the MVC pattern.
        - Controller: React doesn't have seperate controller file but it can handle user interaction and manage the state which is the role of controller in the MVC architecture.

4. Explain the building blocks of the React?
    - JSX: 
        - It stands for JavaScript XML, It is a syntax extension for the JavaScript.
        - It allows us to write HTML and JavaScript code in a single file which is then transformed to React component.
        - JSX allows us to combine UI markup and the logic in a single component.
    - What is state in React? How is it managed?
        - state in react is a built-in object that typically stores and maintain the dynamic data related to the react component.
        - States are the heartbeat of the react component, they are muttable and whenever there is a change the component re-renders to reflect those changes on the UI.
        - The states are managed using:
            - useState()
            - this.state
        - State are local to the component where it is define and managed within itself.
    - What are props? How do they differ from state?
        - Props are used to pass the data from one component to another component typically from parent component to child component.
        - Props are immutable and read-only meaning they cannot be modified. They are soley for displaying or trigger action.
        - Props belongs to the parent component and it is been passed down to the child component.
    - What is Virtual DOM and how it works? how does it helps to improve the performance
        - Virtual DOM is a light-weight copy of the actual DOM, Which makes the DOM manipulation easier.
        - Every Object that exists in the actual DOM has an object in the React Virtual DOM.
        - Virtual DOM update takes place in four different stage:
            - Representation: When a component is rendered Virtual DOM tree is created. This tree is the light weight copy of the actual DOM. 
            - ReconcilaTion: Whenever there is change in the component state or props instead of updating the actual DOM react creates a new Virtual DOM tree and then compares it with the old one to identify what has been changed.
            - Diffing: During the reconilation phase react use diffing algorithm to check minimum number of changes required to update the actual DOM. It checks each element of the old and new virtual DOM tree and calculates the differences.
            - Batch update: After determining the differences the react updates the actual DOM in a batch operation, applying only the changes needed instead of re-rendering the entire ui component.
        - By reducing the number of of direct update to the actual DOM, react can group multiple updates into a single operation etc allows the improve in the performance.
    - Components: 
        - Components are the reusable block of code which in turn returns HTML. Components helps us to acheive the DRY(Don't Repeat Yourself).
        - There are two types of components:
            - Functional Component:
                - A functional component is a simple JavaScript function, They accepts props as the data.
                - It is a stateless components.
                - Hooks can be easily used in functional components to make them stateful.
                - Constructor are not used.
            - Class Component:
                - A class components requires to render from the React.
                - It is a statefull component.
                - To implement hooks it requires different syntax inside the class component.
                - Constructor are used to store the state.    
    - Context: It allows us to pass the data through components as props in a hirarchy.

5. Can browser read jsx file or How do browser reads jsx?
    - Browsers cannot read jsx file, It can read only pure JavaScript file.
    - The web browser reads the jsx files using the transpiler which converts jsx into JavaScript.
    - The transpiler used is called babel.

6. What are hooks?
    - Hooks are the special type of function that allows functional components to use the states and manage side effects.

7. what are the different type of Hooks?
    - **State Hook**: State hooks allows functional component to store state variable and provide access to the information
        - useState()
        - useReducer()
    -  **Effect Hook**: Effect hooks allows functional component to manage the side effects, interact with the external system to keep the component in synchronize with them.
        - useEffect()
    - **Context Hook**: Context hook provides a way to pass the data from component to component in tree without passing them as a props in the nested component.
        - useContext()
    - **Ref Hook**: Ref Hook is a special object that allows to directly access and manipulate the DOM elements or the react component instances.
        - useRef()

8. What is *useState()* hook explain in detail
    - useState() hook is used provides state variable to the function component along with the direct update access.
    - It returns an array containing two values:
        - current state of the component.
        - A function to update the state value.
    - In useState, const is used and it doesn't throw any error because the state variable itself is not being reassigned (i.e., it doesn't get a new memory location or reference); rather, its value is being updated by calling the setter function.
        - Syntax:
            ```js
                const [var, setVar] = useState(0);
                /*
                    var: it contains the state of the variable
                    setVar: it contains the function that updates the state
                */
            ```
9. what is *useReducer()* hook explain in detail
    - useReducer() hook provides a state variable along with the update logic in the reducer function.
    - Syntax:
        ```js
            const [state, dispatch] = useReducer(reducer, initialArgs, init);
            /*
                state: state variable
                dispatch: dispatch
                reducer: reducer function which has update logic
                initialstate: The initial state value is set when the reducer is first invoked
            */
        ```

10. what is *useEffect()* hook explain in detail
    - useEffect() allows us to perform some side effects on the components.
    - Fetching data, directly updating the DOM etc.
    - It is called everytime whenever there is a change in the state of the dependency array (i.e, modified or updated).
    - The dependency array is optional, we can have the following scenarios they are:
        - *Scenario 01*: No dependency array
            - If no dependency array is mention the effect will be called after every render(after every state or prop change).
        - *Scenario 02*: Empty dependency array
            - If empty dependency array is provided then the effect will only once after the intial render.
        - *Scenario 03*: With specific dependencies or multiple dependencies
            - If a list of dependency array is provided the effect will run when one of the dependency has been changed.
        - *Scenario 04*: With cleanup function
            - When return is used inside the effect it will run when the component is unmounted or before the effect re-run due to dependency change.
        - *Scenario 05*: Dynamic Dependency (Conditionally triggering the effect)
            - Allowing the effect to re-run only under a certain conditions
    - Syntax:
        ```js
            useEffect(() => {
                // code to be executed
            },[dependencies]);
        ```
 
11. What is *useContext()* hook explain in detail
    - useContext() allows us to pass the data from one component to another component without needing them to pass as a props through nested component using data from a react context.
    - Context is composed of two parts:
        - Provider: The component that provides a value to its children component.
        - Consumer: The component that consumes or uses the value.
    - useContext is useful because:
        - They avoid prop drilling
        - Global state management
    - Working
        - newContext is created using `createContext()`.
        - In the app component newContext.Provider is wrapped to provide the context to all the component inside it.
        - childContext can access the context value by `useContext(newContext)`.
        - Syntax:
            ```js
                const themeContext = React.createContext();
                const theme = useContext(themeContext);
            ```

12. what is *useMemo()* hook explain in detail
    - useMemo() hook is used to optimize the performance of the application by memoizing the result of the calculation and recompute only when its dependency changes.
    - It is useful when we are performing expensive calculation or to avoid unnecessary re-calculation of the same value on every render.
    - useMemo() takes arguments:
        - A function that returns a value.
        - An array of dependency, which determines when the memoized value need to be re-computed.
    - The dependency array is mandatory
    - Syntax:
        ```js
            const memoizedValue = useMemo(() => {
                //expensive computation
            }, [dependencies])
        ```

13. what is *useCallback()* hook explain in detail
    - useCallback() hook is used to memoize the callback function and returns the same function reference untill the dependency is changed.
    - It is useful to prevent the creation of new function on every render especially when we are passing callback function as prop to the child component.
    - It takes two arguments:
        - A callback function
        - An array of dependency, which determines when the memoized callback function to be created.
    - The dependency array is mandatory
    - Syntax:
        ```js
            const memoizedCallback = useCallback(() => {
                //Function logic here
            }, dependencies)

14. What is Higher order Components?Why, when, and How
    - What: Higher order component is a function that takes the component as an argument and returns a new component with additional props or logic applied to it.
    - Why: HOCs are used to reuse the logic across the multiple component without duplicating the code.
    - When:
        - Have a seperate loading component
        - Conditional rendering

15. Life Cycle methods of a component

16. What is react-router?Explain the components of react-router?How do you handle routing in the react application
    - React router is a standard library for routing in react application.
    - It enables us to navigate between the views of various components, allows changing the URL and keeping the UI in sync with the URL.
    - Router(Usually imported as BrowserRouter):
        - It is the parent component or the main wrapper that enables routing in the react application
        - Everything inside this will be the part of routing functionality
    - Routes:
        - This component is used to group Route components together. 
        - It renders the first Route that matches the current URL and ignores all subsequent Route components.
    - Route: 
        - Define the mapping between the URL and react component. It renders the component when the path matches the current URL.
    - Link:
        - The link component is used to create links to different routes and implement navigation around the application. It is similar to the `<a>`

17. What is react-redux? What are the benefits of using react-redux?
    - It is a statemanagement tool, it makes easier to pass the state from one component to another irrespective of their position in the component tree.
    - Redux should be used when we need to manage too many number of states in a application
    - The benefits of redux are:
        - It provides centralized state management i.e., single store can be used for the entire application.
        - Redux offers persistant state management, therefore storing data for long time becomes easier.
        - Prop drilling can be avoided.

18. How we use react redux in a application?
    - For handling asynchronous operations in the react using redux we need to follow below steps:
        - Instal packages: redux, react-redux, redux-thunk
        - create a redux store and middleware: `const store = createStore(rootreducer, applymiddlware(thunk))`
        - Set up the rootreducer: import all the reducers inside `combinreducer` method from redux
        - Each state management store has its own action file and reducer file
            - Action file contains all the logic
            - Reducer file contains all the action types and what will happen once that type occurs
        - Connect redux to react by wrapping the App component inside a provider component along with store passed as props.
        - using useDispatch and useSelector we can get the state and function action anywhere in the application

19. What is prop drilling and its disadvantages?
    - prop drilling is a concept of passing data almost at every level due to requirement in the final level.
    - The problem with the prop drilling is that whenever the data is passed from the parent component, it has to come from every level regardless of the fact that it is not needed there and simply needed in the last.

20. what is custom hooks in React?
    - Custom hooks are normal JavaScript function but starts with 'use' and make use of other hooks.
    - Custom hooks are useful to maintain the DRY concept. It helps us to write the logic once and use it anywhere.

21. How do you optimize performance in a React app?
    - Code spliting
    - Lazy loading:
        - Images can be lazy load by simply adding `loading=lazy` attribute in the image tag
        - Component can be lazy load simply by using React.lazy function along with suspense 
    - Optimizing images and assets
    - Avoid inline function

22. what is SSR(Server Side Rendering)? How it works
    - SSR is a technique that is used in the web development where the HTML is being generated in the server rather than on the browser.
    - The SSR works as follows:
        - Request: A user navigates to a url in the browser.
        - Server processing: The server receives a request and processes it. The application logic is executes that involves fetching data from db or other APIs.
        - HTML generator: The server generates the HTML for the requested page using a templating engine or the framework.
        - Response: The server sends the generated HTML back to the client's browser.
        - Client hydration: Once the HTML is recieved the browser displays it. JavaScript code is run to make the application interactive.

23. What is CSR(Client Side Rendering)? How it works
    - CSR is a technique that is used in the web development where most of the rendering is performed on the client side (browser) using JS.
    - The CSR works as follows:
        - Request: The client makes a request to the browser.
        - Response: The serve sends the response along with the minimal html page along with the references to JS file that needs to be downloaded.
        - Rendering: Once the JS files are downloaded, The app is mounted to the DOM and user interface is automatically rendered.

24. Explain testing in react
    - The different types of testing are:
        - *Unit Testing*: 
            - Testing individual components or function in isolation, ensuring that every part of the application works independently.
            - It is basically done by developers.
        - *Integration Testing*:
            - Testing how different components work together. These tests checks if the components interact as expected.
            - It is basically done by QA or developers
        - *E2E Testing*: 
            - Testing the entire appliction flow from the user perspective. They tests whether the application behaves as expected.
            - It is basically done by QA or developers.

25. what are events in React
    - Events are the actions that occurs in the browser, which can be handled by the application.
    - They are similar to DOM events but are managed by React
    - In react event handling is done by attaching the event handlers to elements using camelCase syntax and passing function as the event handler.
    - Common event types are:
        - Mouse events: onClick, onDoubleClick, etc.
        - Keyboard events: onKeyDown, onKeyPress, onKeyUp
        - Form events: onChange, onSubmit 
    - When an event is triggered react passes an event object. This object contains useful properties like:
        - target
        - currentTarget
        - preventDefault(): A method to prevent the default action associated with the event(eg form submission)
    - Event delagation: It is a technique in react where a single event handler is attached to the parent component instead of adding seperate event handlers to multiple child elements.

26. Explain Asset optimization
    - Image optimization:
        - Use Appropriate formats: JPEG (photographs), PNG(Transparent), SVG(Vector graphics), WebP(High quality image with smaller file sizes)
        - Compressing the image
        - Lazy loading: Load image when necessary
    - CSS optimization:
        - Minification: Removing unnecessary white spaces, comments and unused css rules.
        - Combine files: Combining multiple CSS files into single file
        - Use CSS preprocessors.
    - JavaScript Optimization:
        - Minification and Bundling
        - Code spliting: Dividing code in the smaller chunks that can be loaded on demand.
    - Caching startegy
    - Reduce HTTP requests
    
14. Explain the steps to create react app and run
    - Open the new terminal then type:
        ```
            npx create-react-app <<application_name>>
            cd <<application_name>>
            npm start
        ```
15. Create a small react app which prints Hello world
    ```
        import React from "react"
        import ReactDom from "react-dom"

        function hello(props) {
            return(
                <h1>Hello world</h1>
            );
        }

        ReactDom.createRoot(document.getElementById("root")).render(
            <Hello/>
        );
    ```
16. How to write comments in React?
    - Multi-line comment: /* comments */
    - Single-line comment: //

17. Explain the use of render() method in react?
    - React renders the HTML to webpages by using the function called render().
    - The purpose of render() is to display the HTML code inside the specified HTML element.

18. Explain one-way data binding in React?
    - One-way data binding refers to the flow of data from parent component to child component via props.
    - The child cannot directly modify the data in the parent component.
    - Any changes to the data needs to be done in the parent component and the upadated data will be sent to the child component.
    - This is helpful as it is easier to debug and less prone to errors.

19. what is conditional rendering?
    - when there are multiple components in our application and we need to render those component based on our preferences and the condition then we will use conditional rendering.
    - In conditional rendering, a condition is specified and if the condition is passed then particular component will be rendered.

20. What are the different phase of React component?
    - Initial Rendering Phase: This is phase when the component starts its journey and makes a way to the DOM.
    - Updating phase: Once the components gets added to the DOM, It can update or re-render the component only when a prop or state change occurs.
    - Unmounting phase: This is the final phase in the component journey where the component is destroyed and removed from the DOM

21. Explain CORS in React?
    - CORS stands for Cross-Origin-Resource-Sharing
    - It refers to the method that allows us to make a request to the server in a different domain.
    - In frontend we can set up CORS using two methods:
        - axios
        - fetch