import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import clsx from 'clsx';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const FeedbackSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string()
    .min(8, 'Pass length must be at least 8 characters')
    .required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
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
          LogIn
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
