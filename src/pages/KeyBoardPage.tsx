import { useNavigate } from "react-router-dom";

const KeyBoardPage = () => {
  const keys = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];
  const navigate = useNavigate();
  return (
    <div className="bg-[#292a2d] body-font min-h-screen p-4">
      <button
        className="bg-[#6268e4] mt-5 text-xl text-center p-2 w-40 rounded-md hover:bg-violet-600 "
        onClick={() => navigate("/")}
      >
        Go Back
      </button>
      <div className="  flex justify-center mt-4 w-full  ">
        <div className="  flex-col w-3/4 ">
          <div className="bg-[#c5baed]  h-64 mb-3"></div>
          {keys.map((row: string[]) => {
            return (
              <div className="flex w-full justify-center">
                {row.map((key: string) => {
                  return (
                    <div className="bg-[#c5baed] m-2 w-14 text-center h-14 text-xl align-middle p-2 hover:bg-violet-600">
                      {key}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default KeyBoardPage;
