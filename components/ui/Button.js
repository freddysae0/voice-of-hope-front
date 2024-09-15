const defaultClass =
  " bg-primary text-metal p-2 rounded-lg text-xl font-semibold";
export default function Button({ children, className }) {
  return (
    <button className={className ? className + defaultClass : defaultClass}>
      {children}
    </button>
  );
}
const style = {};
