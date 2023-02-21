import { useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import { fetchData } from "../services/FetchData";
import CreateContactForm from "./CreateContactForm";

function Contacts() {
  const [data, setData] = useState([]);
  const [create, setCreate] = useState(false);

  useEffect(() => {
    const response = fetchData(
      "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=10"
    );
    response.then(function (result) {
      setData(result.data.data);
    });
  }, []);
  const handleCreateButton = () => {
    setCreate(true);
  };

  return (
    <div>
      <button onClick={handleCreateButton}>+</button>
      {create ? <CreateContactForm /> : <ContactsList data={data} />}
    </div>
  );
}

export default Contacts;
