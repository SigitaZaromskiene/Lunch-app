import LogoHorizontal from "./Reusable/LogoHorizontal";
import NavBtn from "./Buttons/NavBtn";
import ArrowBtn from "./Buttons/ArrowBtn";
import LogoVertical from "./Reusable/LogoVertical";
import { useState } from "react";

const Nav: React.FC = () => {
  const [fullNav, setFullNav] = useState<boolean>(true);

  function navWidthHandler() {
    setFullNav((prev) => !prev);
  }

  return (
    <nav className={fullNav ? "nav":"nav-colapsed"}>
      {fullNav? <LogoHorizontal />:<LogoVertical/>}
      <div className="nav__list">
        <NavBtn fullNav={fullNav}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="nav__list-icon"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.7998 3.59961H6.3998V19.5996H4.7998V3.59961ZM10.3998 6.79961H15.9998V8.39961H10.3998V6.79961ZM10.3998 9.99961H15.9998V11.5996H10.3998V9.99961Z"
              fill="#0D1F2E"
            />
            <path
              d="M17.6002 3.59961H7.2002V19.5996H17.6002C18.4826 19.5996 19.2002 18.882 19.2002 17.9996V5.19961C19.2002 4.31721 18.4826 3.59961 17.6002 3.59961ZM17.6002 17.9996H8.8002V5.19961H17.6002V17.9996Z"
              fill="#0D1F2E"
            />
            <title>Food menu icon</title>
          </svg>
          <a href="#" className={fullNav ? "nav__list-link":"nav-colapsed__list-link"}>
            Food Menu
          </a>
        </NavBtn>
        <NavBtn fullNav={fullNav}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="nav__list-icon"
            xmlns="http://www.w3.org/2000/svg"
            color="white"
          >
            <g clip-path="url(#clip0_822_1257)">
              <path
                d="M10.7996 9.89961H8.99961V3.59961H7.19961V9.89961H5.39961V3.59961H3.59961V9.89961C3.59961 11.8076 5.09361 13.3556 6.97461 13.4726V21.5996H9.22461V13.4726C11.1056 13.3556 12.5996 11.8076 12.5996 9.89961V3.59961H10.7996V9.89961ZM15.2996 7.19961V14.3996H17.5496V21.5996H19.7996V3.59961C17.3156 3.59961 15.2996 5.61561 15.2996 7.19961Z"
                fill="#0D1F2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_822_1257">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
            <title>Available lunch icon</title>
          </svg>
          <a href="#" className={fullNav ? "nav__list-link":"nav-colapsed__list-link"}>
            Available lunch
          </a>
        </NavBtn>
        <NavBtn fullNav={fullNav}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="nav__list-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_822_1260)">
              <path
                d="M3.59961 7.59961H19.5996V9.59961H3.59961V7.59961ZM3.59961 13.5996H19.5996V11.5996H3.59961V13.5996ZM3.59961 17.5996H10.5996V15.5996H3.59961V17.5996ZM3.59961 21.5996H10.5996V19.5996H3.59961V21.5996ZM15.0096 18.7696L13.5996 17.3496L12.1896 18.7596L15.0096 21.5996L19.5996 17.0196L18.1796 15.5996L15.0096 18.7696ZM3.59961 3.59961V5.59961H19.5996V3.59961H3.59961Z"
                fill="#0D1F2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_822_1260">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
            <title>Your orders icon</title>
          </svg>
          <a href="#" className={fullNav ? "nav__list-link":"nav-colapsed__list-link"}>
            Your orders
          </a>
        </NavBtn>
        <NavBtn fullNav={fullNav}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="nav__list-icon"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_822_1265)">
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z"
                fill="#0D1F2E"
              />
            </g>
            <defs>
              <clipPath id="clip0_822_1265">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
            <title>Ratings stars icon</title>
          </svg>
          <a href="#" className={fullNav ? "nav__list-link":"nav-colapsed__list-link"}>
            Ratings
          </a>
        </NavBtn>
      </div>
      <ArrowBtn fullNav={fullNav} navWidthHandler={navWidthHandler} />
    </nav>
  );
};

export default Nav;
