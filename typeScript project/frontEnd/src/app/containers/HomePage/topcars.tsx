import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../components/responsive';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const TopCarsContainer = styled.div`
	${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
	${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
	${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyCars = styled.div`
	${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
	${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

const TopCars = () => {
	const [current, setcurrent] = useState(0);
	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	//   const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
	return (
		<TopCarsContainer>
			<Title>Explore Our Top Deals</Title>
			<CarsContainer>
				<Carousel
					value={current}
					onChange={setcurrent}
					slides={[
						<h1>1</h1>,
						<h1>2</h1>,
						<h1>3</h1>,
						<h1>4</h1>,
						<h1>5</h1>,
						<h1>6</h1>,
					]}
					plugins={[
						'clickToChange',
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
				<Dots value={current} onChange={setcurrent} number={3} />
			</CarsContainer>
		</TopCarsContainer>
	);
};

export default TopCars;
