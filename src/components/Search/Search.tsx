import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import vendorsData from "../../../data/db.json"

const cx = classNames.bind(styles);

const vendorsNames = vendorsData.vendors

const Search = () => {
  return (
    <form className={cx('search')}>
      <div className={cx('search__form')}>
      <div className={cx('search__button')}>
        <div className={cx('search__options')}>
          <label className={cx('search__label')} htmlFor="search-term">
            What dish are you looking for?
          </label>
          <input
            className={cx('search__input', 'searchIcon')}
            id="search-term"
            type="text"
            placeholder="Enter a dish"
          />
        </div>
        <div className={cx('search__options')}>
          <label className={cx('search__label')} htmlFor="vendors">
            Vendor
          </label>
          <select id="vendors" className={cx('search__select')}>
          <option value="">All vendors</option>
          {vendorsNames.map((vendor, index) => (
              <option key={index} value={vendor.name}>
                {vendor.name} 
              </option>
            ))}
          </select>
        </div>
         </div>
        <button className={cx('search__btn')}type="submit">Search</button>
     </div>
      <div className={cx('search__border')}></div>
      <div className={cx('search__sort')}>
      <p className={cx('search__sort-text')}>Sort By</p>
      <ul className={cx('search__sort-buttons')}>
        <li>
          <button className={cx('search__sort-button')}type="button">POPULIARITY</button>
        </li>
        <li>
          <button className={cx('search__sort-button' )} type="button">PRICE</button>
        </li>
        <li>
          <button className={cx('search__sort-button')}  type="button">RATING</button>
        </li>
      </ul>
      </div>
    </form>
  );
};

export default Search;
