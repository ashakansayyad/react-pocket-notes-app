import styles from "./Modal.module.css";
import { ModalContext } from "../contextapi/ModalContext";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../contextapi/AppContext";
import defaultColor from "../data/defaultColors";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Modal() {
  const { groupData, setGroupData } = useContext(AppContext);
  const { modal, setModal } = useContext(ModalContext);
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState('');
  const [showAlert,setShowAlert]=useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const handleColorClick = (color) => {
    setSelectedColor(color);
   setShowAlert(false);
 
  };

  const handleSubmit=(toggleModal)=>{
    if (!groupName.trim() || !selectedColor) {
     setShowAlert(true);
     return;
    }

    const data = {
      groupName,
      color:selectedColor,
      notesData:[]
    }
    setGroupData([...groupData, data])
    toggleModal();
  }

  // reset feild whenever the modal is opend
  useEffect(()=>{
    if(modal ){
      setGroupName('');
      setSelectedColor('');
      setShowAlert(false);
    }
  },[modal]);



  return (
    <>
      {modal && (
        <div className={styles.container}>
          <div onClick={toggleModal} className={styles.overlay}>
          {
            showAlert&& (
              <div className={styles.alert}>
                Please Enter Group name and select a color!
            </div>

            ) }
          </div>
          <div className={styles.modalContent}>
            <h2>Create New group</h2>
         
            <div className={styles.userDataContainer}>
              <h3 className={styles.groupName}>Group Name</h3>
              <input
                type="text"
                value={groupName}
                className={styles.userInput}
                onChange={(e) => setGroupName(e.target.value)}
                placeholder="Enter group name"
              />
            </div>
            <div className={styles.colorDataContainer}>
              <h3 className={styles.groupColor}>Choose colour</h3>
              <div
                className={styles.colorCont}
               
              >
                {defaultColor.map((color) => (
                  <div
                    key={color}
                    className={styles.circle}
                    onClick={()=>handleColorClick(color)}
                    style={{
                      backgroundColor: color, 
                      border: selectedColor === color ? "3px solid black" : "none",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className={styles.createBtnContainer}>
            <button onClick={()=>handleSubmit(toggleModal)} className={styles.closeModal}>
              Create
            </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
