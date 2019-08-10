import React from "react";
import { uniqueId } from "../../utils";
import { MAX_FIELDS, MIN_FIELDS } from "../../constants/selectedForm";
import {  Tooltip, IconButton, Divider } from "@material-ui/core";
import {  Delete, AddCircle } from "@material-ui/icons";

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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Component {...this.props} />
          {fieldsLength <= MAX_FIELDS && (
            <Tooltip title="Add" aria-label="add">
              <IconButton
                aria-label="add"
                onClick={() =>
                  addField({ ...field, name: `name-${uniqueId()+1}` })
                }
              >
                <AddCircle />
              </IconButton>
            </Tooltip>
          )}
          {fieldsTypeLength > MIN_FIELDS && (
            <Tooltip title="Delete">
              <IconButton
                aria-label="delete"
                onClick={() => deleteField(field.name)}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          )}
          <Divider />
        </div>
      );
    }
  }

  return WithHOC;
};

export default withHOCField;
