import React, { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { toast } from "react-toastify";
import { authRequest } from "../../actions";

export default function ProfileForm() {
  // const [isLoginPage, setIsLoginPage] = useState(true);
  // const [error, setError] = useState("");
  const { user } = useContext(GlobalContext);

  console.log("user, ", user)
  
  const initialValues = {
    user_name: "",
    user_email: "",
    user_password: "",
    confirm_password: ""
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }
  const [values, setValues] = useState(initialValues);
  
  // async function handleSubmit(e) {
  //   try {
  //     e.preventDefault();
  //     const path = isLoginPage ? "login" : "register";
  //     const result = await authRequest(values, path);
  //     console.log("result  ", result)
  //     if (result.success === false) return setError(result.message);

  //     path == "login" && setIsAuth(true)
  //     path == "login" && setUser(result)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <form className="max-w-sm mx-auto"
    >
      <h1 className="text-center text-3xl font-semibold mb-5">Edit Profile</h1>
      <input
        type="text"
        id="user_name"
        name="user_name"
        className="mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={values.user_name}
        onChange={handleChange}
      />
      <input
        type="email"
        id="user_email"
        name="user_email"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={values.user_email}
        onChange={handleChange}
      />
      <input
        type="text"
        id="user_password"
        name="user_password"
        className="my-5 bg-gray-100 border border-gray-300
         text-gray-900 text-sm rounded-lg focus:ring-blue-500
          focus:border-blue-500 block w-full p-2.5 
           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={values.user_password}
        placeholder="your password"
        onChange={handleChange}
      />
      <input
        type="text"
        id="confirmPassword"
        name="confirmPassword"
        className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={values.confirm_password}
        placeholder="confirm password"
        onChange={handleChange}
      />

      <div className="mt-5 flex justify-center items-center gap-5">
        <button type="submit" className="btn btn-outline btn-primary">
          EDIT
        </button>
        <button
          onClick={() => profileModal.close()}
          type="button"
          className="btn btn-outline btn-error"
          aria-label="submit"
        >
          CANCEL
        </button>
      </div>
    </form>
  );
}