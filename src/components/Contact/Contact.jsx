import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
  <p className={css.text}>
  <FaUser /> {contact.name}
</p>

<p className={css.text}>
  <FaPhoneAlt /> {contact.number}
</p>
  <button
    className={css.button}
    onClick={() => dispatch(deleteContact(contact.id))}
  >
    Delete
  </button>
</div>
  );
}

export default Contact;