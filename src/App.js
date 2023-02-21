import styles from "./App.module.css";
import Contacts from "./components/Contacts";

function App() {
  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>
      <Contacts />
    </div>
  );
}

export default App;
