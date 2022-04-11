import React from "react";

function Pagination(props) {
  function handlePrevious() {
    props.handlePrevious();
  }
  function handleNext() {
    props.handleNext();
  }
  return (
    <div>
      {!props.loading ? (
        <div className="pagination">
          <button
            disabled={props.page > 1 ? "" : true}
            className="pagination_button"
            onClick={handlePrevious}
          >
            Previous
          </button>

          <button className="pagination_button" onClick={handleNext}>
            Next
          </button>
        </div>
      ) : (
        <span></span>
      )}
    </div>
  );
}

export default Pagination;
