import { useState } from "react";
import MainModal from "./MainModal";

const MainItem = ({id, title, photo, genre, horoscope, reservation, director, actor, plot}) => {

    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    };

    const closeModal = (t) => {
        setIsModal(false);
    };

    return (
      <div className="MainItem">
            <p className="photo"><img src={photo} /></p>
            <p className="ItemTitle">{title}</p>
            <p className="ItemGenre">{genre}</p>
            <p className="Itemhoroscope"><span>★</span> {horoscope}</p>
            <p><button>{reservation}</button></p>
            <div className="over">
                <button onClick={showModal}>상세보기</button>
            </div>
            <div className={isModal ? 'modal show' : 'modal'}>
                < MainModal id={id} photo={photo} title={title}
                genre={genre} horoscope={horoscope} closeModal={closeModal} director={director}
                actor={actor} plot={plot}
                />
            </div>
      </div>
    );
  }

export default MainItem;