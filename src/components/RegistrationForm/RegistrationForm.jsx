import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import clsx from 'clsx';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(8, 'Pass length must be at least 8 characters')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
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
          <label className={clsx(css.formLabel)} htmlFor="userEmail">
            Email
          </label>
          <Field
            className={clsx(css.formInput)}
            type="email"
            name="email"
            id="userEmail"
          ></Field>
          <ErrorMessage
            className={clsx(css.formSpan)}
            name="email"
            component="span"
          />
        </div>
        <div className={clsx(css.fieldWrapper)}>
          <label className={clsx(css.formLabel)} htmlFor="userPassword">
            Password
          </label>
          <Field
            className={clsx(css.formInput)}
            type="password"
            name="password"
            id="userPassword"
          ></Field>
          <ErrorMessage
            className={clsx(css.formSpan)}
            name="password"
            component="span"
          />
        </div>
        <button className={clsx(css.formBtn)} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
