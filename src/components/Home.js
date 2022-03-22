import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./Design.css";

const Home = () => {
  const inputURL = useRef();

  const onDecode = () => {
    let decodeUrl = inputURL.current.value;
    const decodeUrlValue = decodeURIComponent(decodeUrl);
    decodeUrl = inputURL.current.value = decodeUrlValue;
  };

  const onEncode = () => {
    let encodeUrl = inputURL.current.value;
    const enocdeUrlValue = encodeURIComponent(encodeUrl);
    encodeUrl = inputURL.current.value = enocdeUrlValue;
  };

  const onClear = () => {
    inputURL.current.value = "";
    toast.warn("Text Box Cleared.");
    toast.clearWaitingQueue();
  };

  const onCopy = () => {
    navigator.clipboard.writeText(inputURL.current.value);
    toast.success("Text Copied.");
    toast.clearWaitingQueue();
  };

  return (
    <div className="container">
      <ToastContainer
        theme="colored"
        draggable={true}
        autoClose={2000}
        limit={1}
      />
      <h1 className="text-white header">URL Decoder & Encoder</h1>
      <div className="form floating">
        <textarea
          ref={inputURL}
          className="form-control border-5 text-area"
          placeholder="Enter any URL/ Text"
        />
      </div>
      <i className="bi-alaram" />
      <div className="flex-button">
        <button className="btn btn-primary btn-lg" onClick={onDecode}>
          <i className="bi bi-unlock" />
          Decode
        </button>
        <button className="btn btn-primary btn-lg" onClick={onEncode}>
          <i className="bi bi-lock" />
          Encode
        </button>
        <button className="btn btn-danger btn-lg" onClick={onClear}>
          <i className="bi bi-x-lg" />
          Clear
        </button>

        <button className="btn btn-success btn-lg" onClick={onCopy}>
          <i className="bi bi-bookmark-check" />
          Copy
        </button>
      </div>
    </div>
  );
};

export default Home;
