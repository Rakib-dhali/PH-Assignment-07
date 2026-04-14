type DotProps = {
  color: string;
  type: string;
};

const Dot = ({ color, type }: DotProps) => {
  return (
    <div className="flex justify-center items-center gap-2 ">
      <div style={{backgroundColor: color}} className=" h-2 w-2 rounded-full`"></div>
      <p className="text-sm leading-5 text-[#64748B]">{type}</p>
    </div>
  );
};

export default Dot;
