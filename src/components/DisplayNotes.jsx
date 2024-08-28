import React, { useContext } from "react";
import styles from "./DisplayNotes.module.css";
import { AppContext } from "../contextapi/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function DisplayNotes({ activeGroupIndex }) {
  const { groupData, setGroupData } = useContext(AppContext);

  const handleDeleteNotes = (notesId) => {
    //for delete notes
    const updatedGroupData = [...groupData];
    updatedGroupData[activeGroupIndex].notesData = updatedGroupData[
      activeGroupIndex
    ].notesData.filter((note) => note.id !== notesId);
    setGroupData(updatedGroupData);
  };

  return (
    <div className={styles.container}>
      {groupData[activeGroupIndex].notesData.map((data, index) => (
        <div className={styles.notesContainer} key={index}>
          <p className={styles.notes}>{data.note}</p>
          <div className={styles.dateTimeContainer}>
            <FontAwesomeIcon
              className={styles.deleteBtn}
              onClick={() => {
                handleDeleteNotes(data.id);
              }}
              icon={faTrashCan}
            />
            <p className={styles.date}> {data.date} </p>
            <p className={styles.dot}></p>
            <p className={styles.time}> {data.time} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayNotes;
