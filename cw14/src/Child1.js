
import React from 'react';
import {Context} from "./init";

function Child1(props) {
    return (
        <Context.Consumer>
            {theme => (
                <div
                    {...props}
                    style={theme}
                >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, sint.
                </div>
            )}
        </Context.Consumer>
    );
}

export default Child1;