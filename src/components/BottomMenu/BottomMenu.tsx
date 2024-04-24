import { menuItems } from "./configs/MenuItems";
import MenuItem from "./MenuItem";

const BottomMenu = () => {
  return (
    <div
      className="p-4 fixed  left-0 right-0 bottom-0"
      style={{
        background:
          "linear-gradient(0deg, #482D59 0%, rgba(72, 45, 89, 0.8) 59.93%, rgba(72, 45, 89, 0) 100%)",
      }}
    >
      <div className=" relative flex  font-medium rounded-[16px]  py-[12px] justify-center">
        <div className=" z-40 flex">
          {menuItems.map((item) => (
            <MenuItem key={item.title} title={item.title} icon={item.icon} />
          ))}
        </div>
        <div
          className="absolute h-full w-full top-0  font-medium rounded-[16px]  py-[12px] justify-center z-0"
          style={{
            background: " rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(20px)",
          }}
        ></div>
      </div>
    </div>
  );
};
export default BottomMenu;
