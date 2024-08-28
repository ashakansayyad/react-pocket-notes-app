
const formatDateTime=()=>{

    const date = new Date(); //current date and time


    // format the date
    const optionsDate = {
        day:'2-digit',
        month:'short',
        year:'numeric',

    }
    const formattedDate=date.toLocaleDateString('en-GB',optionsDate);

    // format the time
    const optionsTime = {
        hour:'2-digit',
        minute:'2-digit',
        hour12:true,
    }

    const formattedTime=date.toLocaleTimeString('en-US',optionsTime);

    return {
        date:formattedDate,
        time:formattedTime,
    }


}

export default formatDateTime;