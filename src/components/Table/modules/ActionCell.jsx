import React from "react";
import { Link } from "react-router-dom";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { Button } from "reactstrap";

const ActionCell = ({ deleteAction, id }) => {
  return (
    <td>
      <div className="action-buttons">
        <Link
          className="edit btn btn-warning"
          to={`${window.location.pathname}/add/${id}`}
        >
          <AiFillEdit />
        </Link>
        <Button
          color="danger"
          className="delete"
          onClick={() => deleteAction(id)}
        >
          <AiFillDelete />
        </Button>
      </div>
    </td>
  );
};

export default ActionCell;
