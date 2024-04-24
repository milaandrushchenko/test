import balanceIcon from "../assets/icons/balance.svg";
import plusIcon from "../assets/icons/plus.svg";
import userPhoto from "../assets/icons/user.svg";

export default function UserBalanceBlock() {
  return (
    <div className="container p-1 pr-[3px] flex justify-between items-end w-[179px] rounded-[16px] bg-[#1F1F1F]">
      <div className="flex items-center gap-2">
        <div className="bg-lightPurple rounded-[12px]">
          <img src={userPhoto} className=" rounded-[12px]" />
        </div>
        <div className="flex gap-1">
          <img src={balanceIcon} />
          <span>15.409</span>
        </div>
      </div>
      <div className="w-[40px] h-[36px] flex justify-center relative">
        <button
          className="absolute w-[32px] h-[32px] rounded-lg flex justify-center items-center z-10"
          style={{
            backgroundImage:
              "radial-gradient(151.56% 151.56% at 0% -20.31%, #E543FF 0%, #832DBF 100%)",
          }}
        >
          <img src={plusIcon} />
        </button>
        <div
          className="absolute bottom-0 w-10 h-8 rounded-lg"
          style={{
            backgroundImage:
              "radial-gradient(151.56% 151.56% at 0% -20.31%, #E543FF 0%, #832DBF 100%)",
            filter: "blur(40px)",
          }}
        ></div>
      </div>
    </div>
  );
}
