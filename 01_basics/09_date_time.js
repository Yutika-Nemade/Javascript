// Dtaes
let newDate = new Date()
console.log(typeof newDate) // object
console.log(newDate) // 2025-03-01T09:10:36.069Z
console.log(newDate.toString()) // Sat Mar 01 2025 14:43:43 GMT+0530 (India Standard Time)
console.log(newDate.toDateString()) // Sat Mar 01 2025
console.log(newDate.toISOString()) // 2025-03-01T09:13:43.440Z
console.log(newDate.toLocaleString()) // 1/3/2025, 2:43:43 pm
console.log(newDate.toLocaleDateString()) // 1/3/2025
console.log(newDate.toTimeString()) // 14:44:49 GMT+0530 (India Standard Time)
console.log(newDate.toJSON()) // 2025-03-01T09:14:49.659Z

let createdDate = new Date(2025,2,12)
// 2025 represents year, 2 represents month(month starts with 0), 12 represents the day
console.log(createdDate.toDateString())  // Wed Mar 12 2025

let createdDate1 = new Date(2025,2,12,4,7)
// 2025 represents year, 2 represents month(month starts with 0), 12 represents the day, 4 represents hours, 7 represents minutes
console.log(createdDate1.toLocaleString())  // 12/3/2025, 4:07:00 am

let createdDate2 = new Date("2025-01-23")
console.log(createdDate2.toLocaleString()) // 23/1/2025, 5:30:00 am

let timeStamp = Date.now()
console.log(timeStamp) // 1740821323771
console.log(createdDate.getTime()) // 1741717800000

// to get milliseconds
console.log(Math.floor(Date.now()/1000)) // 1740821499

// to customize date format

newDate.toLocaleString('default', {
    weekday: 'long',
    hour: 'numeric'
})
