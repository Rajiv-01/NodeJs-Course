import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../assets/images/car-logo.png';

const LogoContainer = styled.div`
	${tw`
    flex
    items-center    
    `}
`;
const LogoText = styled.div`
	${tw`
    font-bold
    text-xl
    md: text-2xl
    text-black
    m-1
    `}
`;

const Logo = () => {
	return <LogoContainer>Logo</LogoContainer>;
};

export default Logo;
