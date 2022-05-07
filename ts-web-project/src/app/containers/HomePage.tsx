import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../components/Navbar';

const PageContainer = styled.div`
	${tw`
  flex 
  flex-col 
  items-center 
  justify-center 
  overflow-hidden 
  w-full 
  h-full
  `}
`;
const HomePage = () => {
	return (
		<PageContainer>
			<Navbar />
		</PageContainer>
	);
};
export default HomePage;
