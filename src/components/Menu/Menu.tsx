import { ReactElement } from 'react';
import MenuList from './MenuList';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Header from '../Header';
import { useState } from 'react';
import data from '../../../data/db.json';
import SearchMenu from '../SearchMenu';

const cx = classNames.bind(styles);
const meals = data.meals;

const Menu = (): ReactElement => {
  const [selectedVendor, setSelectedVendor] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [filteredMeals, setFilteredMeals] = useState(meals);

  return (
    <div className={cx('main')}>
      <Header setFilteredMeals={setFilteredMeals} />
      <SearchMenu
        selectedVendor={selectedVendor}
        setSelectedVendor={setSelectedVendor}
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        setFilteredMeals={setFilteredMeals}
        filteredMeals={filteredMeals}
      />
      <div className={cx('menu')}>
        <MenuList filteredMeals={filteredMeals} />
      </div>
    </div>
  );
};
export default Menu;
