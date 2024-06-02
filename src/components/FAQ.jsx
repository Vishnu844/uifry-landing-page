import Star from "./Star";

export default function Faq() {
  return (
    <section className="py-10">
      <div className="flex">
        <div className="w-96">
          <p className="text-p-orange text-lg font-medium mb-2 tracking-widest">
            FAQ
          </p>
          <h1 className="text-5xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
        </div>
        <Star />
      </div>
      <div className="grid grid-cols-2 my-10">
        {[...Array(6)].map((_, i) => {
          return (
            <div
              key={i}
              className={
                i == 0 || i == 3 || i == 4
                  ? "bg-p-orange text-white p-5 rounded-md"
                  : "p-5"
              }
            >
              <h3 className="text-3xl font-semibold">
                The Best Financial Accounting App Ever!
              </h3>
              <p className="text-lg font-medium">
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
