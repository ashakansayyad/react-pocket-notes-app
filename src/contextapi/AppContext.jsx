import { useEffect, createContext, useState } from "react"


export const AppContext = createContext();

export const AppProvider = ({ children }) => {


    // get data from localstorage 

    const [groupData, setGroupData] = useState(

        JSON.parse(localStorage.getItem("groupData")) || []

    );


   

    useEffect(() => {
        localStorage.setItem("groupData", JSON.stringify(groupData))
    }, [groupData])

  

    return (
        <AppContext.Provider value={{
            groupData,
            setGroupData,
        }}>
            {children}
        </AppContext.Provider>

    )


}