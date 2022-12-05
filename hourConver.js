//convert time to 24 hour format from 12 hour format
// 01:02 PM
const convert12to24 = (time12) => {
  const [time, modi] = time12.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours == "12") hours = "00"

  if (modi == "PM") {
    hours = 12 + parseInt(hours)
  } else {
    hours = parseInt(hours)
  }

  return `${hours}:${minutes}`
}

console.log(convert12to24("12:02 PM"))