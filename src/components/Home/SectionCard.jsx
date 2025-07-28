import { Link } from "react-router-dom";
import "./SectionCard.css";

export default function SectionCard({ title, img, to, reverse }) {
  return (
    <div
      className={`row g-0 section-card ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="col-12">
        {/* Panel blanco con padding */}
        <div className="section-card-inner row g-4 flex-md-row">
          {/* Imagen */}
          <div className="col-md-6">
            <img src={img} alt={title} className="img-fluid" />
          </div>

          {/* Texto + botón */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
            <h2 className="mb-3">{title}</h2>
            <Link to={to} className="btn btn-primary align-self-md-start">
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
