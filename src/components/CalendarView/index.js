import './index.css'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import {Component} from 'react'

import EventForm from '../EventForm'
import EventListItem from '../EventListItem'

class CalendarView extends Component {
  state = {
    selectedDate: '?',
    eventsList: [
    ],
    filterSelected: 'all',
  }

  onChangeDate = value => {
    const inputYear = value.getFullYear()
    const inputMonth = value.getMonth()
    const inputDate = value.getDate()
    this.setState({
      selectedDate: `${inputDate}/${inputMonth + 1}/${inputYear}`,
    })
  }

  onAddNewEvent = eventObj => {
    this.setState(prevState => ({
      eventsList: [...prevState.eventsList, eventObj],
      selectedDate: '?',
    }))
  }

  deleteEvent = id => {
    const {eventsList} = this.state
    const updatedEventList = eventsList.filter(each => each.id !== id)
    this.setState({
      eventsList: updatedEventList,
    })
  }

  onAddEditedEvent = updatedEventObj => {
    const {eventsList} = this.state
    const updatedEventList = eventsList.map(each => {
      if (each.id === updatedEventObj.id) {
        const {
          title,
          description,
          time,
          eventType,
          formatTime,
          id,
          selectedDate,
        } = updatedEventObj
        return {
          title,
          description,
          time,
          eventType,
          formatTime,
          selectedDate,
          id,
        }
      } else {
        return each
      }
    })
    this.setState({
      eventsList: updatedEventList,
    })
  }

  onChangeFilter = event => {
    this.setState({
      filterSelected: event.target.value,
    })
  }

  render() {
    const {selectedDate, eventsList, filterSelected} = this.state
    let filltedList={}
    if (filterSelected === 'all') {
      filltedList = eventsList
    } else {
      filltedList = eventsList.filter(each => each.eventType === filterSelected)
    }
    return (
      <div className="home-container">
        <h1 className="top-heading">Event Manager</h1>
        <div className="calendar-form-container">
          <div className="calendar-container">
            <Calendar onChange={this.onChangeDate} />
          </div>
          <EventForm
            onAddNewEvent={this.onAddNewEvent}
            selectedDate={selectedDate}
          />
        </div>
        <hr />
        <div className="added-heading-filter-container">
          <h1 className="added-events-heading">Added Events</h1>
          <select
            onChange={this.onChangeFilter}
            value={filterSelected}
            className="filter-select-item"
          >
            <option value="work">work</option>
            <option value="personal">personal</option>
            <option value="all">all</option>
          </select>
        </div>
        {filltedList.length !==0 && (
            <ul className="events-list-container">
                {filltedList.map(each => (
                <li className="event-list-item" key={each.id}>
                    <EventListItem
                    deleteEvent={this.deleteEvent}
                    eventDetails={each}
                    onAddEditedEvent={this.onAddEditedEvent}
                    />
                </li>
                ))}
            </ul>
        )}
        {filltedList.length === 0 && (
          <p className="no-events-para">
            No Events. <br /> Change Filters or Add New Event
          </p>
        )}
      </div>
    )
  }
}
export default CalendarView
