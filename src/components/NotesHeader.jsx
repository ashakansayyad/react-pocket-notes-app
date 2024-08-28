import React, { useContext } from "react";
import styles from "./NotesHeader.module.css";
import backArrow from '../assets/backArrow.png';
function NotesHeader({ activeGroup, handleBackClick }) {
  const handleInitial = (groupName) => {
    const words = groupName
      .trim()
      .split(" ")
      .filter((word) => word.length > 0);
    const initialString = words
      .slice(0, 2)
      .map((word) => word[0].toUpperCase())
      .join("");
    return initialString;
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <img 
        
        src={backArrow} 
        className={styles.backArrow}
         alt="back"
         onClick={handleBackClick}
         />
        <div
          className={styles.groupCircle}
          style={{
            backgroundColor: activeGroup.color
          }}
        >
          {handleInitial(activeGroup.groupName)}
        </div>
        <h4 className={styles.groupName}>{activeGroup.groupName}</h4>
      </div>
    </div>
  );
}

export default NotesHeader;
