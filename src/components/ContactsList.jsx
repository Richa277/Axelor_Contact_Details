import styles from "./ContactsList.module.css";
function ContactsList(props){
    return(
        <div className={styles.list}>
          {props.data.map((val,key)=>{
            return (
                <div key={key} className={styles.details}>
                    <span>{val.firstName}</span>
                    <span>{val.lastName}</span>
                    <span>{val.email}</span>
                    <span>{val.fullName}</span>
                    <span>{val.phone}</span>
                </div>
            )
          })}
        </div>
    )
}
export default ContactsList