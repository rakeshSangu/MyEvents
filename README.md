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
- **EventForm**: Used for adding user input events with different event details which includes title,description,date,time,event-type.It handles user inputs and shows warnings accordingly to give valid input event details.
- **EventListItem**: Component that displays details of a specific event and allows user to edit,delete, and view in details about specific event.
- **CalendarView**: It is the Parent Component of EventForm and EventListItem.It Handles form for adding input Events and displays the list as per applied Filters.
- **NotFound**: Displays NotFound page for invalid route paths and provides link for redirecting to CalendarView path.

