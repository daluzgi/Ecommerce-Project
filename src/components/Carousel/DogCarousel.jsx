// src/components/DogCarousel.jsx
import { Carousel } from "react-bootstrap";
import "./DogCarousel.css"; // estilos opcionales

export default function DogCarousel() {
  const slides = [
    { src: "/img/Old10.jpg", alt: "Perro Adulto" },
    { src: "/img/Puppy9.jpg", alt: "Cachorro" },
    { src: "/img/Old17.jpg", alt: "Perro adulto" },
    { src: "/img/Adult17.jpg", alt: "Perro Adulto" },
    { src: "/img/Adult19.jpg", alt: "Perro Adulto" },
  ];

  return (
    <Carousel fade interval={4000} pause="hover">
      {slides.map((s, i) => (
        <Carousel.Item key={i}>
          <img className="d-block w-100" src={s.src} alt={s.alt} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
