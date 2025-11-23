import React, { useEffect } from "react";

const UpdateData = () => {

  useEffect(() => {
    const modal = document.getElementById("myModal");
    const input = document.getElementById("myInput");

    console.log("Modal:", modal);
    console.log("Input:", input);
  }, []);

  return (
    <div>
      <div className="modal" id="myModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <p>Modal body text goes here.</p>
              <input id="myInput" type="text" className="form-control" />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
