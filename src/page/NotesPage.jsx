import React,{useContext} from 'react'
import styles from './NotesPage.module.css'
import NotesHeader from '../components/NotesHeader'
import CreateNotes from '../components/CreateNotes'
import DisplayNotes from '../components/DisplayNotes'
import { AppContext } from '../contextapi/AppContext'

function NotesPage({activeGroupIndex,handleBackClick}) {
  const {groupData}=useContext(AppContext);

  
  const activeGroup = groupData[activeGroupIndex];  //pass the activeIndex and get their data
  return (
    <div className={styles.conatiner} >
        <NotesHeader activeGroup={activeGroup} handleBackClick={handleBackClick}/>
          <DisplayNotes activeGroupIndex={activeGroupIndex}/>
          <CreateNotes activeGroupIndex={activeGroupIndex}  />

     
    </div>
  )
}

export default NotesPage
