import DogCarousel from "../Carousel/DogCarousel";
import HeroVideo from "../HeroVideo";
import SectionCard from "./SectionCard";
import ContactForm from "../ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <HeroVideo />

      <DogCarousel />

      <div className="container my-5 d-flex flex-column gap-5">
        <SectionCard
          title="Adoptá cachorros"
          img="./img/Puppy4.jpg"
          to="/category/Puppy"
          reverse={false}
        />

        <SectionCard
          title="Adoptá adultos"
          img="./img/Adult2.jpg"
          to="/category/Adult"
          reverse // invierte imagen / texto para alternar
        />

        <SectionCard
          title="Adoptá seniors"
          img="./img/Old11.jpg"
          to="/category/Senior"
          reverse={false}
        />

        <SectionCard
          title="Comprá accesorios"
          img="./img/Accesorios/Cama.png"
          to="/category/Accesories"
          reverse
        />
        <div className="container my-5">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
