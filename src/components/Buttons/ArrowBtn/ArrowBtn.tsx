import styles from './ArrowBtn.module.scss';
import classNames from 'classnames/bind';
import { ReactElement } from 'react';
import arrowLeft from '../../../assets/img/arrow-left.svg';
import arrowRight from '../../../assets/img/arrow-right.svg';

const cx = classNames.bind(styles);

type ArrowBtnProps = {
  fullNav: boolean;
  navWidthHandler: () => void;
  className?: string;
};

const ArrowBtn = ({
  fullNav,
  navWidthHandler,
  className,
}: ArrowBtnProps): ReactElement => {
  return (
    <>
      {fullNav ? (
        <img className={cx('arrow-btn', className)} onClick={navWidthHandler} src={arrowLeft} alt="Arrow left button" />
      ) : (
        <img className={cx('arrow-btn', className)} onClick={navWidthHandler} src={arrowRight} alt="Arrow right button" />
      )}
    </>
  );
};
export default ArrowBtn;
