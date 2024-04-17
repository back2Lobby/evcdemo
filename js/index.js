import { EventCalendar } from "evc";

// storing the model cell so we can clone it while generating calendar cells
const dayCellModel = document
  .querySelector("#daysOfMonth #dayCellModel")
  .cloneNode(true);
document.querySelector("#daysOfMonth #dayCellModel").remove();

// Generating calendar day cell using given data
function generateCell(eventCalendar, dayData = null) {
  const newCell = dayCellModel.cloneNode(true);
  newCell.innerHTML = dayData?.day?.getDate() ?? "";

  if (dayData) {
    let eventsForThisDay = dayData.events;
    if (eventsForThisDay.length > 0) {
      let gradientsToMake = eventsForThisDay.length;
      let breakpoint = 100 / gradientsToMake;
      let gradient = "linear-gradient(90deg,";
      eventsForThisDay.forEach((ev, index) => {
        gradient += `${ev.themeColor} ${breakpoint * index}%, ${
          ev.themeColor
        } ${breakpoint * (index + 1)}%`;
        if (index !== eventsForThisDay.length - 1) {
          gradient += ",";
        }
      });
      newCell.style.background = gradient + ")";

      newCell.style.color = "#fff";
      newCell.style.textShadow = "0px 0px 2px black";
    }

    newCell.addEventListener("click", () => {
      eventCalendar.selectedDay = dayData.day;
    });
  }

  document.getElementById("daysOfMonth").appendChild(newCell);
}

// just using it so we can see the demo in current month everytime we open site
const currentMonth = () => {
  return new Date().getMonth() + 1;
}

const currentYear = () => {
  return new Date().getFullYear();
}

const evc = new EventCalendar({
  events: [
    {
      title: "John's Birthday",
      start: {
        day: 23,
        month: currentMonth(),
      },
    },
    {
      title: "My Exams",
      start: {
        day: 2,
        month: currentMonth(),
        year: currentYear(),
      },
      end: {
        day: 12,
        month: currentMonth(),
        year: currentYear(),
      },
      themeColor: "#e91e63",
    },
    {
      title: "Montly Quiz",
      start: {
        day: 3,
      },
      themeColor: "#795548",
    },
    {
      title: "Sunday :D",
      start: {
        weekDay: 0,
      },
      themeColor: "#000000",
    },
  ],
});
evc
  .on("monthChanged", (month) => {
    if (Number.isInteger(month)) {
      document.querySelector("#calendarHeader #thisMonth").innerHTML =
        Intl.DateTimeFormat("en", { month: "short" }).format(
          new Date(month + 1 + "")
        );
    }
  })
  .on("yearChanged", (year) => {
    document.querySelector("#calendarHeader #thisYear").innerHTML = year;
  })
  .on("daysChanged", (days, eventCalendar) => {
    document.getElementById("daysOfMonth").innerHTML = "";

    days.forEach((dayData, i) => {
      // generate empty cells before first day if month doesn't start from monday
      if (i === 0) {
        // 0 = Monday ... 6 = Sunday
        let dayInWeek = 0;
        while (days[0].day.getDay() !== dayInWeek && dayInWeek <= 6) {
          generateCell();
          dayInWeek++;
        }
        if (days[0].day.getDay() === dayData.day.getDay()) {
          generateCell(eventCalendar, dayData);
        }
      } else {
        generateCell(eventCalendar, dayData);
      }
    });
  })
  .on("selectedDayChanged", (selectedDayData) => {
    document.querySelector("#calendarHeader #eventDescriptor").innerHTML = "";
    // using this to prevent showing duplicate event titles
    let addedEvents = [];
    selectedDayData.events.forEach((ev) => {
      if (!addedEvents.some((evnt) => ev === evnt)) {
        document.querySelector("#calendarHeader #eventDescriptor").innerHTML +=
          `<div class="w-full" style="text-shadow:0px 0px 2px black;color:white;background-color:${ev.themeColor}">` +
            ev?.title +
            `</div>` ?? "";
        addedEvents.push(ev);
      }
    });
  });

// set next month button
document
  .querySelector("#calendarHeader #nextMonth")
  .addEventListener("click", () => {
    evc.month++;
  });

// set prev month button
document
  .querySelector("#calendarHeader #prevMonth")
  .addEventListener("click", () => {
    evc.month--;
  });
