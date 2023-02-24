import { createData, deleteData, editData, fetch } from "../services/Rest";

function fetchContacts() {
  return fetch(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=30"
  );
}
function updateContact(data, id, version) {
  editData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/" + id,
    data.firstName,
    data.lastName,
    data.dob,
    id,
    version
  );
}
function createContact(data) {
  createData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact",
    data.firstName,
    data.lastName,
    data.email,
    data.contact
  );
}
function deleteContact(id, version) {
  deleteData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/removeAll",
    id,
    version
  );
}
export const api = {
  fetchContacts,
  updateContact,
  createContact,
  deleteContact,
};
