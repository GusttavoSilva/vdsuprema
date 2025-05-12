export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VD Suprema</h3>
            <p className="text-gray-300">
              Soluções em vidros e espelhos para sua casa ou empresa.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="text-gray-300">Telefone: (XX) XXXX-XXXX</p>
            <p className="text-gray-300">Email: contato@vdsuprema.com</p>
            <p className="text-gray-300">
              Endereço: Sua Rua, Número - Cidade/UF
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Funcionamento</h3>
            <p className="text-gray-300">Segunda a Sexta: 8h às 18h</p>
            <p className="text-gray-300">Sábado: 8h às 12h</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VD Suprema. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
