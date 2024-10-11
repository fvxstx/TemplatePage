import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="h-full w-full pt-9 bg-white text-[#071240]">
      <div className="space-y-6 flex flex-col items-start justify-center w-full px-4 md:flex-row md:justify-around md:gap-4">
        <div className="flex flex-col items-start">
          <img
            src="/assets/logo-footer.png"
            alt="Prudent Investor Logo"
            className="h-14"
          />
          <div>
            <p className="text-sm mt-3">
              Danzig Datentechnik LTDA <br />
              Avenida Prefeito Osmar Cunha 416 <br />
              Sala 1108 <br />
              Centro, Florianópolis <br />
              CNPJ 50.518.809/0001-88
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold">Contato</h3>
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="w-4 h-4" color="#071240" />
            <span>contato@prudent-investor.com</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="w-4 h-4" color="#071240" />
            <span>Avenida Prefeito Osmar Cunha, 416</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Privacidade</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left font-light w-full p-4 text-[#FFFFFF] mt-6 bg-[#071240]">
        <p>Prudent Investor Todos os direitos reservados.</p>
        <p className="mt-6">2024 ©</p>
      </div>
    </footer>
  );
};

export default Footer;
