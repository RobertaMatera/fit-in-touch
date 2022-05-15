import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
//import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/sass/styles.scss";
import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/src/stylesheets/datepicker.scss";

const Agenda = () => {
  const locales = {
    "en-US": require("date-fns/locale/en-US"),
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: "patient 1 - check",
      allDay: true,
      start: new Date(2022, 6, 0),
      end: new Date(2022, 6, 0),
    },
    {
      title: "patient 2 - check",
      start: new Date(2022, 5, 10),
      end: new Date(2022, 5, 11),
    },
    {
      title: "patient 3 - check",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 23),
    },
  ];

  const [newEvent, setNewEvent] = useState({
    title: "",
    start: new Date(),
    end: new Date(),
  });

  const [allEvents, setAllEvents] = useState(events);

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent]);
  };

  return (
    <div className=" mb-5">
      <div className="text-center mt-4 mb-5">
        <div className="date-input-container">
          <div className="d-block d-lg-flex">
            <input
              className="me-lg-5"
              type="text"
              placeholder="Add Title"
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
            />
            <DatePicker
              className="me-lg-5"
              placeholderText="Start Date"
              selected={newEvent.start}
              onChange={(start: any) => setNewEvent({ ...newEvent, start })}
            />
            <DatePicker
              placeholderText="End Date"
              selected={newEvent.end}
              onChange={(end: any) => setNewEvent({ ...newEvent, end })}
            />
          </div>
          <button className="add-event-btn" onClick={handleAddEvent}>
            add event
          </button>
        </div>
      </div>

      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default Agenda;
