import { startLoading, finishLoading } from "../reducers/loading";
import { CREATE_FORM } from "../constants/loading";
import { URL_FORM } from "../constants/api";
import getForms from "./getForms";

export default function putForm(id, body) {
  return dispatch => {
    dispatch(startLoading(CREATE_FORM));
    fetch(`${URL_FORM}${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json();
      })
      .then(() => {
        getForms();
        dispatch(finishLoading(CREATE_FORM));
      })
      .catch(console.log);
  };
}
