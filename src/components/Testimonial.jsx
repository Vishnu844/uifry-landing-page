import Ellipses from "./Ellipses";
import MeshGradient from "./MeshGradient";
import Mockup from "./Mockup";

export default function Testimonial() {
  return (
    <section className="py-10 flex flex-col items-center">
      <div className="mb-12 text-center">
        <p className="font-medium mb-2 tracking-widest text-lg ">TESTIMONIAL</p>
        <h1 className="text-5xl font-bold tracking-tight w-96">
          What Our Users Say About Us?
        </h1>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <div className="relative top-12">
            <img src="/images/Testimonial-Group.png" alt="testimonial-group" />
          </div>
          <MeshGradient styles={"absolute top-52 -z-10 left-12"} />
          <Ellipses styles={"absolute -z-10 bottom-0 rotate-20"} />
        </div>
        <div className="w-106">
          <h3 className="text-3xl font-semibold">
            The Best Financial Accounting App Ever!
          </h3>
          <p className="text-lg font-medium">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <img src="/images/testimonials.png" alt="testimonials" />
          <p className="text-lg font-bold">- Nick Jonas</p>
        </div>
      </div>
    </section>
  );
}
