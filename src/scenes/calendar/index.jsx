import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // intialize the set of event that can be put on to the calendar
  // But initially it will consist of empty array and then array of event that can be put on to the calendar
  const [currentEvents, setCurrentEvents] = useState([]);
  // ask for selecting a date for a particular event
  const handleDateClick = (selected) => {
    const title = prompt("Please add a new title for your event");
    const calendarApi = selected.view.calendar;
    //since we want that client shlould be able to add a new title foe a event, so remove the selected date
    calendarApi.unselect();

    // if user enters a title then we need to store that title on a particular event date
    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  // if you click on a event then, will it be deleted or not
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full calendar Interactive page" />
      {/* this box is the parent of calendar sidebar and main calendar */}
      <Box display="flex" justifyContent="space-between">
        {/* Calendar Sidebar
                flex="1 1 20%" means "row shrink %space required by the element"
            */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography varient="h5">Events</Typography>
          {/* now loop through od each current events and listout them */}
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        // format of the date user wants
                        year: "numeric",
                        month: "short",
                        date: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* Calender View */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next,today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
