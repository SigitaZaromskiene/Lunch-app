type NavBtnProps = {
  children: React.ReactNode;
};

const NavBtn: React.FC<NavBtnProps> = ({ children }) => {
  return <button className="nav-btn">{children}</button>;
};

export default NavBtn;
