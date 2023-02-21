import styles from "./ContactsList.module.css";
import profile from "../download.png";
function ContactsList(props) {
  return (
    <div className={styles.list}>
      {props.data.map((val, key) => {
        return (
          <div key={key} className={styles.details}>
            <div>
              <img src={profile} alt="profile" className={styles.profile} />
              <p>{val.fullName}</p>
            </div>
            <div>
              {val.email ? (
                <p>
                  <span className={styles.email}>Email: </span>
                  {val.email}
                </p>
              ) : (
                <p></p>
              )}
              {val.phone ? (
                <p>
                  <span className={styles.phone}>Phone: </span>
                  {val.phone}
                </p>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ContactsList;
