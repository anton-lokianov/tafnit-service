import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../service/ui-slice";

const Modal = ({ children, id }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.ui.modals[id]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape" && isModalOpen) {
        dispatch(closeModal({ modalId: id }));
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => document.removeEventListener("keydown", handleEsc);
  }, [id, isModalOpen, dispatch]);

  if (!isModalOpen) return null;

  const modal = (
    <div
      className="z-40 fixed inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-slate-100 opacity-50"
          onClick={() => dispatch(closeModal({ modalId: id }))}
        />
        <div className="z-50 p-8 rounded-md bg-slate-300 shadow-sm shadow-black">
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.getElementById("modal-root"));
};

export default Modal;
