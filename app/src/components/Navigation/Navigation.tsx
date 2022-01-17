import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import styled from 'styled-components';
import { DemoModal } from '..';

export const DemonNav = () => {
    const [isHidden, setIsHidden] = useState(true);
    const [isLogin, setIsLogin] = useState(false);
    return (
        <Navbar color="light" expand="md" light >
            <NavbarBrand href="/">
                Simple Demo
            </NavbarBrand>
            <Collapse navbar>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/list">
                            List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/rajkuldip" target="_blank">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav navbar>
                    <LoginLink onClick={() => {setIsHidden(false); setIsLogin(true)}}>
                        Login
                    </LoginLink>
                    <RegisterLink onClick={() => {setIsHidden(false); setIsLogin(false)}}>
                        Register
                    </RegisterLink>
                </Nav>
                {!isHidden && <DemoModal onClose={() => setIsHidden(true)} isLogin={isLogin} />}
            </Collapse>
        </Navbar>
        
    );
}

const LoginLink = styled(NavLink)`
    cursor: pointer;
`;

const RegisterLink = styled(LoginLink)`
    margin-left: .5em;
`;