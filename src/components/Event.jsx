import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

const EventDetail = ({event, index}) => {
    return (
        <IonCard class="light list" key={index}>
            <Link to={`/events/${event.id}`}>
                <IonCardHeader>
                    <IonCardTitle>#{index+1}. {event.event_type} / {event.name}</IonCardTitle>
                </IonCardHeader>
            </Link>
            <IonCardContent>
                { event.description ? <p>{event.description}</p> : null }
                <p>Event Date &amp; Time: <b>{ moment(event.starts_on).format('DD MMM YYYY hh:mm A') }</b> </p>
                <p>Happening At: <b>{ event.place }</b> </p>
            </IonCardContent>
        </IonCard>
    )
}

export default EventDetail;