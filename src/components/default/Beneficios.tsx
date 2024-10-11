import { Button } from "../ui/button";
import ItensDiscount from "../ui/items-discount";

const Beneficios = () => {
  return (
    <section className="bg-[#3561fe] text-white h-full w-full">
      <div className="h-full flex flex-col items-center md:items-start justify-center w-full bg-bg-desktio bg-contain md:bg-cover pt-9 px-4 md:px-16">
        <div className="flex flex-col md:flex-row w-full md:justify-around">
          <div className="max-w-[500px] md:mt-32">
            <div className="mb-4 w-full max-w-[500px]">
              <p className="text-lg md:text-3xl font-medium">
                Entre na lista de espera e tenha
              </p>
              <div className="flex flex-col md:flex-row">
                <p className="text-2xl md:text-4xl font-bold">
                  benefícios &nbsp;
                </p>
                <p className="text-3xl md:text-4xl font-bold text-[#091E6C]">
                  exclusivos!
                </p>
              </div>
            </div>
            <p className="">
              Quem entra para a nossa lista de espera não apenas garante acesso
              antecipado ao Prudent Investor, mas também desbloqueia vantagens
              especiais. Veja o que você receberá ao se inscrever agora
            </p>
            <Button className="hidden md:block w-40 md:w-44 bg-[#FFC763] text-[#704700] font-bold text-sm h-12 my-7 rounded-lg hover:bg-yellow-600">
              Entrar para lista VIP
            </Button>
          </div>
          <img
            src="/assets/pilha-moeda.png"
            alt=""
            className="my-7 md:my-0 max-h-[700px] md:h-[30rem]"
          />
        </div>

        <div className="md:flex md:gap-3 md:mb-4 md:items-center md:justify-center md:w-full relative bottom-8 ">
          <ItensDiscount text={"Até 70% de DESCOTO!"} />
          <ItensDiscount text={"Upgrade beta das 6 expansões previstas."} />
          <ItensDiscount
            text={"Acesso ao Discord exclusivo do Prudent Investor."}
          />
        </div>
        <div className="md:flex md:gap-3 md:mb-4 md:items-center md:justify-center md:w-full relative bottom-8">
          <ItensDiscount
            text={
              "Torne-se afiliado oficial e ganhe para cada novo usuário que vier por sua indicação."
            }
          />
          <ItensDiscount text={"Alertas customizados para o seu whatsapp!."} />
          <ItensDiscount
            text={
              "Informações em primeira mão das empresas listadas na BOVESPA."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
