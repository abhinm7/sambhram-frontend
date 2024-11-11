import './TicketCards.css';

const TicketCards = () => {
    const images = ['one.png', 'two.png', 'three.png', 'four.png'];

    return (
        <div className="ticket-cards"> 
            <div className="ticket-heading">
                <h2>GRAB YOUR TICKETS</h2>
            </div>
            <div className="ticket-card-list">
                {images.map((src, index) => (
                    <div className="ticket-card-view" key={index}>
                        <div className="ticket-card-overview">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo, nobis facilis, incidunt distincti </p>

                        </div>
                        <img src={src} alt={`Ticket ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TicketCards;
