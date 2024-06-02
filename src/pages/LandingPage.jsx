import Advantages from "@/components/Advantages";
import Ellipses from "@/components/Ellipses";
import Faq from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import MeshGradient from "@/components/MeshGradient";
import Navbar from "@/components/Navbar";
import Star from "@/components/Star";
import Testimonial from "@/components/Testimonial";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <section className="flex">
        <div className="max-w-xl">
          <h1 className="font-bold text-6xl mt-16 mb-6">
            Make The Best Financial Decisions
          </h1>
          <MeshGradient styles={"relative bottom-44 left-64 -z-10"} />
          <p className="font-medium text-lg my-6">
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className="w-96 flex justify-between items-center">
            <button className="w-44 h-14 bg-black text-white font-medium text-lg rounded">
              Get Started
              <img className="inline ml-2" src="/images/arrow-right.png" />
            </button>
            <button className="font-medium text-lg rounded">
              <img className="inline mr-2" src="/images/play.png" />
              Watch Video
            </button>
          </div>
          <Star />
          {/* ------------ */}
          <div className="flex items-end max-w-xl h-96 my-4 relative">
            <h1 className="text-9xl font-bold -rotate-30">A</h1>
            <div className="w-106 h-24 flex bg-black justify-between p-4 rounded-e-md absolute bottom-42 left-4 -rotate-33">
              <div className="flex items-center">
                <img src="/images/trophy.png" alt="trophy" />
                <div className="text-white">
                  <p className="text-xs font-semibold">Achievements</p>
                  <span className="text-xs font-medium">
                    Best Finance App On Playstore
                  </span>
                </div>
              </div>
              <div>
                <img src="/images/Line.png" alt="line" />
              </div>
              <div className="flex items-center">
                <img src="/images/cash.png" alt="cash" />
                <div className="text-white">
                  <p className="text-xs font-semibold">Finance</p>
                  <span className="text-xs font-medium">
                    Most Popular Accounting App
                  </span>
                </div>
              </div>
            </div>

            <div className="w-80 h-16 bg-p-orange absolute bottom-44 left-69 p-4 -z-10 -rotate-60">
              <span className="text-xs font-semibold">
                make the best financial decisions
              </span>
            </div>

            <div className="w-64 h-16 bg-p-orange flex gap-4 p-4 justify-end absolute left-96 bottom-13 -z-20">
              <div className="flex gap-4">
                <img src="/images/Line.png" alt="line" />
                <img src="/images/star.png" alt="star" />
                <img src="/images/Line.png" alt="line" />
              </div>
              <div className="text-xs w-fit">
                <p className="font-semibold">Ulfry Premium</p>
                <p className="font-medium">Free Trial</p>
              </div>
            </div>
          </div>
        </div>
        {/* ------------ */}
        <div className="relative">
          <div className="relative z-30">
            <img
              className="relative top-44 left-32"
              src="/images/iPhoneFront.png"
              alt="iPhone1"
            />
            <img
              className="absolute top-32 bottom-0 left-14 z-0"
              src="/images/iPhoneFront-2.png"
              alt="iPhone2"
            />
            <img
              className="absolute top-8 z-2 bottom-0 right-16"
              src="/images/iPhoneFront-3.png"
              alt="iPhone3"
            />
          </div>
          <MeshGradient styles={"absolute z-20 left-24 bottom-72"} />
          <Ellipses styles={"absolute -z-10 bottom-16 rotate-20"} />
        </div>
        <Star />
      </section>

      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
}
