import React, { useState } from "react";
import styles from "./HomePage.module.css";
import DefaultPage from "./DefaultPage";
import SideBarPage from "./SideBarPage";
import NotesPage from "./NotesPage";

export default function HomePage() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(null);

  // set the active index in group component
  const handleGroupClick = (index) => {
    setActiveGroupIndex(index);
  };
  const handleBackClick =()=>{
    setActiveGroupIndex(null);
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.left} ${activeGroupIndex !==null ? styles.active : ''}`}>
        <SideBarPage handleGroupClick={handleGroupClick} />
      </div>
      <div className={`${styles.right} ${activeGroupIndex !==null ? styles.active : ''} `}>
        {activeGroupIndex === null ? (
          <DefaultPage />
        ) : (
          <NotesPage activeGroupIndex={activeGroupIndex} handleBackClick={handleBackClick}/>
        )}
      </div>
    </div>
  );
}
