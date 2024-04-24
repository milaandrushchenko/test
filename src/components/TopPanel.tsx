import IconWithText from "./IconWithText";
import UserBalanceBlock from "./UserBalanceBlock";
import usersIcon from "../assets/icons/users.svg";

export default function TopPanel() {
  return (
    <div className="flex justify-between items-center">
      <UserBalanceBlock />
      <IconWithText icon={usersIcon} text="1,274" />
    </div>
  );
}
