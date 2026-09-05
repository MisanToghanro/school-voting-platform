import MobileHeader from "./ModileHeader";

const Header = () => {

   
  return (
    <header className="border-b bg-white relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo / Brand */}
        <div>
          <a href="/" className="text-xl font-bold">
            School Voting Platform
          </a>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="/"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </a>

          <a
            href="/Login/admin"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Admin
          </a>

          <a
            href="/candidate"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Candidate
          </a>

          <a
            href="/student"
            className="font-medium text-gray-700 transition hover:text-blue-600"
          >
            Student
          </a>
        </div>

        <MobileHeader/>
      </nav>
    </header>
  );
};

export default Header;