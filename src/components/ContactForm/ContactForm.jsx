import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum 3 karakter")
    .max(50, "Maksimum 50 karakter")
    .required("Bu alan zorunludur"),

  number: Yup.string()
    .min(3, "Minimum 3 karakter")
    .max(50, "Maksimum 50 karakter")
    .required("Bu alan zorunludur"),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label}>Name</label>
          <br />
          <Field
  className={css.input}
  type="text"
  name="name"
/>
          <br />
          <ErrorMessage
  className={css.error}
  name="name"
  component="div"
/>
        </div>

        <br />

        <div>
  <label className={css.label}>Number</label>
  <br />
  <Field
    className={css.input}
    type="text"
    name="number"
  />
  <br />
  <ErrorMessage
    className={css.error}
    name="number"
    component="div"
  />
</div>

        <br />

        <button className={css.button} type="submit">

  Add contact

</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;