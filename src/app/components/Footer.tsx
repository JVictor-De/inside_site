export function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-lime-400 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-emerald-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 21h16.5M4.5 3h15M4.5 3l7.5 7.5L19.5 3"
                />
              </svg>
            </div>
            <span className="text-xl font-bold">Insaranc.</span>
          </div>
          <p className="text-sm text-emerald-200">
            Mantemos os mais altos padrões de integridade em todas as nossas ações, garantindo que nossos clientes recebam serviços honestos e transparentes.
          </p>
          <div className="flex gap-4 mt-6">
            {['facebook', 'twitter', 'linkedin', 'github'].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-emerald-800 rounded-full hover:bg-emerald-700 transition"
              >
                <i className={`fab fa-${icon} text-white`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore mais</h4>
          <ul className="space-y-2 text-sm text-emerald-200">
            {[
              'Plano de saúde',
              'Seguro de viagem',
              'Seguros industriais',
              'Seguro de carro',
              'Seguro de vida',
              'Seguro residencial'
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-white transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contate-nos</h4>
          <ul className="space-y-4 text-sm text-emerald-200">
            <li>
              <span className="block font-medium text-white">Horas</span>
              companyinfo@gmail.com
            </li>
            <li>
              <span className="block font-medium text-white">Ligue para nós:</span>
              (530) 215-3112
            </li>
            <li>
              <span className="block font-medium text-white">Localização:</span>
              905 Locust Street, Redding, CA 96001
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}