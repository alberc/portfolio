import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Icon({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}

export default Icon;
