import styled from "styled-components";
const Navbar = () => {

    return (
        <NavbarWrapper>
            <NavbarBox>
                <Logo>RattleTheRat</Logo>
                <NavList><li>Login</li></NavList>
            </NavbarBox>
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.div`
    width:100%;
    height:80px;
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content:center;
    /* background-color:#3E3A31; */
`
const NavbarBox = styled.div`
    width:90%;
    display:flex;
    align-items:center;
    flex-direction:row;
    justify-content:space-between;
`

const NavList = styled.ul`
    margin-right:20px;
`

const Logo = styled.h1`
    margin-left:20px;
`
export default Navbar;