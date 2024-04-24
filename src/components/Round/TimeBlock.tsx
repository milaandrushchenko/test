interface TimeBlockProps {
  status: "running" | "registering" | "planned";
  time: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ status, time }) => {
  return (
    <div
      className={`w-[88px] ${
        status == "running"
          ? "bg-green"
          : status == "registering"
          ? "bg-[#FEA836]"
          : "bg-[#808080]"
      } text-center rounded-2xl  font-medium h-[64px]`}
    >
      <span
        className={`text-xs font-bold ${
          status == "registering" ? "text-black" : ""
        } `}
      >
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
      <div
        className={`${
          status == "planned" ? "bg-[#3F3B41]" : "bg-darkGrey"
        }  m-[1px] rounded-[15px] h-[42px] flex flex-col justify-center`}
      >
        <p
          className={`text-xs ${
            status == "running"
              ? "text-[#45D700]"
              : status == "registering"
              ? "text-[#FEA836]"
              : "text-[#858585]"
          }`}
        >
          {status == "running"
            ? "Closes in"
            : status == "registering"
            ? "Starts in"
            : "Starts"}
        </p>
        <p className="font-bold">{time}</p>
      </div>
    </div>
  );
};
export default TimeBlock;
