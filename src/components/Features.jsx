import Mockup from "./Mockup";

export default function Features() {
  const features = [
    {
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
      image: "/images/four-point-star.png",
    },
    {
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
      image: "/images/polygon.png",
      altText: "polygon",
    },
    {
      title: "Budgeting Intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor",
      image: "/images/cube.png",
      altText: "cube",
    },
  ];
  return (
    <section className="flex py-10 items-center">
      <Mockup image={"/images/iPhoneFront-3.png"} />
      <div className="w-116 p-10 flex flex-col gap-6">
        <div>
          <p className="text-p-orange text-lg font-medium mb-2 tracking-widest">FEATURES</p>
          <h3 className="text-5xl font-bold tracking-tight">Uifry Premium</h3>
        </div>
        {features.map((feature, i) => {
          return (
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <img src={feature.image} alt={feature.altText} />
                <p className="text-lg font-semibold">{feature.title}</p>
              </div>
              <p className="font-medium">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
