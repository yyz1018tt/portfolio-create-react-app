import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	particlesCanva: {
		position: 'absolute',
		opacity: '0.5'
	}
});

const Home = () => {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<Header />
			{/**
			 * adding particle animation to the background
			 */}
			<Particles
				canvasClassName={classes.particlesCanva}
				params={{
					particles: {
						number: {
							value: 90,
							density: {
								enable: false,
								value_area: 900
							}
						},
						shape: {
							type: 'square',
							stroke: {
								width: 4,
								color: 'black'
							}
						},
						size: {
							value: 5,
							random: true,
							anim: {
								enable: false,
								speed: 5,
								size_min: 0.1,
								sync: false
							}
						},
						opacity: {
							value: 1,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: false
							}
						}
					}
				}}
			/>
		</div>
	);
};

export default Home;
