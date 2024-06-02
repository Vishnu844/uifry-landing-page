export default function Ellipses({styles}) {
  return (
    <div className={styles}>
      <span className="relative block w-96 h-128 rounded-ellipse border border-black"></span>
      <span className="absolute block w-96 h-128 rounded-ellipse border border-black bottom-0 left-8"></span>
      <span className="absolute block w-96 h-128 rounded-ellipse border border-black bottom-0 left-16"></span>
    </div>
  );
}
