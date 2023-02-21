import { useEffect, useState } from "react";
import ContactsList from "../components/ContactsList";
import { fetchData } from "../services/FetchData";

function Contacts() {
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
      <ContactsList data={data} />
    </div>
  );
}

export default Contacts;
