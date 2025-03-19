// components/Header.js
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Sale Page</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-400">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400">Services</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;