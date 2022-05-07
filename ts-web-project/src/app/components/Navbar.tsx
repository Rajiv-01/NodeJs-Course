// create navbar component with tailwind twin.macro and ts

import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Logo from './Logo';

const NavbarContainer = styled.div`
	min.height = 50px;
    ${tw`
    w-full
    max-w-2xl
    flex
    flex-row
    items-center
    lg: pl-12 pr-12
    justify-between
    `}
`;

const Navbar = () => {
	return (
		<NavbarContainer>
			<Logo />
		</NavbarContainer>
	);
};
export default Navbar;
