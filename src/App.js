import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ContactsList from "./app/containers/contacts/ContactsList";

function App() {
  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>
     <ContactsList/>
    </div>
  );
}

export default App;
