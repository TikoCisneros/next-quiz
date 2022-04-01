interface StatProps {
  label: string;
  value: string | number;
  bgColor?: string;
}

const Stat = ({ label, value, bgColor }: StatProps) => {
  return (
    <div className="flex flex-col items-center m-3">
      <span
        className="flex justify-center items-center w-36 h-36 rounded-full text-5xl text-slate-700 font-semibold"
        style={{ backgroundColor: bgColor ?? '#fbbf24' }}
        >
        {value}
      </span>
      <span className="text-2xl mt-4">{label}</span>
    </div>
  );
};

export default Stat;
