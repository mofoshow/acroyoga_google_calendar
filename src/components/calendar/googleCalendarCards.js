import React from 'react';


import { GOOGLE_API_KEY } from './config.js'
import GoogleCalendar from './utils/GoogleCalendar'
import baseStyles from '../../index.css'
import styles from './calendar.css'

const calendars = [
    {
        name: 'Google Api Test',
        url: 'p47vbn2qm0p9jtd986fo0o9mo0@group.calendar.google.com'
    }
]
const dailyRecurrence = 700
const weeklyRecurrence = 100
const monthlyRecurrence = 20


class GoogleCalendarCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events: []
        }
    }

    

    displayCard() {
        console.log(this.state.events);
        var items = this.state.items;


        return (this.state.events.map(function (event, index) {

            return (
                <div className="col-12 col-md-4 mb-3" key={index}>
                    <div className={'card ' + styles.cards} >
                        <div className="card-body">
                            <h5 className="card-title">{event.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{new Intl.DateTimeFormat('en-GB', { day: '2-digit', month: 'long', year: 'numeric' }).format(event.start)}</h6>
                            <p className="card-text">{event.description}</p>
                            <a href={event.glink} className="card-link">See Google Event</a>
                        </div>
                    </div>
                </div>
            )
        }))



    }

    componentDidMount() {
        this.getGoogleCalendarEvents()
    }

    getGoogleCalendarEvents() {
        GoogleCalendar.getAllCalendars(GOOGLE_API_KEY, calendars, dailyRecurrence, weeklyRecurrence, monthlyRecurrence)
            .then(events => {
                return events;
            }).then(data => {
                this.setState({ events: data });
            });

    }

    render() {
        return (
            <div className={baseStyles.infoArea + ' ' + styles.infoArea}>
                <h2 className="mb-3 mt-2">Upcoming Events</h2>
                <div className="container">
                    <div className="row">
                        {this.displayCard()}
                    </div>
                </div>
            </div>

        )
    }


}
export default GoogleCalendarCards;