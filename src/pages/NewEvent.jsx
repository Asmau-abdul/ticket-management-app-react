import '../styles/Dashboard.scss'

const NewEvent = () => {
    return ( 
        <>
            <div className='newEvent'>
                <form action="">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description"/>
                    <label htmlFor="eventDate">Date</label>
                    <input type="date" name="eventDate" id="eventDate" />
                    <label htmlFor="location">Location</label>
                    <input type="text" id="location" name="location"/>
                    <label htmlFor="totalTickets">Total number of tickets available</label>
                    <input type="text" id="totalTickets" name="totalTickets"/>
                    <label htmlFor="ticketsSold">Total number of tickets sold</label>
                    <input type="number" name="ticketsSold" id="ticketsSold" />
                </form>
            </div>
        </>
     );
}
 
export default NewEvent;