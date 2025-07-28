import { BsWhatsapp } from "react-icons/bs";
import "./WhatsappButton.css";

const WhatsAppButton = () => {
  const phone = "5491161804991"; // ← tu número completo: CC + código área + número
  const msg = "Hola! Vengo de Adopta un peludito, necesito ayuda.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat por WhatsApp"
    >
      <BsWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;
