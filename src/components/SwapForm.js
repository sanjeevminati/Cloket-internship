import React, { PureComponent } from "react";
import imageSrc from "./img/form.png";
import imageSrc2 from "./img/se1.png";

export class SwapForm extends PureComponent {
  render() {
    return (
      <>
        <main className=" text-center bg-white h-auto flex justify-center items-center flex-col sm:flex sm:justify-center sm:items-center sm:flex-col ">
          <div className=" flex justify-start  items-center pt-10 px-96 divide-y">
            <h1 className="sm:text-xs sm:w-600  xl:text-2xl  font-bold underline text-black ">
              Page 1/2
            </h1>
          </div>
          <div>
            <label className="text-black sm:text-base xl:text-xl flex justify-start items-center cursor-pointer  pt-10 px-96">
              Email:
            </label>
            <input
              type="text"
              className="xl:w-96 xl:hover:w-600  sm:w-auto xl:p-1 sm:p-1 text-black text-1xl flex justify-start items-center mt-1 mx-96 rounded-md border-2 border-black"
            />
          </div>
          <div>
            <label className="text-black  cursor-pointer sm:text-base xl:text-xl flex justify-start items-center  pt-10 px-96">
              First Name:
            </label>
            <input
              type="text"
              className="xl:w-96 xl:hover:w-500  sm:w-auto xl:p-1 sm:p-1  text-black text-1xl flex justify-start items-center mt-1 mx-96 rounded-md border-2 border-black"
            />
          </div>
          <div>
            <label className="text-black sm:text-base xl:text-xl  cursor-pointer flex justify-start items-center  pt-10 px-96">
              Last Name:
            </label>
            <input
              type="text"
              className="xl:w-96 xl:hover:w-500 sm:w-auto xl:p-1 sm:p-1 text-black text-1xl flex justify-start items-center mt-1 mx-96 rounded-md border-2 border-black"
            />
          </div>
          <div>
            <label className="text-black sm:text-base xl:text-xl cursor-pointer flex justify-start items-center  pt-10 px-96">
              Address:
            </label>
            <input
              type="text"
              className="xl:w-96 xl:hover:w-500 sm:w-auto xl:p-10 sm:p-3 text-black text-1xl flex justify-start items-center mt-1 mx-96 rounded-md border-2 border-black"
            />
          </div>
          <div>
            <label className="text-black sm:text-base xl:text-xl flex justify-start items-center  pt-10 px-96">
              Pin Code:
            </label>
            <input
              type="number"
              className="xl:w-96 xl:hover:w-500 sm:w-auto  xl:p-1 sm:p-1 text-black text-1xl flex justify-start items-center mt-1 mx-96 rounded-md border-2 border-black"
            />
          </div>
          <div>
            <label className="text-black sm:text-base xl:text-xl flex justify-start items-center  pt-10 px-96">
              Phone number:
            </label>
            <input
              type="number"
              className="xl:w-96 sm:w-auto xl:hover:w-500 xl:p-1 sm:p-1 text-black text-1xl flex justify-start items-center mt-1 mx-96  rounded-md border-2 border-black"
            />
          </div>
          <div className="pb-6">
            <label
              className="text-black sm:text-xs xl:text-xl flex 
            justify-start items-center mb-3 pt-10  xl:px-96 sm:px-24"
            >
              Upload pictures of the apparel you want to put up!
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="xl:w-96  sm:w-43 border border-gray-300 px-3 py-2 
              rounded-md"
            />
            {/* <button
              type="submit"
              className="bg-Cloket mx-2 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded sm:mx-3 
              sm:w-24 "
            >
              Upload
            </button> */}
          </div>
          <div>
            {/* {w-3/5 flex justify-center items-center mx-auto sm:w-1/2 lg:w-96 mt-4} */}
            <img
              src={imageSrc}
              className="w-3/5 flex justify-center items-center mx-auto sm:w-1/2  mt-4sm:w-1/2 lg:w-96"
            ></img>
          </div>

          <div>
            <label
              className="text-black sm:text-xs xl:text-xl flex 
            justify-start items-center  pt-10  xl:px-96 sm:px-24"
            >
              What is the category of clothing you want to SWAP?
            </label>
            <select
              className="border border-black rounded-md h-26 px-2 w-96 
            mt-5 pt-2 pb-2"
            >
              <option value="">Select a category</option>
              <option value="Casual Western Wear">Casual Western Wear</option>
              <option value="Casual Traditional Wear">
                Casual Traditional Wear
              </option>
              <option value="Designer Western Wear">
                Designer Western Wear
              </option>
              <option value="Designer Traditional Wear">
                Designer Traditional Wear
              </option>
              <option value="Designer Traditional Formal Wear">
                Designer Traditional Formal Wear
              </option>
              <option value="Non-Designer Traditional Formal Wear">
                Non-Designer Traditional Formal Wear
              </option>
              <option value="Designer Formal Western Wear">
                Designer Formal Western Wear
              </option>
              <option value="Non-Designer Formal Western Wear">
                Non-Designer Formal Western Wear
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              className="text-black sm:text-xs xl:text-xl flex 
            justify-start items-center  pt-10  xl:px-96 sm:px-24"
            >
              What is the category of clothing you want to SWAP?
            </label>
            <select
              className="border border-black rounded-md h-26 px-2 w-96 
            mt-5 pt-2 pb-2"
            >
              <option value="">Select a category</option>
              <option value="Casual Western Wear">Casual Western Wear</option>
              <option value="Casual Traditional Wear">
                Casual Traditional Wear
              </option>
              <option value="Designer Western Wear">
                Designer Western Wear
              </option>
              <option value="Designer Traditional Wear">
                Designer Traditional Wear
              </option>
              <option value="Designer Traditional Formal Wear">
                Designer Traditional Formal Wear
              </option>
              <option value="Non-Designer Traditional Formal Wear">
                Non-Designer Traditional Formal Wear
              </option>
              <option value="Designer Formal Western Wear">
                Designer Formal Western Wear
              </option>
              <option value="Non-Designer Formal Western Wear">
                Non-Designer Formal Western Wear
              </option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label
              className="text-black sm:text-xs xl:text-xl flex 
            justify-start items-center  pt-10  xl:px-96 sm:px-24"
            >
              What is the category of clothing you want to SWAP?
            </label>
            <select
              className="border border-black rounded-md h-26 px-2 w-96 
            mt-5 pt-2 pb-2"
            >
              <option value="">Select a category</option>
              <option value="Casual Western Wear">Casual Western Wear</option>
              <option value="Casual Traditional Wear">
                Casual Traditional Wear
              </option>
              <option value="Designer Western Wear">
                Designer Western Wear
              </option>
              <option value="Designer Traditional Wear">
                Designer Traditional Wear
              </option>
              <option value="Designer Traditional Formal Wear">
                Designer Traditional Formal Wear
              </option>
              <option value="Non-Designer Traditional Formal Wear">
                Non-Designer Traditional Formal Wear
              </option>
              <option value="Designer Formal Western Wear">
                Designer Formal Western Wear
              </option>
              <option value="Non-Designer Formal Western Wear">
                Non-Designer Formal Western Wear
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            {/* D:\Practice-react\form\src\img\form.png  src\img\form.png*/}
            <img
              src={imageSrc2}
              className="w-3/5 flex justify-center items-center mx-auto sm:w-1/2 lg:w-96 mt-4"
            ></img>
          </div>
        </main>
        <div className=" flex justify-center items-center m-10 gap-3 ">
          <button className="bg-Cloket max-lg:w-36 sm:w-28 h-auto xl:text-xl sm:text-xs text-white  p-3 rounded-sm xl:hover:w-60 ">
            Back
          </button>
          <button className="bg-Cloket max-lg:w-36 sm:w-24 h-auto xl:text-xl sm:text-xs text-white  p-3   rounded-sm xl:hover:w-60 ">
            Next
          </button>
        </div>
      </>
    );
  }
}

export default SwapForm;
