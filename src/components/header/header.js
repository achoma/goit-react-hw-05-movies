import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
//stały header na stronie

const StyledNav = styled.nav`
  display: flex;
  border-bottom: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 20px;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  padding: 10px;
  &:hover {
    color: #007bff;
  }
  &.active {
    color: orange;
  }
`;

const Header = () => {
  return (
    <header>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="Movies">Movies</StyledNavLink>
      </StyledNav>
    </header>
  );
};

export default Header;
