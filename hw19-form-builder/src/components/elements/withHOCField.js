import React from "react";
import { uniqueId } from "../../utils";
import { MAX_FIELDS, MIN_FIELDS } from "../../constants/selectedForm";

const withHOCField = Component => {
  class WithHOC extends React.PureComponent {
    render() {
      const {
        field,
        addField,
        deleteField,
        fieldsLength,
        fieldsTypeLength
      } = this.props;
      console.log("name", field.name);
      return (
        <>
          <Component {...this.props} />
          {fieldsLength <= MAX_FIELDS && (
            <button
              onClick={() => addField({ ...field, name: `name-${uniqueId()}` })}
            >
              +
            </button>
          )}
          {fieldsTypeLength > MIN_FIELDS && (
            <button onClick={() => deleteField(field.name)}>-</button>
          )}
        </>
      );
    }
  }

  return WithHOC;
};

export default withHOCField;
