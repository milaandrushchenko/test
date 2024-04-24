import RoundItem from "./RoundItem";
import roundData from "./config/roundData";

const RoundList = () => {
  return (
    <div className="">
      {roundData.map((round, index) => (
        <div key={index} className="mt-[8px]">
          <RoundItem
            time={round.time}
            status={round.status}
            title={round.title}
            buyIn={round.buyIn}
            rockets={round.rockets}
            prize={round.prize}
          />
        </div>
      ))}
    </div>
  );
};
export default RoundList;
