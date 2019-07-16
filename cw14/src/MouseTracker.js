import React from "react";


class MouseTracker extends React.Component {
    constructor(props) {
        super(props);
        // this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove = event => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    };

    render() {
        return (
            <div style={{ height: "100%" }} onMouseMove={this.handleMouseMove}>
                {this.props.children(this.state.x, this.state.y)}
            </div>
        );
    }
}

export default MouseTracker;