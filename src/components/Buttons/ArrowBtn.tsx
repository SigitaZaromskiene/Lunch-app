const ArrowBtn: React.FC = () => {
  return (
    <button className="arrow-btn">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_822_1273)">
          <path
            d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
            fill="#0D1F2E"
          />
        </g>
        <defs>
          <clipPath id="clip0_822_1273">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
        <title>Arrow left button</title>
      </svg>
    </button>
  );
};
export default ArrowBtn;
