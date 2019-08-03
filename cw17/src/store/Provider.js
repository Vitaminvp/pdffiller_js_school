import React from "react";

export const Context = React.createContext({});

class Provider extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        const { store } = props;

        this.state = {
            store
        };

        store.subscribe(() => {
            this.setState({});
        });
    }

    render() {
        const { children } = this.props;
        return <Context.Provider value={this.state}>{children}</Context.Provider>;
    }
}

export default Provider;
