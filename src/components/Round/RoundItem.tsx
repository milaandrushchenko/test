import IconWithText from "../IconWithText";
import TimeBlock from "./TimeBlock";

import style from "./Round.module.css";

import buyInIcon from "../../assets/icons/buy-in.svg";
import rocketIcon from "../../assets/icons/rocket-white.svg";
import prizeIcon from "../../assets/icons/prize.svg";

interface RoundItemProps {
  status: "running" | "registering" | "planned";
  title: string;
  buyIn: string;
  rockets: number;
  prize: string;
  time: string;
}

const RoundItem: React.FC<RoundItemProps> = ({
  status,
  title,
  buyIn,
  rockets,
  prize,
  time,
}) => {
  return (
    <div
      className={
        "flex gap-3 items-center h-[64px] rounded-2xl " + style["round-item"]
      }
    >
      <TimeBlock time={time} status={status} />
      <div>
        <p className="pb-3">{title}</p>
        <div className="flex gap-8">
          <IconWithText icon={buyInIcon} text={buyIn} style="font-bold" />
          <IconWithText
            icon={rocketIcon}
            text={rockets.toString()}
            style="font-bold"
          />
          <IconWithText icon={prizeIcon} text={prize} style="font-bold" />
        </div>
      </div>
    </div>
  );
};
export default RoundItem;
