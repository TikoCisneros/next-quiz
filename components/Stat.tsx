interface StatProps {
  label: string;
  value: string | number;
  bgColor?: string;
}

const Stat = ({ label, value, bgColor }: StatProps) => {
  return (
    <div className="flex flex-col items-center m-3">
      <span
        className="flex justify-center items-center w-28 h-28 rounded-full text-4xl text-slate-700 font-semibold"
        style={{ backgroundColor: bgColor ?? '#fbbf24' }}
        >
        {value}
      </span>
      <span className="text-xl">{label}</span>
    </div>
  );
};

export default Stat;
