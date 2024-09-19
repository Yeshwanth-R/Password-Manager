"use client";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import { toast } from "sonner";
import Link from "next/link";

const Body = () => {
  const [show, setShow] = useState(false);
  const [website, setWebsite] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordArray, setPasswordArray] = useState([]);
  const [editProduct, setEditProduct] = useState([]);
  let len;

  useEffect(() => {
    let password = localStorage.getItem("passwords");
    if (password) {
      setPasswordArray(JSON.parse(password));
    }
  }, []);

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied Successfully");
  };

  const savePassword = () => {
    const form = {
      site: website,
      username: userName,
      password: password,
    };

    setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { form, id: uuidv4() }])
    );

    setWebsite("");
    setUserName("");
    setPassword("");

    toast.success("Password Saved Successfully");
  };

  const deleteProduct = (id) => {
    setPasswordArray(passwordArray.filter((item) => item.id !== id));

    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };

  const editPro = (id) => {
    console.log(id);
  };

  const showEye = (
    <div className="cursor-pointer hover:text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-7"
      >
        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        <path
          fillRule="evenodd"
          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  const hideEye = (
    <div className="cursor-pointer hover:text-gray-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-7"
      >
        <path
          fillRule="evenodd"
          d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
          clipRule="evenodd"
        />
        <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
      </svg>
    </div>
  );

  return (
    <>
      <form
        onSubmit={savePassword}
        className="mx-20 mt-10 flex flex-col gap-5 px-10 py-10 rounded-xl"
        style={{ backgroundColor: "rgba(240, 252, 253, 0.5)" }}
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl">
            <span className="font-bold text-green-700">&lt;</span>
            Pass
            <span className="font-bold text-green-700">OP/&gt;</span>
          </h1>
          <p className="text-gray-500 text-lg">Your Own Password Manager</p>
        </div>
        <div className="flex flex-col gap-10 py-10 px-5">
          <div className="flex flex-col gap-3 ">
            {/* <label htmlFor="" className="px-5 text-lg text-gray-400">
              Enter the website Link
            </label> */}
            <input
              required
              value={website}
              onChange={(ev) => {
                setWebsite(ev.target.value);
              }}
              className="border px-4 py-2 border-green-400 rounded-full focus:outline-none shadow-sm"
              type="text"
              placeholder="Enter Website Address"
            />
          </div>
          <div className="flex gap-8">
            <input
              required
              value={userName}
              onChange={(ev) => {
                setUserName(ev.target.value);
              }}
              className="border w-full px-4 py-2 border-green-400 rounded-full focus:outline-none shadow-sm"
              type="text"
              placeholder="Enter Username"
              autoComplete="username"
            />
            <div className="w-full relative">
              <input
                required
                value={password}
                onChange={(ev) => {
                  setPassword(ev.target.value);
                }}
                className="border w-full px-4 py-2 border-green-400 rounded-full focus:outline-none shadow-sm"
                type={show ? "text" : "password"}
                placeholder="Enter Password"
                autoComplete="current-password"
              />
              <span
                onClick={() => {
                  setShow(!show);
                }}
                className="absolute right-2 top-2"
              >
                {show ? hideEye : showEye}
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-green-400 border-2 border-green-900 hover:bg-green-300 flex gap-2 justify-center items-center px-3 py-1 rounded-xl text-lg"
            >
              <lord-icon
                className="font-bold"
                src="https://cdn.lordicon.com/zrkkrrpl.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#000,secondary:#000000"
              ></lord-icon>
              Save password
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-white uppercase bg-green-700">
              <tr>
                <th scope="col" className="px-6 py-3 text-lg text-center">
                  Website URL
                </th>
                <th scope="col" className="px-6 py-3 text-lg text-center">
                  Username
                </th>
                <th scope="col" className="px-6 py-3 text-lg text-center">
                  Password
                </th>
                <th scope="col" className="px-6 py-3 text-lg text-center">
                  <span className="">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {passwordArray &&
                passwordArray.map((pass) => {
                  return (
                    <tr key={pass.id} className="bg-green-100 border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                      >
                        <Link
                          href={pass.form ? pass.form?.site : ""}
                          target="_blank"
                        >
                          {pass.form?.site}
                        </Link>
                      </th>
                      <td className="px-6 py-4 text-center">
                        <div className="flex gap-2 justify-center items-center">
                          <span>{pass.form?.username}</span>
                          <svg
                            onClick={() => {
                              copyText(pass.form?.username);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 hover:text-gray-700 cursor-pointer"
                          >
                            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                            <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex gap-2 justify-center items-center">
                          <span className="flex justify-center text-xl items-center gap-2">
                            * * * * *
                          </span>
                          <svg
                            onClick={() => {
                              copyText(pass.form?.password);
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="size-6 hover:text-gray-700 cursor-pointer"
                          >
                            <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 0 1 3.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0 1 21 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 0 1 7.5 16.125V3.375Z" />
                            <path d="M15 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 17.25 7.5h-1.875A.375.375 0 0 1 15 7.125V5.25ZM4.875 6H6v10.125A3.375 3.375 0 0 0 9.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V7.875C3 6.839 3.84 6 4.875 6Z" />
                          </svg>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center flex justify-around">
                        <button
                          onClick={() => {
                            editPro(pass.id);
                          }}
                          className="font-medium flex gap-2 justify-center items-center text-lg text-blue-600 hover:underline"
                        >
                          {/* <span>Edit</span> */}
                          <lord-icon
                            src="https://cdn.lordicon.com/ghhwiltn.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#515050,secondary:#515050"
                            style={{ width: "35px" }}
                          ></lord-icon>
                        </button>
                        <button
                          onClick={() => {
                            deleteProduct(pass.id);
                          }}
                          type="button"
                          className="font-medium flex gap-2 justify-center items-center text-lg text-red-600 hover:underline"
                        >
                          {/* <span>Delete</span> */}
                          <lord-icon
                            src="https://cdn.lordicon.com/drxwpfop.json"
                            trigger="morph"
                            stroke="bold"
                            state="morph-trash-in"
                            className="w-2"
                            colors="primary:#515050,secondary:#515050"
                            style={{ width: "35px" }}
                          ></lord-icon>
                        </button>
                      </td>
                      {/* <td className="px-6 py-4 text-center"></td> */}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </form>
    </>
  );
};

export default Body;
