import React from 'react';
import { Typography, Box, Avatar, Grid } from '@material-ui/core';
import avatar from '../images/Avatar-Maker.png';
import Typed from 'react-typed';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(15), //15 * 8px by default
		height: theme.spacing(15), //15 * 8px by default
		margin: theme.spacing(1) // 8px by default
	},
	title: {
		color: 'white'
	},
	subtitle: {
		color: 'tan',
		marginBottom: '3rem'
	},
	typedContainer: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '100vw',
		textAlign: 'center',
		zIndex: 1 //make sure the text and the avatar are on the top layer
	}
}));

const Header = () => {
	const classes = useStyles();

	/**
	 * <Typed> imported from react-type, the backSpeed param decides how fast
	 * the text will be removed so the next text can appear
	 */
	return (
		<Box className={classes.typedContainer}>
			<Grid container justify="center">
				<Avatar className={classes.avatar} src={avatar} alt="Yuze Yang" />
			</Grid>

			<Typography className={classes.title} variant="h4">
				<Typed strings={[ 'Yuze (Victor) Yang' ]} typeSpeed={80} />
			</Typography>
			<br />
			<Typography className={classes.subtitle} variant="h4">
				<Typed
					strings={[ 'Web Development', 'Major in Software Development' ]}
					typeSpeed={40}
					backSpeed={65}
					loop
				/>
			</Typography>
		</Box>
	);
};

export default Header;
