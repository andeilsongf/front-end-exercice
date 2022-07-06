import { BsClockHistory } from "react-icons/bs";

const Generator = () => {
  const numbersPattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const lettersPattern = [
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
  ];

  return (
    <div className="flex h-screen items-center justify-center max-w-4xl m-auto flex-col">
      <div className="flex flex-row justify-between w-full items-end">
        <div>
          <label htmlFor="">
            Character
            <input
              type="text"
              placeholder="Character"
              className="block border-2 p-2 rounded-sm mt-2 w-28"
            />
          </label>
        </div>
        <BsClockHistory size={60} color={"#8A9DA4"} />
        <button className="bg-[#8A9DA4] text-white w-28 py-3 rounded-sm">
          Generate
        </button>
      </div>

      <table className="table-fixed border-collapse w-full max-w-4xl mt-10">
        <tbody>
          <tr>
            <td></td>
            {numbersPattern.map((numbers) => (
              <td>{numbers}</td>
            ))}
          </tr>
        </tbody>

        {numbersPattern.map((numbers) => (
          <tbody>
            <tr>
              <td>{numbers}</td>
              {lettersPattern.map((letterPattern, letter) => (
                <td>{letterPattern[letter]}</td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>

      <span className="my-5 text-[#4E4E4E]">Live</span>

      <span className="border-2 rounded-sm px-8 py-2 text-[#4E4E4E]">YOUR CODE: 11</span>

    </div>
  );
};

export default Generator;
