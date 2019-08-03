import React from "react";
import { Context } from "./Provider";

const connect = (mapState2Props, mapDispatch2Props) => Component => {
    class ReduxConnect extends React.Component {
        static contextType = Context;

        render() {
            return (
                <Context.Consumer>
                    {({ store }) => {
                        const compProps = this.props;
                        const props = mapState2Props(store.getState(), this.props);
                        const actions = mapDispatch2Props(store.dispatch, this.props);

                        return <Component {...compProps} {...props} {...actions} />;
                    }}
                </Context.Consumer>
            );
        }
    }

    return ReduxConnect;
};

export default connect;
