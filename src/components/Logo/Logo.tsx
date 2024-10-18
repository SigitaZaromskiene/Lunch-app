import logoHorizontal from "../../assets/img/logo.svg"
import logoVertical from '../../assets/img/logo-vertical.svg';
import { ReactElement } from 'react';
import styles from './Logo.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Logo = {
  isVertical: boolean;
};

const Logo = ({ isVertical }: Logo): ReactElement => {
  return (
    <img
      src={isVertical ? logoHorizontal:logoVertical }
      className={cx('logo')}
      alt="Logo of the page with app name and food bowl"
    />
  );
};

export default Logo;
