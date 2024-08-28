import React, { useContext, useState } from "react";
import styles from "./CreateNotes.module.css";
import disSend from "../assets/disSend.png";
import visibleSend from "../assets/visibleSend.png";
import formatDateTime from "../data/formatDateTime";
import { AppContext } from "../contextapi/AppContext";

function CreateNotes({ activeGroupIndex }) {
  const { groupData, setGroupData } = useContext(AppContext);
  const [notes, setNotes] = useState("");
  const { date, time } = formatDateTime();

  const handleSubmit = () => {
    if (!notes.trim()) return; //stop whitespaces

    const updatedGroupData = [...groupData]; //created shallow copy

    updatedGroupData[activeGroupIndex].notesData.push({
      //push notes on notesData array
      id:Date.now(),    //generate unique
      note: notes,
      date,
      time,
    });

    setGroupData(updatedGroupData);
    setNotes("");
  };

  const handleKeyDown=(e)=>{
    if(e.key === 'Enter'){

      if(e.shiftKey){
        // allow new line when shift + enter pressed
        return;
      }
      e.preventDefault();
      handleSubmit();
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.textAreaContainer}>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter your text here..........."
          className={styles.textArea}
        />

        {notes === "" ? (
          <img src={disSend} className={styles.disSend} alt="send" />
        ) : (
          <img
            src={visibleSend}
            onClick={handleSubmit}
          
            className={styles.visibleSend}
            alt="send"
          />
        )}
      </div>
    </div>
  );
}

export default CreateNotes;
