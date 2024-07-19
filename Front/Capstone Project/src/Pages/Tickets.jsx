import React from 'react'
import TicketCards from '../Components/TicketCards'
import SingleTicket from '../Components/SingleTicket'

export default function Tickets() {
  return (
    <div>
      <h1 className='heading'>TICKETS</h1>
      <SingleTicket/> <br/><br/>
      <TicketCards/>
      </div>
  )
}
