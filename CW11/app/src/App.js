import React from 'react';
import './App.css';


const A = ({name}) => {
    return (<div>Hello {name}</div>);
};

class B extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ""
        };
        console.log("constructor");
    }

componentDidMount() {
    console.log("componentDidMount");
}

    handleInput=(e)=>{
        this.setState({
            value: e.target.value
        })
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate")
        return true;
    }


    static getDerivedStateFromProps(){
    console.log("getSnapshotBeforeUpdate")
    return null
}
    render() {
        console.log("render");
        return (<div>
            <input type="text" value={this.state.value} onChange={this.handleInput}/>
            <A name={this.state.value} />
        </div>)
    }
}




function App() {
  return (
    <div className="">
      <header className="">

          <B/>
      </header>
    </div>
  );
}

export default App;
