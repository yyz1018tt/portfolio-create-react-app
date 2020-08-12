import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from '@material-ui/core/Drawer';
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
import { AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import avatar from '../images/Avatar-Maker.png';
import Footer from './Footer';

//styles here
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: '100%',
		background: '#513E3E',
		height: '100%'
	},
	avatar: {
		display: 'block',
		margin: '0.5rem auto',
		width: theme.spacing(10),
		height: theme.spacing(10)
	},
	listItem: {
		color: '#ebd4c9'
	}
}));

const menuIcons = [
	{
		listIcon: <Home />,
		listText: 'Home',
		listPath: '/'
	},
	{
		listIcon: <AssignmentInd />,
		listText: 'Resume',
		listPath: '/resume'
	},
	{
		listIcon: <Apps />,
		listText: 'Portfolio',
		listPath: '/portfolio'
	},
	{
		listIcon: <ContactMail />,
		listText: 'Contacts',
		listPath: '/contacts'
	}
];

const Navbar = () => {
	const [ state, setState ] = useState({
		right: false
	});

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const classes = useStyles();

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

	return (
		<Box component="nav">
			<AppBar position="static" style={{ background: '#76323F' }}>
				<Toolbar>
					<IconButton onClick={toggleSlider('right', true)}>
						<MenuIcon style={{ color: '#ebd4c9' }} />
					</IconButton>
					<Typography variant="h6" style={{ color: '#ebd4c9' }}>
						Yuze's Portfolio
					</Typography>

					<MobileRightMenuSlider anchor="bottom" open={state.right} onClose={toggleSlider('right', false)}>
						{sideList('right')}
						<Footer />
					</MobileRightMenuSlider>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
