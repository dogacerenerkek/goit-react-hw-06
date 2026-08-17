import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
function Contact({ contact, onDelete }) {
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
    onClick={() => onDelete(contact.id)}
  >
    Delete
  </button>
</div>
  );
}

export default Contact;