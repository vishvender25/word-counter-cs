import React from "react";
import "../public/styles.css";
function Footer() {
  var name = "Vishvender Tyagi";
  var time = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        <span>Made by &copy; Vishvender Tyagi</span>
        {time}
      </p>
    </div>
  );
}

export default Footer;
