import React from "react";

const Footer = () => {
  let yearLetest = new Date().getFullYear();
  return (
    <>
      <footer className="footermain">
        <div className="footermainDiv">
          <span >
           <span className="copyyear yearname"> © {yearLetest}</span>
            <span className="companyname forpaddingfooter" >  Bansal Technologies</span>
            <span  className="copyyear forpaddingfooter">   . All Rights Reserved.</span>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
