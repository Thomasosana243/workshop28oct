import { useState } from "react";
import "./Imageslide.css";

interface ImagelistProps {
  image: string;
}

interface Props {
  imagelist: ImagelistProps[];
}

function Imageslide({ imagelist }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagelist.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagelist.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <div className="imgsize">
        {imagelist.map((item, index) => (
          <img
            key={index}
            className={`imgclass ${
              index === currentIndex ? "active" : "inactive"
            }`}
            src={item.image}
            alt={`Slide ${index}`}
          />
        ))}
      </div>

      <div className="button-container">
        <button onClick={prevSlide} className="carousel-button">
          Précédent
        </button>
        <button onClick={nextSlide} className="carousel-button">
          Suivant
        </button>
      </div>
    </div>
  );
}

export default Imageslide;
