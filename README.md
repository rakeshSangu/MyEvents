# Calendar Event React App

## Overview
The Calendar Event React App is a web application that allows users to view, add, edit, and delete events on a calendar. The app provides a user-friendly interface to manage events efficiently.

## Features
- **View Events**: Can View list of events added in detail and can be filtered as per required.
- **Add Events**: Easily create new events with titles, descriptions, dates ,timings ,and event-type.
- **Edit Events**: Modify existing events to update details like title, time,date,description,event-type.
- **Delete Events**: Remove events from the Events.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

### Prerequisites
Make sure you have the following and dependencies listed installed on your system:
- npm (v6 or higher)
- react,react-router-dom,react-dom
- uuid
- react-calendar
- reactjs-popup


## Components Used
- **CalendarView**: Parent Components to EventForm and EventListItem.It Handles form for adding input Events and display the list as per Filters
- **EventForm**: Used for add New User Input Events with different event details which includes title,description,date,time,event-type.It handles user inputs and shows warnings accordings to give valid input event details.
- **EventListItem**: Components that displays details of specific event and allows user to edit,delete, and view more details about specific event.
- **NotFound**: Displays NotFound page for invalid route path and provides link for go to CalendarView path.

