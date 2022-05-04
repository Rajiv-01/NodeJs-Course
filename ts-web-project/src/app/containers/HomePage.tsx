import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

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
	return <PageContainer>Hello World</PageContainer>;
};
export default HomePage;
