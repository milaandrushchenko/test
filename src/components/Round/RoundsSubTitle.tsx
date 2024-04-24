import style from "./Round.module.css";

const RoundsSubTitle = () => {
  interface Item {
    title: string;
    width: string;
  }

  const items: Item[] = [
    { title: "Buy-in", width: "94px" },
    { title: "Rockets", width: "70px" },
    { title: "Prize", width: "80px" },
  ];

  return (
    <div className="relative flex justify-end text-[#FFFFFF61] text-[11px] right-9">
      {items.map(({ title, width }) => (
        <div key={title} className={`flex`} style={{ width: width }}>
          <div
            className={`relative top-[9px] w-4 h-[1px] ${style.borderSubTitle}`}
          ></div>
          <button key={title}>
            {title.charAt(0).toUpperCase() + title.slice(1)}{" "}
          </button>
        </div>
      ))}
    </div>
  );
};
export default RoundsSubTitle;
