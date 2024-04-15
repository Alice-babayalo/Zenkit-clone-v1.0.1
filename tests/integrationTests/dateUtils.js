var startDateAsNumber = new Date("2024-04-11T11:00:00.000Z").getTime();
var endDateAsNumber = new Date("2024-04-13T11:20:00.000Z").getTime();

let duration = {
  durationPeriod: 0,
  durationType: ''
}

var difference = endDateAsNumber - startDateAsNumber;
// console.log(" startDateAsNumber: " + startDateAsNumber + " \n endDateAsNumber-: " + endDateAsNumber + "\n Their difference is " + difference)

const oneHour = 1000 * 60 * 60;
let differenceInHours = difference / oneHour;

console.log("The difference is " + differenceInHours + " hours");

const durationCalculator = {
  minuteAnalysis: (a) => {
    if (a < 1) {
      duration.durationType = "minutes";
      if (a === (1 / 60)) {
        duration.durationType = "minute";
      }
      let minutes = Math.floor(a * 60);
      duration.durationPeriod = minutes;
      return duration.durationPeriod + " " + duration.durationType
    }
  },

  hoursAnalysis: function(a) {
    if (a >= 1 && a < 24) {
      if (a === 1) {
        duration.durationType = "hour";
      }
      if (a % 1 === 0) {
        duration.durationType = "hours";
        duration.durationPeriod = a
        return duration.durationPeriod + " " + duration.durationType;
      }
      else {
        duration.durationType = "hours";
        let hoursRemainder = a % 1;
        duration.durationPeriod = Math.floor(a)
        return duration.durationPeriod + " " + duration.durationType + " and " + this.minuteAnalysis(hoursRemainder)
      }
    }
    else if (a<1){
      this.minuteAnalysis(a);
    }
    
  },
  dayAnalysis: function(a) {
    if (a >= 24) {
      if (a === 24) {
        duration.durationType = "day";
      }
      duration.durationType = "days";
      let daysRemainder = a % 1;
      // console.log("the remainder portion of the day is "+ daysRemainder)
      duration.durationPeriod = Math.floor(a / 24);
      const remainingHours=a-(duration.durationPeriod*24)
      // console.log(remainingHours)
      if(remainingHours<1){
        return  duration.durationPeriod + " "+ duration.durationType +" and "+this.minuteAnalysis(remainingHours);
      }
      else {
        return duration.durationPeriod + " "+ duration.durationType +" and "+this.hoursAnalysis(remainingHours);
      }
    }
  }
}


if(differenceInHours <1){
  console.log(durationCalculator.minuteAnalysis(differenceInHours));
}
else if (differenceInHours>=1 && differenceInHours <24){
  console.log(durationCalculator.hoursAnalysis(differenceInHours));
}
else if(difference >= 24){
  console.log(durationCalculator.dayAnalysis(differenceInHours));
}



// export default {startDateToStartTime, endDateToEndTime, durationCalculator}
