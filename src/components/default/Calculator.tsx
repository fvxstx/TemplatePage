import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const Calculator = () => {
  return (
    <div className="h-full text-white flex items-center justify-center md:justify-around relative bottom-40 md:bottom-0 sm:w-full md:mb-28">
      <div className="flex-1 space-y-6 flex flex-col justify-center items-center max-w-[430px] md:mx-6 ">
        <h1 className="text-2xl md:text-4xl font-bold">
          Calculadora <br />
          <p className="text-xl md:text-2xl">
            de Investimentos
            <span className="text-[#2C59F9]">&nbsp;compreensiva</span>
          </p>
        </h1>
        <div className="w-72 h-52 rounded-3xl block md:hidden">
          <img
            src="/assets/calculadora-according.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <Accordion type="single" collapsible className="px-4">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="text-base md:text-lg font-semibold">
              <div className="flex items-center gap-3 text-left ">
                <div className="h-6 w-6">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
                Ferramentas de Visualização Avançadas
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-2 ml-7 text-base text-[#93A7EA]">
                Monitore uma ampla variedade de ativos com um dashboard
                customizável e intuitivo. Tenha uma visão completa de sua
                carteira e acompanhe cada detalhe dos seus investimentos em
                tempo real.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-none">
            <AccordionTrigger className="text-base md:text-lg font-semibold">
              <div className="flex items-center gap-3 text-left">
                <div className="h-6 w-6">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
                Relatórios Consolidados e Customizáveis
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-2 ml-7 text-base text-[#93A7EA]">
                Acesse relatórios detalhados que podem ser ajustados às suas
                necessidades específicas, proporcionando uma análise mais
                completa do desempenho de sua carteira.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-none">
            <AccordionTrigger className="text-base md:text-lg font-semibold">
              <div className="flex items-center gap-3 text-left">
                <div className="h-6 w-6">
                  <div className="h-6 w-6 bg-blue-500 rounded-full"></div>
                </div>
                Alertas Customizados e Notificações Instantâneas
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mt-2 ml-7 text-base text-[#93A7EA]">
                Receba alertas e notificações configuráveis para mantê-lo
                informado sobre qualquer mudança importante no mercado ou em sua
                carteira de investimentos.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className=" w-2/4 rounded-xl hidden md:block ">
        <img
          src="/assets/calculadora-according.png"
          alt=""
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Calculator;
