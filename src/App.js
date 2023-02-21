import styles from "./App.module.css";
import { useEffect, useState } from "react";
import ContactsList from "./components/ContactsList";
import { fetchData } from "./services/FetchData";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetchData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=10"
    );
    response.then(function (result) {
      setData(result.data.data);
    });
  }, []);

  return (
    <div>
      <h2 className={styles.title}>Contacts</h2>
      <ContactsList data={data} />
    </div>
  );
}

export default App;
