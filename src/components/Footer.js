import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
	root: {
		/**
		 * styles applied to the root element
		 */
		'& .MuiBottomNavigationAction-root': {
			minWidth: 0,
			maxWidth: 250
		},

		/**
		 * styles applied to the root element
		 */
		'& .MuiSvgIcon-root': {
			fill: '#ebd4c9',
			'&:hover': {
				fill: '#ebd4c9',
				fontSize: '2rem'
			}
		}
	}
});

const Footer = () => {
	const classes = useStyles();
	return (
		<BottomNavigation width="auto" style={{ background: '#513E3E' }}>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<LinkedInIcon />}
				href="https://www.linkedin.com/in/yuzeyang96/"
			/>
			<BottomNavigationAction
				className={classes.root}
				style={{ padding: 0 }}
				icon={<GitHubIcon />}
				href="https://github.com/yyz1018tt"
			/>
		</BottomNavigation>
	);
};

export default Footer;
