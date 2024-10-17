import { ReactElement, FormEvent, ChangeEvent } from 'react';
import vendorsData from '../../../data/db.json';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const vendorsNames = vendorsData.vendors;

type SearchProps = {
  selectedVendor: string;
  setSelectedVendor: (vendorId: string) => void;
  searchItem: string;
  setSearchItem: (item: string) => void;
  setFilteredMeals: (meals: any[]) => void;
};

const Search = ({
  selectedVendor,
  setSelectedVendor,
  searchItem,
  setSearchItem,
  setFilteredMeals,
}: SearchProps): ReactElement => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    console.log(searchItem);
    const meals = vendorsData.meals;

    const filtered = meals.filter((meal) => {
      const matchesVendor =
        selectedVendor === '' || meal.vendorId === +selectedVendor;
      const matchesSearchTerm = meal.title
        .toLowerCase()
        .includes(searchItem.toLowerCase());

      return matchesVendor && matchesSearchTerm;
    });

    setFilteredMeals(filtered);
  };

  return (
    <form className={cx('search')} onSubmit={handleSearch}>
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
              value={searchItem}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchItem(e.target.value)
              }
            />
          </div>
          <div className={cx('search__options')}>
            <label className={cx('search__label')} htmlFor="vendors">
              Vendor
            </label>
            <select
              id="vendors"
              className={cx('search__select')}
              value={selectedVendor}
              onChange={(e) => setSelectedVendor(e.target.value)}
            >
              <option value="">All vendors</option>
              {vendorsNames.map((vendor, index) => (
                <option key={index} value={vendor.id}>
                  {vendor.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          className={cx('search__btn')}
          type="submit"
          disabled={searchItem === ''}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
