import clsx from 'clsx';
import css from './Contact.module.css';
import { FaPhone, FaUser } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  editContact,
  fetchContacts,
} from '../../redux/contacts/operations';
import { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

const Contact = ({ name, number, id }) => {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .matches(phoneRegExp, 'Number is not valid')
      .required('Required'),
  });

  const initialValues = {
    name,
    number,
    id,
  };

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const onDeleteContact = id => {
    const c = confirm('Are you sure you want delete this contact?');
    if (c) {
      dispatch(deleteContact(id));
    }
  };

  const handleSubmit = (contact, actions) => {
    dispatch(editContact(contact));

    onCloseModal();
    actions.resetForm();
    // dispatch(fetchContacts());
  };

  return (
    <div className={clsx(css.contactWrapper)}>
      <div className={clsx(css.userInfo)}>
        <p>
          <FaUser /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={onOpenModal}>Edit</button>
      <button
        className={clsx(css.delBtn)}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={clsx(css.form)}>
            <div className={clsx(css.fieldWrapper)}>
              <label className={clsx(css.formLabel)} htmlFor="userName">
                Name
              </label>
              <Field
                className={clsx(css.formInput)}
                type="text"
                name="name"
                id="userName"
              ></Field>
              <ErrorMessage
                className={clsx(css.formSpan)}
                name="name"
                component="span"
              />
            </div>
            <div className={clsx(css.fieldWrapper)}>
              <label className={clsx(css.formLabel)} htmlFor="userNumber">
                Number
              </label>
              <Field
                className={clsx(css.formInput)}
                type="text"
                name="number"
                id="userNumber"
              ></Field>
              <ErrorMessage
                className={clsx(css.formSpan)}
                name="number"
                component="span"
              />
            </div>
            <button className={clsx(css.formBtn)} type="submit">
              Save changes
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default Contact;
