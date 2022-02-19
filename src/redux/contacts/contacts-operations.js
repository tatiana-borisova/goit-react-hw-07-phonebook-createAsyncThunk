import axios from 'axios';
import {
  onSubmitHandlerRequest,
  onSubmitHandlerSuccess,
  onSubmitHandlerError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from 'redux/contacts/contacts-actions';

axios.defaults.baseURL = 'https://61ba064d48df2f0017e5a8a4.mockapi.io/';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const onSubmitHandler = contact => async dispatch => {
  dispatch(onSubmitHandlerRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    dispatch(onSubmitHandlerSuccess(data));
  } catch (error) {
    dispatch(onSubmitHandlerError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
