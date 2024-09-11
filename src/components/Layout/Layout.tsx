import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import { ReactNode, ReactElement } from 'react';

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps): ReactElement => {
  return <div className={cx('layout')}>{children}</div>;
};

export default Layout;
