import "./App.css";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import TopPanel from "./components/TopPanel";
import RoundPage from "./components/Round/RoundPage";

export default function App() {
  return (
    <div className="relative container px-3.5 pt-3 bg-black min-h-screen text-sm overflow-hidden">
      <div className="relative  z-40">
        <TopPanel />
        <RoundPage />
        <BottomMenu />
      </div>

      <div
        className="fixed top-[23%] left-1/2 transform -translate-x-1/2   w-[390%] h-[226%] rounded-[50%] z-0 opacity-50"
        style={{
          background:
            "linear-gradient(180deg, rgba(167, 109, 203, 0.53) 0%, #7724AA 50%)",
          filter: "blur(120px)",
        }}
      ></div>
      <div
        className="fixed left-[6.5%] bottom-[7%] w-[87%] h-[42%] rounded-[50%] z-1
opacity-75"
        style={{
          background:
            "linear-gradient(180deg, rgba(179, 136, 204, 0.52) 0%, #BA93D2 100%)",
          filter: "blur(150px)",
        }}
      ></div>
    </div>
  );
}
