import { useEffect } from "react";
import MenuContainer from "./MenuContainer";
import { HomeRounded } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import PieChartIcon from "@mui/icons-material/PieChart";
import RedeemIcon from "@mui/icons-material/Redeem";
// import {home as Home} from "../icons/home.svg"

function Footer() {
  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  });

  return (
    <>
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<PersonIcon />} />
          <MenuContainer link={"#"} icon={<PieChartIcon />} />
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<RedeemIcon />} />
          <MenuContainer link={"#"} icon={<MenuIcon />} />
          <div className="indicator"></div>
        </ul>
      </div>
      <div className="mainContainer"></div>
    </>
  );
}

export default Footer;
