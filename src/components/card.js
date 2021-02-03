import React from "react";
import PropTypes from "prop-types";
import reminder from "../assets/reminder.svg";
import task from "../assets/task.svg";
import Menu from "./menu";

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  type: PropTypes.string,
};

function Card(props) {
  let image = "";
  let color = "";
  switch (props.type) {
    case "reminder":
      image = reminder;
      color = 'bg-yellow-50';
      break;
    case "task":
      image = task;
      color = 'bg-green-50';
      break;
  }
  const classesToApply = `${color} hover:shadow-lg p-6 rounded-lg shadow`;
  console.log(classesToApply)
  return (
    <div className="py-12 px-8">
      <div className={classesToApply}>
        <div className="grid grid-cols-2">
          <div className="w-8 h-8 p-1 bg-blue-400 rounded-full">
            {" "}
            <img className="object-scale-down" src={image} />{" "}
          </div>
          <Menu />
        </div>
        <div className="grid grid-cols-1 mt-4">
          <div>{props.body}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Card);
