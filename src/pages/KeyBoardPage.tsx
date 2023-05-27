import { useNavigate } from "react-router-dom";

const KeyBoardPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#292a2d] body-font min-h-screen flex justify-center">
      <div className="p-5">
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    </div>
  );
};

export default KeyBoardPage;
