import Menu from './Menu';
import MenuItem from './components/MenuItem';
import MenuLinkItem from './components/MenuLinkItem';

type CompositeMenuType = typeof Menu & { 
  Item: typeof MenuItem;
  LinkItem: typeof MenuLinkItem;
};

const CompositeMenu: CompositeMenuType = { ...Menu, ...{
  Item: MenuItem,

}};

(Menu as CompositeMenuType).Item = MenuItem;
(Menu as CompositeMenuType).LinkItem = MenuLinkItem;

export default CompositeMenu;
