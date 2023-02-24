import { createData, deleteData, editData, fetch } from "../../services/Rest";

function fetchContacts() {
  return fetch(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact?offset=0&limit=30"
  );
}
function updateContact(firstName, lastName, dob, id, version) {
  editData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact/" + id,
    firstName,
    lastName,
    dob,
    id,
    version
  );
}
function createContact(firstName, lastName, email, contact) {
  createData(
    "/bi-pivot/ws/rest/com.axelor.contact.db.Contact",
    firstName,
    lastName,
    email,
    contact
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
