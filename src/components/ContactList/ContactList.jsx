import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

function ContactList({ contacts, onDelete }) {
  return (
    <div className={css.list}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default ContactList;