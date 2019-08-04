import { setContactsData } from '../reducers/contacts';
import { startLoading, finishLoading } from '../reducers/loading';
import { uniqueId } from '../utils';
import { LOADING_CONTACTS } from '../constants/loading';

const contacts = [
  { id: uniqueId('contact_'), name: 'Vasia' },
  { id: uniqueId('contact_'), name: 'Kolia' },
  { id: uniqueId('contact_'), name: 'Tolia' },
  { id: uniqueId('contact_'), name: 'Mashia' },
  { id: uniqueId('contact_'), name: 'Pashia' },
];

export default function getContacts() {
  return (dispatch) => {
    dispatch(startLoading(LOADING_CONTACTS));
    setTimeout(() => {
      dispatch(setContactsData(contacts));
      dispatch(finishLoading(LOADING_CONTACTS));
    }, 6000);
  };
}
