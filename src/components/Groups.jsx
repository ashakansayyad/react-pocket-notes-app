import React, { useContext, useState } from "react";
import styles from "./Groups.module.css";
import { AppContext } from "../contextapi/AppContext";

export default function Groups({handleGroupClick}) {
  const { groupData } = useContext(AppContext);
  const [isActive, setIsActive] = useState(false);

  // get the first name to groups
  const getInitialName = (groupName) => {
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


  // get the active trasperent background
  const handleClick = (index) => {
    setIsActive(index);
    handleGroupClick(index); //pass the active index to HomePage
  };

  return (
    <div className={styles.container}>
      {groupData.map((data, index) => (
        <div
          key={index}
          style={{
            marginTop: "1rem",
            width: "100%",
            borderRadius: "16px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: '1rem 0',  // Adding padding to increase clickable area
            backgroundColor:
              isActive === index ? "rgb(220,220,220)" : "transparent",
            height: 'auto',  // Can also be '100px', '50%', etc.
          }}
          onClick={() => handleClick(index)}
        >
          <div
            style={{
              marginLeft: "1rem",
              width: "50px",
              height: "50px",
              backgroundColor: data.color,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "25px",
              color: "white",
              fontWeight: "500",
            }}
          >
            {getInitialName(data.groupName)}
          </div>
          <h3 className={styles.groupName}>{data.groupName}</h3>
        </div>
      ))}
    </div>
  );
}
