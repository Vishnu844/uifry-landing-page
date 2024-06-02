import Ellipses from "./Ellipses";
import MeshGradient from "./MeshGradient";

export default function Mockup({ styles, image }) {
  return (
    <div className="relative">
      <div className="rotate-15 relative top-12">
        <img src={image} alt="iphone" />
      </div>
      <MeshGradient styles={"absolute top-96 -z-10"} />
      <Ellipses styles={"absolute -z-10 bottom-16 rotate-20"} />
    </div>
  );
}
