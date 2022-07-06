import { AiOutlinePlus } from "react-icons/ai";

const Payment = () => {
  return (
    <div className="flex h-screen items-center justify-start mt-32 max-w-4xl m-auto flex-col">
      <span className="my-5 text-[#4E4E4E]">Live</span>

      <span className="border-2 rounded-sm px-8 py-2 text-[#4E4E4E] mb-12">
        YOUR CODE: 11
      </span>

      <div className="flex w-full gap-10 items-end">
        <div>
          Payment
          <label htmlFor="">
            <input
              type="text"
              placeholder="Payment"
              className="border-2 rounded-sm py-3 px-3 block mt-2"
            />
          </label>
        </div>

        <div>
          Ammount
          <label htmlFor="">
            <input
              type="text"
              placeholder="Ammount"
              className="border-2 rounded-sm py-3 px-3 block mt-2"
            />
          </label>
        </div>

        <button className="bg-[#8A9DA4] w-52 rounded-sm h-[50px] text-white flex items-center justify-center gap-5">
          <AiOutlinePlus size={20} color={"#fff"} /> ADD
        </button>
      </div>

      <table className="table-fixed border-collapse w-full max-w-4xl mt-10">
        <tr>
          <th>Name</th>
          <th>Ammount</th>
          <th>Code</th>
          <th>Grid</th>
        </tr>
        <tr>
          <td>Payment 1</td>
          <td>01</td>
          <td>02</td>
          <td>03</td>
        </tr>
      </table>
    </div>
  );
};

export default Payment;
