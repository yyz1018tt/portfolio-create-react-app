import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField, Typography, Button, Grid, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Navbar from './Navbar';

/**
 * custumize TextField with withStyles
 */
const InputField = withStyles({
	root: {
		'& label.Mui-focused': {
			color: '#76323F'
		},
		'& label': {
			color: '#76323F'
		},

		//Styles applied to the root element.
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: '#76323F'
			},
			'&:hover fieldset': {
				borderColor: '#76323F'
			},
			'&.Mui-focused fieldset': {
				borderColor: '#76323F'
			}
		}
	}
})(TextField);

const useStyles = makeStyles((theme) => ({
	form: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute'
	},
	button: {
		marginTop: '3rem',
		color: '#76323F',
		borderColor: '#76323F',
		borderWidth: '2px'
	}
}));

const Contacts = () => {
	const classes = useStyles();

	return (
		<div>
			<Navbar />
			<Box component="div" style={{ background: '#D7CEC7', height: '100vh' }}>
				<Grid container justify="center">
					<Box component="form" className={classes.form}>
						<Typography
							variant="h5"
							style={{ color: '#76323F', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>
							Wanna reach out to me? <br /> Leave a message
						</Typography>
						<InputField
							fullWidth={true}
							label="Name"
							variant="outlined"
							margin="dense"
							size="medium"
							inputProps={{ style: { color: '#76323F' } }}
						/>
						<br />
						<InputField
							fullWidth={true}
							label="Email"
							variant="outlined"
							margin="dense"
							size="medium"
							inputProps={{ style: { color: '#76323F' } }}
						/>
						<br />
						<InputField
							fullWidth={true}
							label="Organisation Name"
							variant="outlined"
							margin="dense"
							size="medium"
							inputProps={{ style: { color: '#76323F' } }}
						/>
						<br />
						<Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
							Contact Me
						</Button>
					</Box>
				</Grid>
			</Box>
		</div>
	);
};

export default Contacts;
