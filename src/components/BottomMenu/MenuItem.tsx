import style from "./BottomMenu.module.css";

interface MenuItemProps {
  title: string;
  icon: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-center w-[69px] " + style.itemBorder
      }
    >
      <img src={`/${icon}.svg`} alt={icon} className="w-[16px]" />
      <p className="text-[11px] leading-[20px]">{title}</p>
    </div>
  );
};
export default MenuItem;
