export default function MeshGradient({ styles }) {
  return (
    <div className={styles}>
      <span className="block w-52 h-52 opacity-50 rounded-ellipse absolute bg-p-orange blur-md"></span>
      <span className="block w-52 h-52 opacity-50 rounded-ellipse absolute -z-10 bg-p-yellow blur-xl"></span>
    </div>
  );
}
