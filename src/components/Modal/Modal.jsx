import React from "react";

const Modal = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <form onSubmit={handleSubmit}>
          <div>
            First Name
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="fName"
            />
          </div>
          <div>
            Last Name
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="lName"
            />
          </div>
          <div>
            Email
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="email"
            />
          </div>
          <div>
            Phone
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="phone"
            />
          </div>
          <div>
            Appointment Date
            <input
              type="date"
              placeholder="Type here"
              className="input input-bordered input-primary w-full"
              name="date"
            />
          </div>
          <div>
            Address
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
              name="address"
            />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">
              Make Appointment
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            Close
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
