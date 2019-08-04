import React from 'react';
import PropTypes from 'prop-types';


class AddContact extends React.Component{
  constructor(){
    super();
    this.state = {
      lastName: "",
      firstName: ""
    };
  }


  onChange({name, value}){
    this.setState({
      [name]: value
    })
  };

  onSubmit(event){
    event.preventDefault();
    const {onAddContact, resetVal} = this.props;
    const {firstName, lastName} = this.state;
    console.log(`${firstName} ${lastName}`);
    onAddContact(`${firstName} ${lastName}`);
    resetVal();
    this.setState({
      lastName: "",
      firstName: ""
    })
  };

  render(){
    const { onAddContact, onChange, val, resetVal } = this.props;
    return (
        <div>
          <form onSubmit={(event) => this.onSubmit(event)}>
            <input name="firstName" onChange={({ target }) => this.onChange(target)} value={this.state.firstName} />
            <input name="lastName" onChange={({ target }) => this.onChange(target)} value={this.state.lastName} />
            <button type="submit" disabled={!(this.state.firstName.length && this.state.lastName.length)}>Add</button>

          </form>
        </div>
    );
  }

};

AddContact.propTypes = {
  val: PropTypes.string,
  onChange: PropTypes.func,
  onAddContact: PropTypes.func,
  resetVal: PropTypes.func,
};

export default AddContact;
