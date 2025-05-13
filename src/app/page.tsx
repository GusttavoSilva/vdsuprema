import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import FeedbackCarousel from "@/components/FeedbackCarousel";

export default function Home() {
  const services = [
    {
      title: "Janelas de Vidro",
      description:
        "Soluções modernas em vidro temperado para sua residência ou empresa.",
      icon: "🪟",
      image: "/janela.jpg",
    },
    {
      title: "Portas de Vidro",
      description:
        "Soluções modernas em vidro temperado para sua seguraça e privacidade.",
      icon: "🚪",
      image: "/portavidro.jpg",
    },
    {
      title: "Portas de ACM",
      description:
        "Portas em ACM com design contemporâneo e alta durabilidade.",
      icon: "🚪",
      image: "/portaacm.jpg",
    },
    {
      title: "Box para Banheiro",
      description:
        "Box em vidro temperado com diversos acabamentos e modelos personalizados.",
      icon: "🚿",
      image: "/box.jpg",
    },
    {
      title: "Espelhos",
      description:
        "Espelhos sob medida para todos os ambientes com instalação profissional.",
      icon: "🪞",
      image: "/espelho.jpg",
    },
    {
      title: "Manutenção",
      description:
        "Serviços de manutenção e reparo em estruturas de vidro e espelhos.",
      icon: "🛠️",
      image: "",
    },
  ];

  const feedbacks = [
    {
      name: "Gustavo Silva",
      text: "Excelente trabalho! O box do banheiro ficou perfeito e a instalação foi muito profissional.",
      rating: 5,
    },
    {
      name: "João Santos",
      text: "Ótimo atendimento e acabamento impecável nos espelhos da minha academia.",
      rating: 5,
    },
    {
      name: "Ana Oliveira",
      text: "Super recomendo! Pontualidade e qualidade no serviço prestado.",
      rating: 5,
    },
    {
      name: "Carlos Mendes",
      text: "Fiquei impressionado com a qualidade do vidro temperado e o profissionalismo da equipe.",
      rating: 5,
    },
    {
      name: "Patricia Lima",
      text: "A porta de vidro da minha loja ficou linda! Serviço rápido e com ótimo acabamento.",
      rating: 5,
    },
    {
      name: "Roberto Almeida",
      text: "Instalaram os espelhos da minha sala de estar, ficou excepcional! Equipe muito atenciosa.",
      rating: 5,
    },
    {
      name: "Camila Ferreira",
      text: "Transformaram meu banheiro com o box personalizado. Amei o resultado!",
      rating: 5,
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
              backgroundImage: `url('/Inicio.webp')`,
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
            <h2 className="text-3xl text-white font-bold text-center mb-12">
              Nossos Serviços
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  image={service.image}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Depoimentos dos Clientes
            </h2>
            <FeedbackCarousel feedbacks={feedbacks} />
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contato" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
              Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Coluna Esquerda - Endereço */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4 dark:text-white">
                  Localização
                </h3>
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                  <p>Rua 1, Quadra 02, Lote 03</p>
                  <p>Condomínio Jardim das Oliveiras</p>
                  <p>Goiânia - GO</p>
                  <p>CEP: 74484-608</p>
                </div>
              </div>

              {/* Coluna Direita - Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
                    Telefone e Email
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md mb-3 hover:shadow-lg transition-shadow">
                    Telefone:{" "}
                    <a
                      href="https://wa.me/5562981430276"
                      className="font-semibold text-white hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (62) 9.8143-0276
                    </a>
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    Email:{" "}
                    <a
                      href="mailto:vdsuprema2015@gmail.com"
                      className="font-semibold text-white hover:text-blue-500 transition-colors"
                    >
                      vdsuprema2015@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 dark:text-white">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    Segunda a Sábado: 8h às 18h
                  </p>
                </div>
                <a
                  href="https://www.instagram.com/vidracariasuprema2023" // Substitua pelo seu link do Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  Siga-nos no Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5562981430276?text=Olá,%20gostaria%20de%20fazer%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Contato via WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="md:w-8 md:h-8 h-6 w-6  fill-current"
        >
          <path d="M16 2C8.28 2 2 8.28 2 16C2 19.01 2.87 21.82 4.42 24.17L2.71 29.29L8.11 27.67C10.35 29.01 13.08 29.75 16 29.75C23.72 29.75 30 23.47 30 15.75C30 8.03 23.72 2 16 2ZM23.7 20.38C23.41 21.07 22.35 21.65 21.52 21.82C20.93 21.94 20.15 22.02 16.47 20.42C11.95 18.41 9.08 13.82 8.87 13.54C8.67 13.26 7.14 11.18 7.14 9.02C7.14 6.86 8.21 5.85 8.58 5.45C8.89 5.12 9.35 4.98 9.78 4.98C9.93 4.98 10.07 4.99 10.19 5C10.56 5.01 10.74 5.03 10.98 5.69C11.28 6.5 12.09 8.66 12.19 8.88C12.29 9.1 12.39 9.39 12.24 9.67C12.1 9.96 12 10.12 11.78 10.37C11.56 10.62 11.32 10.93 11.13 11.12C10.91 11.34 10.68 11.57 10.94 12C11.2 12.42 12.01 13.73 13.21 14.8C14.77 16.19 16.08 16.61 16.56 16.83C16.93 17 17.37 16.95 17.63 16.66C17.96 16.29 18.37 15.65 18.79 15.02C19.08 14.57 19.45 14.5 19.85 14.63C20.26 14.75 22.39 15.8 22.83 16.02C23.27 16.24 23.56 16.34 23.66 16.52C23.76 16.7 23.76 17.31 23.47 18Z" />
        </svg>
      </a>
    </>
  );
}
