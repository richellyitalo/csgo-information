const Header = () => {
  return (
    <>
      <h1 className="mb-0 text-yellow-800">
        <span className="bg-slate-700 text-white px-1 rounded-sm">
          <span className="text-yellow-300">CSGO</span> Information
        </span>{' '}
        <a
          href="https://github.com/richellyitalo?tab=repositories&q=csgo-information"
          rel="noreferrer"
          target="_blank"
          className="text-sm text-gray-600 hover:text-yellow-600 hover:no-underline"
        >
          by @richellyitalo
        </a>
      </h1>
      <hr className="my-4" />
    </>
  );
};

export default Header;
