import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Toggle({ checked, onChange }) {
  return (
    <div className="toggle">
      <FontAwesomeIcon
        icon={checked ? faSun : faMoon}
        size="lg"
        onClick={onChange}
      />
    </div>
  );
}

export default Toggle;
