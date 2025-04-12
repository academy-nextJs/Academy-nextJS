import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastAlert = () => {
  return (
    <ToastContainer
      position="top-center"
      // autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // theme={theme ? "dark" : "light"}
      theme="dark"
    ></ToastContainer>
  );
};

export default ToastAlert;
