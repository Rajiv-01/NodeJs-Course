import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import CarLogoImg from '../../../assets/images/car-logo.png';

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
const Image = styled.div`
	width: auto;
	${tw` h-6 md:h-9 `}
	img {
		width: auto;
		height: 100%;
	}
`;
const Logo = () => {
	return (
		<LogoContainer>
			<Image>
				<img src={CarLogoImg} alt='Car Logo' />
			</Image>
			<LogoText>Your Car</LogoText>
		</LogoContainer>
	);
};

export default Logo;
