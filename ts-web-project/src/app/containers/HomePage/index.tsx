import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Marginer } from '../../components/marginer';
import { BookCard } from '../../components/bookCard';
import { BookingSteps } from './bookingSteps';
import AboutUs from './aboutus';
import Navbar from '../../components/navbar';
import { TopSection } from './topSection';
const PageContainer = styled.div`
	${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;
const HomePage = () => {
	return (
		<PageContainer>
			<Navbar />
			<TopSection />
			<Marginer direction='vertical' margin='4em' />
			<BookCard />
			<Marginer direction='vertical' margin='10em' />
			<BookingSteps />
			<Marginer direction='vertical' margin='8em' />
			<AboutUs />
		</PageContainer>
	);
};

export default HomePage;
