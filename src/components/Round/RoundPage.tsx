import RoundList from "./RoundList";
import RoundsFilter from "./RoundsFilter";
import RoundsSubTitle from "./RoundsSubTitle";

const RoundPage = () => {
  const handleSelectLimit = (limit: string) => {
    console.log("Selected limit:", limit);
  };

  return (
    <div className="mt-[25px]">
      <RoundsFilter onSelectLimit={handleSelectLimit} />
      <RoundsSubTitle />
      <RoundList />
    </div>
  );
};
export default RoundPage;
