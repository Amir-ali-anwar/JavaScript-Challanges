// 1. Write a JavaScript program to display the current day and time in the following format.  
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const currentDay=()=>{
    const daylist= ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let date= new Date();
    let today= date.getDay()
    const timeshif= date.getHours() < 12 ? 'AM': 'PM'

    console.log(`Today is: ${daylist[today]}`);
    console.log(`Time is: ${date.getHours()} ${timeshif} ${date.getMinutes()} ${date.getMilliseconds()} `);
    // console.log(`Today is: ${date.getMinutes()}`);
    // console.log(`Today is: ${date.getMilliseconds()}`);
    return date
}

currentDay()