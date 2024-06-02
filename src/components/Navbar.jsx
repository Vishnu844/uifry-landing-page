"use client";

export default function Navbar() {
  const navItems = [ "AboutUs", "Pricing", "Features"];
  return (
    <nav className="min-w-full flex justify-between items-center">
      <div className="flex items-center gap-8 flex-wrap">
        <div>
          <img src="/images/logo.png" alt="logo" width={117} height={34} />
        </div>
        <div>
          <ul className="list-none flex gap-6 font-medium text-xl">
            <li className="first:text-p-orange font-bold">Home</li>
            {navItems.map((item, i) => {
              return (
                <li key={i} >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>
        <button className="w-44 h-14 bg-black text-white font-medium text-lg rounded">
          Download
        </button>
      </div>
    </nav>
  );
}
