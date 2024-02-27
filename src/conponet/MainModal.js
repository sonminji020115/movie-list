const MainModal = ({id, title, photo, genre, horoscope, closeModal, director, actor, plot}) => {

    const handleClose = () => {
        closeModal(id);
    }

    return (
        <div className="MainModal">
            <div className="MainModal01">
                <p><img src={photo} /></p>
                <p className="title">{title}</p>
                <p className="genre">{genre}</p>
                <p className="horoscope"> <span>★</span> {horoscope}</p>
                <p>
                    <button onClick={handleClose}>닫기</button>
                </p>
            </div>
            <div className="MainModal02">
                <p className="director">{director}</p>
                <p className="actor">{actor}</p>
                <p className="plot">{plot}</p>
            </div>
        </div>
    );
}

export default MainModal;