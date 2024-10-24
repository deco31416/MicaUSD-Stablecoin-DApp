import logo from '../../public/deco31416.png'; // Asegúrate de que el logo esté en la carpeta correcta

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Logo a la izquierda */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Deco31416 Logo" className="w-12 h-12 mb-2" />
            
          </div>
  
          {/* Texto centrado */}
          <div className="text-center">
          <a
              href="https://www.deco31416.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 font-bold text-2xl hover:text-white transition-colors duration-300"
            >
              By Deco31416
            </a>
            <p className="font-light text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
  
          {/* Contact Links a la derecha */}
          <ul className="flex justify-center md:justify-end space-x-6 text-lg">
            <li>
              <a
                href="https://www.deco31416.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-white transition-colors duration-300"
              >
                Website
              </a>
            </li>
            <li>
              <a
                href="https://github.com/deco31416"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-white transition-colors duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/deco31416"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };
  
  export default Footer;