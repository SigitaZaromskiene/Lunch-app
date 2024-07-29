import MenuHeader from "./MenuHeading";

const MenuList:React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <MenuHeader/>
          <div>
            <div>
              <img></img>
              <p></p>
            </div>
            <div>
              <p></p>
              <img />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default MenuList;
