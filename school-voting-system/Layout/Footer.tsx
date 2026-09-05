
const Footer = () => {
  return (
    <footer className="border-t bg-gray-900 px-4 py-6 text-center text-sm text-gray-300">
      <p>
        © {new Date().getFullYear()} School Voting Platform. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;