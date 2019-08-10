import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsSelector, addFormData } from "../reducers/forms";
import { valueSelector, setValue, resetValue } from "../reducers/addContact";
import AddForm from "../components/AddForm";
import getFormsAction from "../action/getForms";
import { LOADING_FORMS } from "../constants/loading";
import { isLoaded } from "../reducers/loading";
import { NavLink, withRouter } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  CssBaseline,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
  ListItemSecondaryAction,
  Divider,
  Button,
  Icon
} from "@material-ui/core";
import { StarBorder, Delete, Edit } from "@material-ui/icons";
import CircularProgress from "@material-ui/core/CircularProgress";
import CircularDeterminate from "../components/CircularDeterminate";

class FormsList extends Component {
  componentDidMount() {
    if (!this.props.isFormsLoaded) {
      this.props.getForms();
    }
  }
  printDocument() {
    const input = document.getElementById("root");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", [800, 800]);
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save("download.pdf");
    });
  }

  render() {
    const {
      forms,
      value,
      setContactName,
      addForm,
      resetContactName,
      history
    } = this.props;

    if (!this.props.isFormsLoaded) {
      return (
        <CircularDeterminate />
      );
    }
    return (
      <React.Fragment>
        <CircularProgress variant="determinate" color="secondary" />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.printDocument}
          style={{ margin: 10 }}
        >
          PDF download &nbsp;
          <Icon>cloud_download</Icon>
        </Button>
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{ background: "#eaeaea", padding: 20, borderRadius: 5 }}
        >
          <List>
            {forms.map(({ id, name }) => {
              return (
                <React.Fragment key={id}>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <StarBorder />
                      </Avatar>
                    </ListItemAvatar>
                    <NavLink
                      to={`/fill/${id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <ListItemText id={id} primary={name} />
                    </NavLink>
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete" href="#">
                        <Delete />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        href="#"
                        onClick={e => {
                          e.preventDefault();
                          history.push(`/edit/${id}`);
                        }}
                      >
                        <Edit />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>

          <AddForm
            onAddForm={addForm}
            onChange={setContactName}
            val={value}
            resetVal={resetContactName}
          />
        </Container>
      </React.Fragment>
    );
  }
}
// onClick={() => setSelectedForm(el)}
// FormsList.propTypes = {
//   forms: PropTypes.array,
//   value: PropTypes.string,
//   addContact: PropTypes.func,
//   setContactName: PropTypes.func,
//   resetContactName: PropTypes.func,
//   getForms: PropTypes.func,
//   isFormsLoaded: PropTypes.bool
// };

const mapStateToProps = state => ({
  forms: contactsSelector(state),
  value: valueSelector(state),
  isFormsLoaded: isLoaded(state, LOADING_FORMS)
});

const mapDispatchToProps = {
  addForm: addFormData,
  setContactName: setValue,
  resetContactName: resetValue,
  getForms: getFormsAction
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormsList)
);
