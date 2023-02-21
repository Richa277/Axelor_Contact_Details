import styles from "./ContactsList.module.css";
import profile from "../download.png"
function ContactsList(props){
    return(
        <div className={styles.list}>
          {props.data.map((val,key)=>{
            return (
                <div key={key} className={styles.details}>
                  <div >
                    <img src={profile} alt="profile" className={styles.profile}/>
                  <p>{val.fullName}</p>
                  </div>
                    <div>
                    <p>{val.email}</p>
                    <p>{val.phone}</p>
                    </div>
                </div>
            )
          })}
        </div>
    )
}
export default ContactsList