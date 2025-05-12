import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";

export const metadata = {
  title: "VD Suprema - Vidraçaria",
  description: "Soluções em vidros e espelhos com qualidade e excelência",
};

export default function Home() {
  const services = [
    {
      title: "Box para Banheiro",
      description: "Box em vidro temperado com diversos acabamentos e modelos.",
      icon: "🚿",
    },
    {
      title: "Espelhos",
      description: "Espelhos sob medida para sua casa ou estabelecimento.",
      icon: "🪞",
    },
    {
      title: "Vidros Temperados",
      description: "Vidros temperados para portas, janelas e divisórias.",
      icon: "🏗️",
    },
    {
      title: "Espelhos",
      description: "Espelhos sob medida para sua casa ou estabelecimento.",
      icon: "🪞",
    },
    {
      title: "Vidros Temperados",
      description: "Vidros temperados para portas, janelas e divisórias.",
      icon: "🏗️",
    },
    {
      title: "Espelhos",
      description: "Espelhos sob medida para sua casa ou estabelecimento.",
      icon: "🪞",
    },
    {
      title: "Vidros Temperados",
      description: "Vidros temperados para portas, janelas e divisórias.",
      icon: "🏗️",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section
          id="inicio"
          className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
        >
          {/* Imagem de fundo */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/faixada.webp')`,
            }}
          />
          {/* Overlay escuro com gradiente*/}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
          {/* Conteúdo */}
          <div className="relative z-10 text-center px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md animate-fade-in-up">
              Soluções em Vidros e Espelhos
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 animate-fade-in-up delay-100">
              Qualidade e excelência em cada projeto
            </p>
          </div>
        </section>

        <section id="sobre" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
              Nossa História
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Desde 2010, a VD Suprema tem se dedicado a trazer soluções
                inovadoras em vidros e espelhos para nossos clientes. Com mais
                de uma década de experiência, construímos nossa reputação
                baseada na excelência do atendimento e qualidade dos materiais
                utilizados. Nossa equipe altamente qualificada está sempre
                pronta para transformar seus projetos em realidade, combinando
                expertise técnica com um olhar atento aos detalhes.
              </p>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Entre em Contato
            </h2>
            {/* Adicione formulário de contato aqui */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
