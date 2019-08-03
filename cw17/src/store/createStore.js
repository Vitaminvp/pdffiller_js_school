const createStore = (reducers, initialState = {}) => {
    let state = initialState;
    let listeners = [];

    const getState = () => state;

    const dispatch = action => {
        state = reducers(state, action);

        // listeners = [ () => { this.setState(); } ]
        listeners.forEach(fn => fn());
        return action;
    };

    const unsubscribe = fn => {
        listeners = listeners.filter(listener => listener !== fn);
    };

    const subscribe = fn => {
        listeners.push(fn);
        return () => unsubscribe(fn);
    };

    return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
    };
};

export default createStore;
