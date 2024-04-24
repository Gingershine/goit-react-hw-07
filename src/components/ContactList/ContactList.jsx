
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from "../../redux/selectors";

 
const ContactList = () => {
  
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <div>
      <ul className={css.list}>
              {filteredContacts.map((contact) =>  (
                  <li className={css.item} key={contact.id}>
                  <Contact contact={contact} />
                  </li>
              ))}
          </ul>      
    </div>
  )
}

export default ContactList
