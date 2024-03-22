# This file contains React JS Interview questions, their corresponding answers

1. what is ReactJS?
    - React is an open-source javascript library, most probably used for single page applications.
    - It is used to build reusable components for the view layer in MVC architecture.
    - ReactJS uses virtual DOM to render components.
    - It is used in client side and written in JSX.
2. Explain MVC architecture?
    - MVC stands for Model-View-Controller.
    - MVC framework is an architectural pattern which we used to seperate an application into three logical components model,view,controller.
    - Each architectural component is built to handle specific development aspects of an application.
3. How React makes use of MVC?
    - In ReactJS the concept of MVC framework is not used directly but here is how React aligns with the MVC pattern.
        - Model: In react the data is managed in the component state or props.We can think component state as the model which represents the current state of the application's data.
        - View: Each component can be seen as a view in the MVC pattern.
        - Controller: React doesn't have seperate controller file but it can handle user interaction and manage the state which is the role of controller in the MVC architecture.
4. Explain the building blocks of the React?
    - Components: 
        -These are the reusable block of code which returns HTML
    - JSX: 
        - It stands for JavaScript and XML, It allows us to write HTML and JavaScript in the React file.
    - Props and State: 
        - Props are used to pass the data from one component to another component. 
        - State are typically used the store component s pecific data which is likely to be changed and they are muttable as we can directly change using setState()
    - Context: It allows us to pass the data through components as props in a hirarchy.
    - Virtual DOM:It is a light weight copy of the actual DOM which make the DOM manipulation easier.
5. Explain Props and State in react with differences?
    - Props:
        - Props are used to pass the data from one component to another.
        - The props are immutanble, it cannot be modified.
        - Props are read only
    - State:
        - State is used to pass the data within the local component.
        - State is mutable, it can be modified.
        - State is both read and write
6. What is Virtual DOM in react?
    - Virtual DOM is a light-weight copy of the actual DOM, Which makes the DOM manipulation easier.
    - Every Object that exists in the actual DOM has an object in the React Virtual DOM.
    - Manipulating DOM is slow but manipulating virtual DOM is fast.
    - So whenever there is a change in the state the react updates the virtual DOM first instead of the actual DOM.
7. When changes are updated to the actual DOM in React?
    - The changes to the actual DOM occurs during the reconcilation process, which is triggered when there is a change in the state.
    - The manipulation to actual DOM takes in the following step:
        - When there is a change in the state the React schedules re-rendering of the component.
        - React compares the virtual DOM with the actual DOM to get the difference.
        - The react then updates these difference to the actual DOM, updating only the parts that UI has changed.
        - The react batches multiple updated together and performs the changes in the single phase to optimise the performance.
        - Finally the react commits the changes to the actual DOM.
8. What are components and their types in React?
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
9. Can browser read jsx file or How do browser reads jsx?
    - Browsers cannot read jsx file, It can read only pure JavaScript file.
    - The web browser reads the jsx files using the transpiler which converts jsx into JavaScript.
    - The transpiler usid is called babel.
10. Explain the steps to create react app and run
    - Open the new terminal then type:
        ```
            npx create-react-app <<application_name>>
            cd <<application_name>>
            npm start
        ```
11. Create a small react app which prints Hello world
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
12. How to write comments in React?
    - Multi-line comment: /* comments */
    - Single-line comment: //

13. Explain the use of render() method in react?
    - React renders the HTML to webpages by using the function called render().
    - The purpose of render() is to display the HTML code inside the specified HTML element.
14. what is HOC (Higher-Order Component) in React?
    - HOC is the advance method for reusing the component functionality logic.
    - It takes the orginal component and returns the enhanced component.
    - It helps to get rid of copying the same logic in every component
15. Explain one-way data binding in React?
    - One-way data binding refers to the flow of data from parent component to child component via props.
    - The child cannot directly modify the data in the parent component.
    - Any changes to the data needs to be done in the parent component and the upadated data will be sent to the child component.
    - This is helpful as it is easier to debug and less prone to errors.
16. what is conditional rendering?
    - when there are multiple components in our application and we need to render those component based on our preferences and the condition then we will use conditional rendering.
    - In conditional rendering, a condition is specified and if the condition is passed then particular component will be rendered.
