type NavBtnProps = {
  children: React.ReactNode;
  fullNav: boolean;
};

const NavBtn: React.FC<NavBtnProps> = ({ children, fullNav }) => {
  return (
    <button
      className={fullNav === true ? "nav-btn__expanded" : "nav-btn__colapsed"}
    >
      {children}
    </button>
  );
};

export default NavBtn;
