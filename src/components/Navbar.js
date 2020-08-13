import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import {
	AppBar,
	Toolbar,
	ListItem,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
	ListItemIcon
} from '@material-ui/core';
import { Home, Theaters, ContactMail, Timeline } from '@material-ui/icons';
import avatar from '../images/Avatar-Maker.png';
import Footer from './Footer';

/**
 * Styles for the Navbar and Slider
 */
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: '100%',
		background: '#513E3E',
		height: '100%'
	},
	avatar: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(10), //10 * 8px by default
		height: theme.spacing(10) //10 * 8px by default
	},
	listItem: {
		color: '#ebd4c9'
	}
}));

/**
 * Four categories (objects) in the Slider, each category has three properties
 * the objects are built for the iteration later
 */
const menuIcons = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/'
	},
	{
		listIcon: <Timeline />,
		listText: 'Resume',
		listPath: '/resume'
	},
	{
		listIcon: <Theaters />,
		listText: 'Portfolio',
		listPath: '/portfolio'
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contacts',
		listPath: '/contacts'
	}
];

/**
 * implemented the Navbar and Slider, refer to the documentation of Material UI Drawer section
 */
const Navbar = () => {
	const [ state, setState ] = useState({
		bottom: false
	});

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const classes = useStyles();

	/**
	 * iterated through the objects decleared above with react router
	 * the slide will slide from bottom for the user experience in case of user use a small size monitor
	 * @param {state} slider the anchor that decides from which way the slide is going to slide in
	 */
	const sideList = (slider) => (
		<Box className={classes.menuSliderContainer} onClick={toggleSlider(slider, false)} component="div">
			<Avatar className={classes.avatar} src={avatar} alt="Yuze Yang" />
			<Divider />
			<List>
				{menuIcons.map((lsIcon, key) => (
					<ListItem button key={key} component={Link} to={lsIcon.listPath}>
						<ListItemIcon className={classes.listItem}>{lsIcon.listIcon}</ListItemIcon>
						<ListItemText className={classes.listItem} primary={lsIcon.listText} />
					</ListItem>
				))}
			</List>
		</Box>
	);

	/**
	 * Refer to the documentation of Material UI as well
	 */
	return (
		<Box component="nav">
			<AppBar position="static" style={{ background: '#76323F' }}>
				<Toolbar>
					<IconButton onClick={toggleSlider('bottom', true)}>
						<MenuIcon style={{ color: '#ebd4c9' }} />
					</IconButton>
					<Typography variant="h6" style={{ color: '#ebd4c9' }}>
						Yuze's Portfolio
					</Typography>

					<Drawer anchor={'bottom'} open={state.bottom} onClose={toggleSlider('bottom', false)}>
						{sideList('bottom')}
						<Footer />
					</Drawer>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
