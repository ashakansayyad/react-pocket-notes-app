import React from 'react'
import Groups from '../components/Groups'
import styles from './SideBarPage.module.css'
import { useContext } from 'react'
import {ModalContext} from '../contextapi/ModalContext'
import Modal from '../components/Modal'


export default function SideBar({handleGroupClick}) {

  const {modal,setModal}=useContext(ModalContext);
  const toggleModal=()=>{
   
    setModal(!modal)
   
    
  }

  
  return (
    <div className={styles.container}  >
            <div className={styles.header}>
              <h2 className={styles.heading} >Pocket Notes</h2>
            </div>
            <div className={styles.main}>
            <Groups handleGroupClick={handleGroupClick} />

            </div>
            <div 
           onClick={toggleModal}
            className={styles.footer}>

                <p className={styles.createBtn}>+</p>

            </div>

      {Modal && <Modal/>}

    </div>

  )
}
