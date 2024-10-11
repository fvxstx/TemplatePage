// pages/index.tsx
import Beneficios from "@/components/default/Beneficios";
import Calculator from "@/components/default/Calculator";
import DefaultContainer from "@/components/default/DefaultContainer";
import DefaultForm from "@/components/default/DefaultForm";
import EIInvestidor from "@/components/default/EiInvestidor";
import Footer from "@/components/default/Footer";
import InfosForm from "@/components/default/InfosForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-black text-white flex items-center justify-center">
      <div className="flex flex-col justify-center items-center w-full relative">
        <header className="w-full flex justify-center sm:justify-between items-center py-4 px-20 mb-10">
          <img
            src="/assets/logo.png"
            alt="Prudent Investor Logo"
            className="h-10 bg-transparent"
          />
          <Button className="hidden sm:block bg-[#0B184382] text-white font-bold text-sm h-12 my-4 rounded-xl hover:bg-yellow-600">
            Entrar para lista VIP
          </Button>
        </header>
        <div className="flex flex-col sm:justify-between lg:flex-row sm:px-20 w-full md:mb-36">
          <InfosForm />
          <DefaultForm />
        </div>
        <section className="bg-[#050919] h-full pb-20 flex flex-col justify-center items-center w-full">
          <img
            src="/assets/iphone.png"
            alt=""
            className="relative z-50 bottom-40 h-50 w-50 md:hidden block"
          />
          <img
            src="/assets/page.png"
            alt=""
            className="relative z-50 bottom-32 h-30 w-30 md:block hidden px-16 mt-10"
          />
          <Calculator />
          <DefaultContainer
            title={"Simulações"}
            subtitle={"de Monte"}
            imgPath={""}
            side={true}
            highlighted={"Carlo e Backtests"}
            description="Teste diferentes cenários com simulações robustas que projetam resultados futuros, ajudando você a tomar decisões mais assertivas em diversos contextos de mercado"
          />
          <DefaultContainer
            title={"Calculadora"}
            subtitle={"de Investimentos"}
            imgPath={""}
            side={false}
            highlighted={"compreensiva"}
            description="Insights poderosos, relatórios customizáveis e simulações que simplificam suas decisões financeiras. Entre para a lista de espera e tenha acesso a tudo o que você precisa para atingir seus objetivos de liberdade financeira."
          />
          <EIInvestidor />
          <DefaultContainer
            title={"Modelos matemáticos"}
            subtitle={"Avançados"}
            imgPath={""}
            side={true}
            highlighted={"simplificado"}
            description="Insights poderosos, relatórios customizáveis e simulações que simplificam suas decisões financeiras. Entre para a lista de espera e tenha acesso a tudo o que você precisa para atingir seus objetivos de liberdade financeira."
          />
          <DefaultContainer
            title={"Ferramentas"}
            subtitle={"para encontrar"}
            imgPath={""}
            side={false}
            highlighted={"ações de alto valor"}
            description="Descubra ações de valor negligenciadas pelo mercado utilizando nossos filtros avançados de análise e comparação"
          />
        </section>
        <Beneficios />
        <Footer />
      </div>
    </div>
  );
}
