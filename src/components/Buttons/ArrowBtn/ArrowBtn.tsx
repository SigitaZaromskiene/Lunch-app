import styles from "./ArrowBtn.module.scss";
import classNames from "classnames/bind";
import arrowRight from "../../../assets/img/arrow-right.svg";
import arrowLeft from "../../../assets/img/arrow-right.svg";

const cx = classNames.bind(styles);

type ArrowBtnProps = {
  fullNav: boolean;
  navWidthHandler: () => void;
};

const ArrowBtn: React.FC<ArrowBtnProps> = ({ fullNav, navWidthHandler }) => {
  return (
    <button className={cx("arrow-btn")} onClick={navWidthHandler}>
      {fullNav ? (
        <img src={arrowLeft} alt="Arrow left icon" />
      ) : (
        <img src={arrowRight} alt="Arrow right icon" />
      )}
    </button>
  );
};
export default ArrowBtn;
