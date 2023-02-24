import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactsList from "./app/containers/contacts/ContactsList";

function App() {
  return (
    <Router>
      <div>
        <h2 className={styles.title}>Contacts</h2>
        <Routes>
          <Route path="/" element={<ContactsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
