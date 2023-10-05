const links = [
  {
    id: 1,
    link: "Why occasonal sync",
  },
  {
    id: 2,
    link: "Event Type",
  },
  {
    id: 3,
    link: "Services",
  },
  {
    id: 4,
    link: "Blog",
  },
];

function NavBar() {
  return (
    <header className="absolute w-full">
      <nav className="flex justify-between items-center py-4 px-8 text-white">
        <h1 className=" text-5xl font-semibold uppercase">
          Occassonal <br />
          <span className="text-yellow-200 ml-[200px]">Sync</span>
        </h1>
        <ul className="flex gap-10 pr-14">
          {links.map((link) => (
            <li
              key={link.id}
              className="font-medium text-base uppercase cursor-pointer"
            >
              {link.link}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
export default NavBar;
