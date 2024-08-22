import styles from "./Layout.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className={cx("layout")}>{children}</div>;
};

export default Layout;
