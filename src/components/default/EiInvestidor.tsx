import { Button } from "../ui/button";

const EIInvestidor = () => {
  return (
    <div
      className={`h-full bg-[#050919] text-white flex items-center justify-center pt-16 px-6 w-full`}
    >
      <div className="flex-1 flex flex-col justify-center md:flex-row md:justify-around items-center md:gap-6 w-full">
        <img
          src={"assets/investidor.png"}
          alt="investidor"
          className="mb-12 md:h-[40rem]"
        ></img>
        <div className="max-w-[28rem]">
          <h1 className="text-3xl md:text-5xl font-bold text-left w-full">
            Ei investidor
          </h1>
          <p className="text-xl md:text-2xl font-bold text-left w-full">
            não perca a chance de ter insights
            <span className="text-[#3561FE]">
              &nbsp;exclusivos em primeira mão!
            </span>
          </p>
          <p className="text-[#93A7EA] text-lg mt-6">
            Não deixe para depois o que você pode começar a construir agora.
            Garanta seu lugar na lista de espera e esteja pronto para usar as
            ferramentas que vão transformar sua abordagem ao mercado.
          </p>
          <Button className="w-full md:w-44 bg-[#FFC763] text-[#704700] font-bold text-sm h-12 my-7 rounded-lg hover:bg-yellow-600">
            Entrar para lista VIP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EIInvestidor;
