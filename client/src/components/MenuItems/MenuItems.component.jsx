import { MenuContainer } from "./MenuItems.styles";

const MenuItems = () => {
  return (
    <>
      <MenuContainer>
        {/* create a button to close */}
        <ul>
          <li>Search</li>
          <li>Channels</li>
          <li>Games</li>
          <li>Subscribers</li>
        </ul>
      </MenuContainer>
    </>
  );
};

export default MenuItems;
