import styles from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactsList from "./components/ContactsList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=10",
        {
          auth: {
            username: "admin",
            password: "admin",
          },
        }
      )
      .then(function (res) {
        setData(res.data.data);
      })
      .catch(function (error) {
        console.log("wrong response");
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
