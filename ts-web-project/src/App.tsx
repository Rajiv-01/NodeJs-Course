import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import Homepage from './app/containers/HomePage';
import Navbar from './app/components/Navbar';

const AppContainer = styled.div`
	${tw`
    flex 
    flex-col  
    w-full 
    h-full
    `}
`;

const App = () => {
	return (
		<AppContainer>
			<Navbar />
			<Homepage />
		</AppContainer>
	);
};

export default App;
