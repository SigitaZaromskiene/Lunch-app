import { ReactElement, FormEvent, ChangeEvent } from 'react';
import vendorsData from '../../../data/db.json';
import styles from './SearchMenu.module.scss';
import classNames from 'classnames/bind';
import SortMenu from '../SortMenu';

const cx = classNames.bind(styles);

const vendorsNames = vendorsData.vendors;

export type Meals = {
  id: number;
  name: string;
  price: number;
  rating: number;
  ordersCount: number;
};

type SearchProps = {
  selectedVendor: string;
  setSelectedVendor: (vendorId: string) => void;
  searchItem: string;
  setSearchItem: (item: string) => void;
  setFilteredMeals: (meals: any[]) => void;
  filteredMeals: Meals[];
};

const Search = ({
  selectedVendor,
  setSelectedVendor,
  searchItem,
  setSearchItem,
  setFilteredMeals,
  filteredMeals,
}: SearchProps): ReactElement => {
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

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
    <form className={cx('search-menu')} onSubmit={handleSearch}>
      <div className={cx('search-menu__form')}>
        <div className={cx('search-menu__button')}>
          <div className={cx('search-menu__options')}>
            <label className={cx('search-menu__label')} htmlFor="search-term">
              What dish are you looking for?
            </label>
            <input
              className={cx('search-menu__input', 'searchIcon')}
              id="search-term"
              type="text"
              placeholder="Enter a dish"
              value={searchItem}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setSearchItem(e.target.value)
              }
            />
          </div>
          <div className={cx('search-menu__options')}>
            <label className={cx('search-menu__label')} htmlFor="vendors">
              Vendor
            </label>
            <select
              id="vendors"
              className={cx('search-menu__select')}
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
        <button className={cx('search-menu__btn')} type="submit">
          Search
        </button>
      </div>
      <div className={cx('search-menu__border')}></div>
      <SortMenu
        filteredMeals={filteredMeals}
        setFilteredMeals={setFilteredMeals}
      />
    </form>
  );
};

export default Search;
