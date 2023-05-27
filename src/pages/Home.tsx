import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className=" bg-[#292a2d] body-font min-h-screen flex justify-center">
      <div className="p-5">
        <h2 className="text-[#6268e4] text-5xl">Pick a Song:</h2>
        <ul>
          <li>
            <button
              className="bg-[#6268e4] mt-5 text-3xl text-center p-2 w-60 rounded-md hover:bg-violet-600 "
              onClick={() => navigate("/keyboard")}
            >
              Song 1
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
