import './App.css'

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { selectError, selectLoading } from './redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { useEffect } from 'react';


function App() {
 const dispatch = useDispatch();
 const isLoading = useSelector(selectLoading);
 const error = useSelector(selectError)

 useEffect(() => {
  dispatch(fetchContacts());
 }, [dispatch]); 

  return (
    
    <div className='wraper'>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox  />
      {isLoading && !error && <p>Loading...</p>}
      <ContactList  />
    </div>    
  )
}

export default App