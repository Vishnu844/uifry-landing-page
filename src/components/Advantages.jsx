import Mockup from "./Mockup";
import Star from "./Star";

export default function Advantages() {
  return (
    <section>
      <div className="flex py-10 items-center">
        <div className="w-106 flex flex-col gap-6 p-4">
          <div>
            <p className="text-p-orange text-lg font-medium mb-2 tracking-widest">
              ADVANTAGES
            </p>
            <h1 className="text-5xl font-bold tracking-tight">
              Why choose uifry?
            </h1>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/images/bell.png" alt="bell" width={40} height={40} />
            <p className="text-3xl font-semibold">Clever Notifications</p>
          </div>
          <p className="text-lg font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
        <Mockup image={"/images/iPhoneFront-2.png"} />
      </div>

      <div className="flex justify-center">
        <Star />
      </div>

      <div className="flex py-10 items-center">
        <Mockup image={"/images/iPhoneFront.png"} />
        <div className="w-106 flex flex-col gap-6 p-4">
          <div className="flex gap-2 items-center">
            <img
              src="/images/solid-star.png"
              alt="solid-star"
              width={40}
              height={40}
            />
            <p className="text-3xl font-semibold">Fully Customizable</p>
          </div>
          <p className="text-lg font-medium">
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </p>
        </div>
      </div>
    </section>
  );
}
