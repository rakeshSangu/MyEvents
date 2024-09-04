import './index.css'

import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {Component} from 'react'

class EventListItem extends Component {
  state = {
    title: '',
    description: '',
    eventType: 'work',
    time: 1,
    formatTime: 'AM',
    errorPara: '',
    viewMore: false,
  }

  componentDidMount() {
    const {eventDetails} = this.props
    const {title, description, time, eventType, formatTime, selectedDate} =
      eventDetails

    this.setState({
      title: title,
      description: description,
      time: time,
      eventType: eventType,
      formatTime: formatTime,
      selectedDate: selectedDate,
    })
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeDescription = event => {
    this.setState({
      description: event.target.value,
    })
  }

  onChangeEventType = event => {
    this.setState({
      eventType: event.target.value,
    })
  }

  onChangeTime = event => {
    this.setState({
      time: event.target.value,
    })
  }

  onChangeTimeFormat = event => {
    this.setState({
      formatTime: event.target.value,
    })
  }

  onChangeDate = event => {
    this.setState({
      selectedDate: event.target.value,
    })
  }

  onSubmitUpdateform = event => {
    event.preventDefault()
    const {eventDetails, onAddEditedEvent} = this.props
    const {id} = eventDetails
    const {title, description, eventType, selectedDate, time, formatTime} =
      this.state
    if (title === '') {
      this.setState({errorPara: '*Enter valid title'})
    } else if (description === '') {
      this.setState({errorPara: '*Enter valid description'})
    } else if (eventType === '') {
      this.setState({errorPara: '*Enter valid event type'})
    } else if (selectedDate === '?') {
      this.setState({errorPara: '*choose event date'})
    } else if (time === '') {
      this.setState({errorPara: '*Enter valid time'})
    } else if (formatTime === '') {
      this.setState({errorPara: '*Enter valid time format'})
    } else {
      const updatedEventObj = {
        id: id,
        title: title,
        description: description,
        eventType: eventType,
        time: time,
        formatTime: formatTime,
        selectedDate: selectedDate,
      }
      console.log(updatedEventObj)
      this.setState({
        errorPara: '',
      })
      onAddEditedEvent(updatedEventObj)
    }
  }

  renderPopup = () => {
    const {title, description, time, eventType, formatTime, selectedDate} =
      this.state
    return (
      <Popup trigger={<button className="list-button">Edit</button>} modal>
        {close => (
          <form onSubmit={this.onSubmitUpdateform} className="form-container">
            <div className="title-input-container">
              <label htmlFor="title" className="label-heading">
                Enter Title
              </label>
              <input
                value={title}
                onChange={this.onChangeTitle}
                id="title"
                className="input-ele"
                type="text"
              />
            </div>
            <div className="title-input-container">
              <label htmlFor="description" className="label-heading">
                Enter Description
              </label>
              <textarea
                id="description"
                rows="3"
                className="description-input"
                onChange={this.onChangeDescription}
                value={description}
              ></textarea>
            </div>
            <div className="title-input-container">
              <label htmlFor="work-type" className="label-heading">
                Type of Event
              </label>
              <select
                value={eventType}
                id="select-type"
                onChange={this.onChangeEventType}
                className="select-element"
              >
                <option className="type-option" value="work">
                  Work
                </option>
                <option className="type-option" value="personal">
                  Personal
                </option>
              </select>
            </div>

            <div className="title-input-container">
              <label htmlFor="date" className="label-heading">
                Enter date
              </label>
              <input
                value={selectedDate}
                onChange={this.onChangeDate}
                id="date"
                className="input-ele"
                type="text"
              />
            </div>

            <div className="title-input-container">
              <label htmlFor="time" className="label-heading">
                Time
              </label>
              <select
                onChange={this.onChangeTime}
                value={time}
                id="time"
                className="select-element"
              >
                <option value={1}>{1}</option>
                <option value={2}>{2}</option>
                <option value={3}>{3}</option>
                <option value={4}>{4}</option>
                <option value={5}>{5}</option>
                <option value={6}>{6}</option>
                <option value={7}>{7}</option>
                <option value={8}>{8}</option>
                <option value={9}>{9}</option>
                <option value={10}>{10}</option>
                <option value={11}>{11}</option>
                <option value={12}>{12}</option>
              </select>
            </div>
            <div className="am-pm-container">
              <div className="radio-container">
                <input
                  onChange={this.onChangeTimeFormat}
                  id="am"
                  name="time"
                  value="AM"
                  type="radio"
                  checked={formatTime === 'AM' && true}
                />
                <label htmlFor="am" className="label-time">
                  AM
                </label>
              </div>
              <div className="radio-container">
                <input
                  onChange={this.onChangeTimeFormat}
                  id="pm"
                  name="time"
                  value="PM"
                  type="radio"
                  checked={formatTime === 'PM' && true}
                />
                <label htmlFor="pm" className="label-time">
                  PM
                </label>
              </div>
            </div>
            <button type="submit" className="add-button">
              Update Event
            </button>
            <p className="error-para">{}</p>
            <button
              className="close-button"
              type="button"
              onClick={() => close()}
            >
              close
            </button>
          </form>
        )}
      </Popup>
    )
  }

  onClickViewMore = () => {
    this.setState(prevState => ({
      viewMore: !prevState.viewMore,
    }))
  }

  render() {
    const {eventDetails, deleteEvent} = this.props
    const {id} = eventDetails
    const {title, description, time, eventType, formatTime, selectedDate} =
      eventDetails
    const {viewMore} = this.state

    const onClickDelete = () => {
      deleteEvent(id)
    }
    return (
      <>
        <div className="event-title-type-container">
          <h1 className="list-item-heading">{title}</h1>
          <p className="list-item-event-type-para">{eventType}</p>
        </div>
        <div className="date-time-container">
          <p className="list-item-date">
            Date: <span className="list-item-span">{selectedDate}</span>
          </p>
          <p className="list-item-time">
            Time: <span className="list-item-span">{time + formatTime}</span>
          </p>
        </div>
        {viewMore && (
          <p className="description-para">
            <span className="list-item-description-heading">Descripiton:</span>{' '}
            {description}
          </p>
        )}
        <div className="buttons-container">
          <button onClick={this.onClickViewMore} className="list-button">
            {viewMore ? 'View Less' : 'View More'}
          </button>
          {this.renderPopup()}
          <button onClick={onClickDelete} className="list-button">
            Delete
          </button>
        </div>
      </>
    )
  }
}
export default EventListItem
