import React from "react";
import ReactDOM from "react-dom";
import createStore from "./store/createStore";
import Provider from "./store/Provider";
import connect from "./store/connect";

import "./styles.css";

/*          */
/* REDUCERS */
/*          */

const initialState = { x: 0 };
const incAction = { type: "inc", value: 1 };

const reducer = (state, action) =>
    action.type === "inc" ? { ...state, x: state.x + action.value } : state;

/*              */
/* CREATE STORE */
/*              */
const store = createStore(reducer, initialState);

const IncrementComponentPure = ({ valueToIncrement, increment }) => (
    <div>
        <div>Value is {valueToIncrement}</div>
        <button onClick={() => increment()}>Increment me</button>
    </div>
);

const IncrementComponent = connect(
    state => ({ valueToIncrement: state.x }),
    dispatch => ({ increment: () => dispatch(incAction) })
)(IncrementComponentPure);

const SomeComponent = () => <div>Another Component</div>;

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <IncrementComponent />
                <hr />
                <SomeComponent />
            </div>
        </Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
