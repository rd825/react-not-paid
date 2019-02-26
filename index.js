import moment from "moment";

export default function notPaid(dueDate, gracePeriod) {
  // Giving the provided date to Moment, a wrapper for Date objects
  let due = moment.utc(dueDate);

  // Finding the diff between now and the due date in "days"
  let dueDiff = moment.utc().diff(due, "days");

  // If the diff is positive (i.e. past due), start this code block.
  if (dueDiff > 0) {
    // Calculate whether the diff has exceeded the grace period; calculate opacity accordingly
    let daysPastGrace = gracePeriod - dueDiff;
    let opacity = (daysPastGrace * 100) / gracePeriod / 100;

    // If opacity < 0, set it to 0, else if > 1, set to 1, else leave as is.
    opacity = opacity < 0 ? 0 : opacity > 1 ? 1 : opacity;

    if (opacity >= 0 && opacity <= 1) {
      document.querySelector("body").style.opacity = opacity;
    }
  }
}
