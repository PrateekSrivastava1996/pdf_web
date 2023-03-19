import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { imageList } from "../../../constant/navbar";
import { Menu, SubMenu, Item } from "burger-menu";

import LOGO from "../../../public/iconLogo.png";
const Navbar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((pre) => pre.anime);
  const router = useRouter();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(true);
  const closeMobileMenu = () => setClick(false);

  const onChnageRouter = (value) => {
    router.push(`/${value}`);
    setClick(false);
  };

  return (
    <>
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="/" className="header_ancher_tag">
              <Image src={LOGO} alt="LOGO" width={300} height={200} />
            </a>
          </div>
        </div>
        
        <ul className="nav-options">
          <li className="option">
            <div class="dropdown">
              <a href="#" className="header_ancher_tag dropbtn">
                IMAGE
              </a>

              <div class="dropdown-content">
                <a href="/demoCompressorFile">Resize Image Pixel</a>
                <a href="#">Crop Image</a>
                <a href="#">Convert Image</a>
                <a href="/img-compresser">Compress Image</a>
                <a href="#">Mirror Image</a>
                <a href="#">Rotate Image</a>
                <a href="#">Background Remove</a>
                <a href="#">Change To Black And White</a>
              </div>
            </div>
          </li>
          <li className="option">
            <div class="dropdown">
              <a href="#" className="header_ancher_tag dropbtn">
                PDF
              </a>

              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li className="option">
            <div class="dropdown">
              <a href="#" className="header_ancher_tag dropbtn">
                DOC
              </a>

              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          <>
            {click ? (
              <CloseOutlined className="menu-icon" />
            ) : (
              <MenuOutlined className="menu-icon" width={"200px"} />
            )}
          </>
        </div>
      </div>
      <Menu
        className="burger-menu"
        isOpen={click}
        selectedKey={"entry"}
        onClose={() => {
          setClick(false);
        }}
       onClick={(w)=>{
        console.log(w.itemKey,'ddkdkd d djdjd djdjd dj')
        onChnageRouter(w.itemKey)
       }}
      >
        <SubMenu title="IMAGE">
          <Item itemKey={"union"}  text={"Resize Pixel Image"}></Item>
          <Item itemKey={"union"} text={"Crop Image"}></Item>
          <Item itemKey={"union"} text={"Convert Image"}></Item>
          <Item itemKey={"img-compresser"} text={"Compress Image"}></Item>
          <Item itemKey={"union"} text={"Mirror Image"}></Item>
          <Item itemKey={"union"} text={"Rotate Image"}></Item>
          <Item itemKey={"union"} text={"Background Remove"}></Item>
          <Item itemKey={"union"} text={"Change To Black And White"}></Item>
        </SubMenu>
        <SubMenu title="PDF">
          <Item itemKey={"notice"} text={"Link 1"}></Item>
          <Item itemKey={"union"} text={"Link 2"}></Item>
        </SubMenu>
        <SubMenu title="DOC">
          <Item itemKey={"notice"} text={"Link 1"}></Item>
          <Item itemKey={"union"} text={"Link 2"}></Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default Navbar;
