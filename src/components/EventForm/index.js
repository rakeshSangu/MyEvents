import './index.css'

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class EventForm extends Component {
  state = {
    title: '',
    description: '',
    eventType: 'work',
    time: 1,
    formatTime: 'AM',
    errorPara: '',
  }

  onSubmitForm = event => {
    const {selectedDate, onAddNewEvent} = this.props
    event.preventDefault()
    const {title, description, eventType, time, formatTime} = this.state
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
      const inputeventObj = {
        id: uuidv4(),
        title: title,
        description: description,
        eventType: eventType,
        time: time,
        formatTime: formatTime,
        selectedDate: selectedDate,
      }
      this.setState({
        errorPara: '',
        title: '',
        description: '',
        time: 1,
        formatTime: 'AM',
        eventType: 'work',
      })
      onAddNewEvent(inputeventObj)
    }
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

  render() {
    const {selectedDate} = this.props
    const {title, description, formatTime, eventType, time, errorPara} =
      this.state
    return (
      <form onSubmit={this.onSubmitForm} className="form-container">
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
        <p className="seleted-date-para">
          Selected Date: <span className="input-date">{selectedDate}</span>
        </p>
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
              className="radio-input"
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
              className="radio-input"
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
          Add Event
        </button>
        <p className="error-para">{errorPara}</p>
      </form>
    )
  }
}
export default EventForm
