import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  {
    name: 'Adventure',
    path: '#',
    children: [
      { name: 'Safaris', path: '/blog/safaris' },
      { name: 'Events', path: '/blog/events' },
      { name: 'Moon Night Rides', path: '/blog/moon-night-rides' },
      { name: 'Games', path: '/blog/games' },
    ],
  },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md h-20' : 'bg-transparent h-28'}`}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <Link 
          to="/" 
          className="flex-shrink-0 flex items-center h-full py-2" 
          state={{ skipPreloader: true }}
          replace
        >
          <img src="/LOGO.png" alt="Halar Club Logo" className="h-full w-auto object-contain w-20" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 ml-auto">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button
                    className="flex items-center text-sm font-medium uppercase tracking-wider py-2 px-1 text-gray-900 hover:text-primary-600 transition-colors duration-300 group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" />
                  </button>
                  {activeDropdown === item.name && (
                    <div
                      className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md py-2 w-56 border border-gray-100"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-sm text-gray-800 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-300 ${
                              isActive ? 'text-primary-600 bg-gray-50 font-medium' : ''
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wider py-2 px-1 transition-colors duration-300 ${
                      isActive ? 'text-primary-600' : 'text-gray-900 hover:text-primary-600'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} className="text-primary-500" />
              </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 p-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-lg font-medium font-serif tracking-wider uppercase ${isActive ? 'text-primary-500' : 'text-gray-700'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;