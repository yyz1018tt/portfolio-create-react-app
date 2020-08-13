import React from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import project1 from '../images/project1.png';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import clsx from 'clsx';
import {
	Box,
	Grid,
	Card,
	CardHeader,
	Collapse,
	IconButton,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Particles from 'react-particles-js';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#D7CEC7',
		height: '100%'
	},
	cardContainer: {
		maxWidth: 355,
		heigh: '100%',
		margin: '5rem auto'
	},
	particlesCanva: {
		position: 'absolute',
		opacity: '0.5'
	},
	root: {
		maxWidth: 355,
		heigh: '100%',
		margin: '5rem auto',
		zIndex: 1
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	}
}));

const Portfolio = () => {
	const classes = useStyles();

	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<Box component="div" className={classes.mainContainer}>
			<Navbar />
			<Particles
				canvasClassName={classes.particlesCanva}
				params={{
					particles: {
						/**
						 * Density determines the number of particles that will be packed together in a given area
						 */
						number: {
							value: 45,
							density: {
								enable: true,
								value_area: 800
							}
						},
						shape: {
							type: 'circle',

							/**
							 * adding an outline to a particale with given width and color
							 */
							stroke: {
								width: 4,
								color: 'white'
							}
						},
						size: {
							value: 5,
							random: true,
							anim: {
								enable: true,
								speed: 0.8,
								size_min: 0.1,
								sync: false //if ture, change the size of all elements simultaneously
							}
						},
						opacity: {
							value: 0.5,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.1,
								sync: false //animate the opacity of all particles at the same time
							}
						}
					}
				}}
			/>
			<Grid container justify="center" alignItems="center">
				{/**
				 * set breakpoint for the different layouts, similar to Bootstrap
				 */}
				<Grid item xs={12} sm={6} md={6}>
					<Card className={classes.root}>
						<CardHeader title="Water Safety Project" />
						<CardMedia className={classes.media} image={project1} height="150" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Tech Stacks: HTML, CSS (Bootstrap), JavaScript, JavaServer Page, MySQL, Tomcat, JDBC
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Button size="small" color="primary" href="http://watersafe.org.au/">
								Go to the website
							</Button>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more">
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>
									Built website with fully functional database (MySQL) for people who recently immigrated to
									Sydney, showing resources of beach events, beach clubs and aquatic service providers. Using
									MVC to implement the entire project, using JDBC and tomcat to connect the Controller and
									Module, using JSTL to manage the frontend logic. Using Bootstrap to implement the client-side
									frontend and EasyUI for the frontend of admin system. Built the website from scratch and
									deployed with an unique domain name (GoDaddy), tested the program on AWS, purchased the
									server from Dailyrazor. Acting as the team leader, communicating with and acquiring the
									requirements from the client. Assigned proper work to the team and provide the suitable
									resources to the team to enable the working efficiency to increase.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6}>
					<Card className={classes.root}>
						<CardHeader title="YelpCamp Project - Udemy" />
						<CardMedia className={classes.media} image={project2} height="150" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Tech Stacks: HTML, CSS (Bootstrap), JavaScript, Node.js, Express, MongoDB
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Button size="small" color="primary" href="https://serene-ridge-77250.herokuapp.com/">
								Live Demo
							</Button>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more">
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>
									Build up a full-featured system, contains functions of login, post, comment, edit, user
									authentication and user authorization. Using CSS, HTML, JavaScript and Bootstrap to build
									front-end and MongoDB, Express and Node.js to build up back-end.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6}>
					<Card className={classes.root}>
						<CardHeader title="Grocery Store" />
						<CardMedia className={classes.media} image={project3} height="150" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Tech Stacks: HTML, CSS (Bootstrap), JavaScript, PHP, MySQL
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Button
								size="small"
								color="primary"
								href="http://www-student.it.uts.edu.au/~yuzyang/assignment%201/">
								Live Demo
							</Button>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more">
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>
									Using HTML, CSS (Bootstrap), JS, PHP and MySQL to build the website. Using Session to save
									and pass data between different pages. Fetch data from the university server.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>

				<Grid item xs={12} sm={6} md={6}>
					<Card className={classes.root}>
						<CardHeader title="UTS Car Rental" />
						<CardMedia className={classes.media} image={project4} height="150" />
						<CardContent>
							<Typography variant="body2" color="textSecondary" component="p">
								Tech Stacks: HTML, CSS (Bootstrap), JavaScript, PHP, XML
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<Button size="small" color="primary" href="http://www-student.it.uts.edu.au/~yuzyang/hertz-uts/">
								Live Demo
							</Button>
							<IconButton
								className={clsx(classes.expand, {
									[classes.expandOpen]: expanded
								})}
								onClick={handleExpandClick}
								aria-expanded={expanded}
								aria-label="show more">
								<ExpandMoreIcon />
							</IconButton>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
							<CardContent>
								<Typography paragraph>
									Using HTML, CSS (Bootstrap), JS, PHP and XML to build the website. Using Session to save and
									pass data between different pages. Using AJAX to fetch data from the XML file.
								</Typography>
							</CardContent>
						</Collapse>
					</Card>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Portfolio;
