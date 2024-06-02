export default function Footer() {
  const FooterLinks = [
    { title: "Links", links: ["Home", "About Us", "Bookings", "Blog"] },
    {
      title: "Legal",
      links: ["Terms Of Use", "Privacy Policy", "Cookie Policy"],
    },
    { title: "Product", links: ["Take Tour", "Live Chat", "Reviews"] },
    {
      title: "Newsletter",
      links: ["Stay Up To Date"],
    },
  ];
  return (
    <footer className="w-full">
      <div className="flex justify-between tracking-tight  py-10">
        <div className="flex flex-col gap-2 items-center">
          <img src="/images/logo.png" alt="logo" />
          <div>
            <img className="inline" src="/images/message.png" alt="message" />
            <span className="text-base font-medium">Help@Frybix.com</span>
          </div>
          <div>
            <img className="inline" src="/images/phone.png" alt="phone" />
            <span className="text-base font-medium">+1 234 456 678 89</span>
          </div>
        </div>
        {FooterLinks.map((Footer, i) => {
          return (
            <div key={i}>
              <h3 className="text-3xl font-medium mb-3">{Footer.title}</h3>
              <ul className="list-none">
                {Footer.links.map((link, i) => {
                  if (Footer.title == "Newsletter") {
                    return (
                      <div>
                        <li key={i} className="text-base font-medium my-1">
                          {link}
                        </li>
                        <div className="flex w-96">
                          <input
                            type="text"
                            placeholder="Your Email"
                            className="outline-none"
                          />
                          <button className="w-44 h-14 bg-black text-white font-medium text-lg rounded">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <li key={i} className="text-base font-medium my-1">
                        {link}
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="w-full p-6 text-center border-t-2">
        <span className="text-base font-medium">
          Copyright 2022 uifry.com all rights reserved
        </span>
      </div>
    </footer>
  );
}