17. What is react-router?
    - React router is a standard library for routing in react.
    - It enables us to navigate between the views of various components in the react application, allows changing the URL and keeping the UI in sync with the URL.
18. Explain the components of react-router
    - Router(Usually imported as BrowserRouter):
        - It is the parent component that is used to store all the other components.
        - Everything inside this will be the part of routing functionality
    - Routes:
        - Routes are used to choose the route based on the best match instead of being traversed in order.
    - Route: 
        - Route is a conditionally shown component that renders when UI matches its path with the URL
    - Link:
        - The link component is used to create links to different routes and implement navigation around the application
19. What are hooks?
    - Hooks allows functional components to use the states and manage side effects.
    - They let us to use the states and other react features without writing a class.
    - React hooks are used when we need to add the state to functional component without converting the component to class component.
    - The types of React hooks are:
        - State Hooks:
            - State hooks stores and provides access to the information.
            - *useState*():
                - useState() provides state variable with the direect update access.
                - The useState() hook is imported from "react"
                - The value passed in useState(value) is taken as default value for that state.
                - In useState const is used still it won't throw any error because, state variable is not being reassigned (i.e., it's not getting a new memory location or reference), but its value is being updated. 
                - Syntax:
                    ```js
                        const [var, setVar] = useState(0);
                        /*
                            var: it contains the state of the variable
                            setVar: it contains the function that updates the state
                        */
                    ```
            - *useReducer*():
                - useReducer() hook provides a state variable along with the update logic in the reducer function.
                - Syntax:
                    ```js
                        const [state, dispatch] = useReducer(reducer, initialArgs, init);
                        /*
                            state: state variable
                            dispatch: dispatch
                            reducer: reducer function which has update logic
                        */
                    ```
        - Context Hooks:
            - Context hooks provides a way to pass data or state variable through the component tree without passing them as a props through nested component.
            - *useContext*():
                - useContext() uses the value provided by createContext and then re-renders the components whenever the value changes
                - Syntax:
                    ```js
                        const authContext = useContext(initialValue);
                    ```
        - Ref Hooks:
            - Ref creates a variable containing the information that is not used for rendering.
            - *useRef*():
                - useRef() allows us to create reference to the DOM element from the functional component directly.
                - The main use of useRef is to access the DOM element in a more efficient way than compared to simple refs.
                - Syntax:
                    ```js
                        const refContainer = useRef(initialValue);
                    ```
        - Effect Hooks:
            - Effects hooks connect the components and make it sync with the system.
            - It includes changes in the browser DOM, network and other libraries.
            - *useEffect*():
                - useEffect() allows us to perform some side effects on the components.
                - Fetching data, directly updating the DOM and timers are some of the side effects.
                - It is called everytime whenever there is a change in the state if the dependency array is modified or updated.
                - Syntax:
                    ```js
                        useEffect(() => {
                            // code to be executed
                        },[dependencies]);
                    ```
20. What is prop drilling and its disadvantages?
    - prop drilling is a concept of passing data almost at every level due to requirement in the final level.
    - The problem with the prop drilling is that whenever the data is passed from the parent component, it has to come from every level regardless of the fact that it is not needed there and simply neede in the last.
21. what is custom hooks in React?
    - Custom hooks are normal JavaScript function but starts with 'use' and make use of other hooks.
    - Custom hooks are useful to maintain the DRY concept. It helps us to write the logic once and use it anywhere.
22. What are the different phase of React component?
    - Initial Rendering Phase: This is phase when the component starts its journey and makes a way to the DOM.
    - Updating phase: Once the components gets added to the DOM, It can update or re-render the component only when a prop or state change occurs.
    - Unmounting phase: This is the final phase in the component journey where the component is destroyed and removed from the DOM
23. What is react-redux?
    - It is a statemanagement tool, it makes easier to pass the state from one component to another irrespective of their position in the component tree.
    - Prop drilling can be avoided by making use of react-redux.
24. What are the benefits of using react-redux?
    - It provides centralized state management i.e., single store can be used for the entire application.
    - It makes the process of debugging easier.
    - Redux offers persistant state management, therefore storing data for long time becomes easier
25. Explain CORS in React?
    - CORS stands for Cross-Origin-Resource-Sharing
    - It refers to the method that allows us to make a request to the server in a different domain.
    - In frontend we can set up CORS using two methods:
        - axios
        - fetch