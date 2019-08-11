import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { contactsSelector, addFormData, setFormsData } from "../reducers/forms";
import { valueSelector, setValue, resetValue } from "../reducers/addContact";
import AddForm from "../components/AddForm";
import getFormsAction from "../action/getForms";
import { LOADING_FORMS } from "../constants/loading";
import { isLoaded } from "../reducers/loading";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { DragDropContext } from "react-beautiful-dnd";
import ShortList from "../components/List";
import { FormattedMessage } from "react-intl";

import { CssBaseline, Container, Button, Icon } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import CircularDeterminate from "../components/CircularDeterminate";

class FormsList extends Component {
  componentDidMount() {
    if (!this.props.isFormsLoaded) {
      this.props.getForms();
    }
    this.onDragEnd = this.onDragEnd.bind(this);
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
  onDragEnd(result) {
    console.log(result);
    const { destination, source } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const { forms } = this.props;
    const newForms = [...forms];
    const item = newForms.splice(source.index, 1);
    newForms.splice(destination.index, 0, item[0]);
    this.props.setFormsData(newForms);
  }
  render() {
    const {
      forms,
      value,
      setContactName,
      addForm,
      resetContactName
    } = this.props;

    if (!this.props.isFormsLoaded) {
      return <CircularDeterminate />;
    }
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <CircularProgress variant="determinate" color="secondary" />


        <Button
          variant="contained"
          color="secondary"
          onClick={this.printDocument}
          style={{ margin: 10 }}
        >
          <FormattedMessage
              id={this.props.download}
              defaultMessage="download"
          /> &nbsp;
          <Icon>cloud_download</Icon>
        </Button>
        <CssBaseline />
        <Container
          maxWidth="sm"
          style={{ background: "#eaeaea", padding: 20, borderRadius: 5 }}
        >
          <ShortList forms={forms} />

          <AddForm
            onAddForm={addForm}
            onChange={setContactName}
            val={value}
            resetVal={resetContactName}
          />
        </Container>
      </DragDropContext>
    );
  }
}
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
  getForms: getFormsAction,
  setFormsData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormsList);
