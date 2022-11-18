import React from "react";
import { ImSad2 } from "react-icons/im";

export const PageNotFound = () => {
  return (
    <div style={{ height: "75vh", display: "grid", placeItems: "center" }}>
      <div style={{ color: "#007185" }}>
        <div style={{ textAlign: "center" }}>
          <ImSad2 size={30} />
        </div>
        <h4>Page Not Found </h4>
      </div>
    </div>
  );
};
export default PageNotFound;
