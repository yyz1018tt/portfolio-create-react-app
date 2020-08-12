import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		background: '#D7CEC7'
	},
	timeline: {
		position: 'relative',
		padding: '1rem',
		margin: '0 auto',
		'&:before': {
			content: "''",
			position: 'absolute',
			height: '100%',
			border: '1px solid tan',
			right: '40px',
			top: 0
		},
		'&:after': {
			content: "''",
			display: 'table',
			clear: 'both'
		},
		[theme.breakpoints.up('md')]: {
			padding: '2rem',
			'&:before': {
				left: 'calc(50% - 1px)',
				right: 'auto'
			}
		}
	},
	timeLineItem: {
		padding: '1rem',
		borderBottom: '2px solid tan',
		position: 'relative',
		margin: '1rem 3rem 1rem 1rem',
		clear: 'both',
		'&:after': {
			content: "''",
			position: 'absolute'
		},
		'&:before': {
			content: "''",
			position: 'absolute',
			right: '-0.625rem',
			top: 'calc(50% - 5px)',
			borderStyle: 'solid',
			borderColor: '#76323F #76323F transparent transparent',
			borderWidth: '0.625rem',
			transform: 'rotate(45deg)'
		},
		[theme.breakpoints.up('md')]: {
			width: '44%',
			margin: '1rem',
			'&:nth-of-type(2n)': {
				float: 'right',
				margin: '1rem',
				borderColor: 'tan'
			},
			'&:nth-of-type(2n):before': {
				right: 'auto',
				left: '-0.625rem',
				borderColor: 'transparent transparent #76323F #76323F'
			}
		}
	},
	timeLineYear: {
		textAlign: 'center',
		maxWidth: '9.375rem',
		margin: '0 3rem 0 auto',
		fontSize: '1.5rem',
		background: 'tan',
		color: 'white',
		fontWeight: 'bold',
		lineHeight: 1,
		padding: '0.5rem 1rem',
		'&:before': {
			display: 'none'
		},
		[theme.breakpoints.up('md')]: {
			textAlign: 'center',
			margin: '0 auto',
			'&:nth-of-type(2n)': {
				float: 'none',
				margin: '0 auto'
			},
			'&:nth-of-type(2n):before': {
				display: 'none'
			}
		}
	},
	heading: {
		color: '#76323F',
		padding: '3rem 0',
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	subHeading: {
		color: '#76323F',
		padding: 0,
		textTransform: 'uppercase',
		fontWeight: 'bold'
	}
}));

const Resume = () => {
	const classes = useStyles();
	return (
		<div>
			<Navbar />
			<Box component="header" className={classes.mainContainer}>
				<Typography variant="h4" align="center" className={classes.heading}>
					Working Experience
				</Typography>
				<Box component="div" className={classes.timeline}>
					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						Mar - May 2020
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							Squarespace / shopify website design / seo
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							mrtoddystonic / lovebyt, Sydney, Australia
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>Redesigned the website (add customs CSS, change the layout, etc).</li>
								<li>Improve the SEO (add keywords in meta descriptioin, add alt name to picture, etc.)</li>
							</ul>
						</Typography>
					</Box>

					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						Dec 19 - Mar 20
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							full stack internship
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							Advanced Diversity Services, Shopfront UTS, Sydney, Australia
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>
									Built website with fully functional database (MySQl) for people who recently immigrated to
									Sydney, showing resources of beach events, beach clubs and aquatic service providers.
								</li>
								<li>
									Using MVC to implement the entire project, using JDBC and tomcat to connect the Controller
									and Module, using JSTL to manage the frontend logic.
								</li>
								<li>
									Using Bootstrap to implement the client-side frontend and EasyUI for the frontend of admin
									system.
								</li>
								<li>
									Built the website from scratch and deployed with an unique domain name (GoDaddy), tested the
									program on AWS, purchased the server from Dailyrazor.
								</li>
								<li>
									Acting as the team leader, communicating with and acquiring the requirements from the client.
									Assigned proper work to the team and provide the suitable resources to the team to enable the
									working efficiency to increase.
								</li>
							</ul>
						</Typography>
					</Box>

					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						Oct - Dec 18
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							Product Mangement internship
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							Mobvista Company, Beijing, China
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>Documented funtions for the new developed system.</li>
								<li>Used MindManger to draw mind mapping of the platform.</li>
								<li>Used Axure RP to design system interface.</li>
							</ul>
						</Typography>
					</Box>

					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						Jul - Aug 18
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							Data Mining summer internship (detecting real-time traffic flow in Beijing)
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							Institute of Computing Technology, Chinese Academy of Sciences
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>Sorted the dataset chronologically.</li>
								<li>
									Cleaned certain data points such as cars exceeding speed limit, out of aiming area, long
									stops and have travelled long distance in one second.
								</li>
								<li>Used ono-negative matrix factorization and K-means to cluster the streets.</li>
								<li>Built anomaly detection modal by using scoring function.</li>
							</ul>
						</Typography>
					</Box>
				</Box>
			</Box>

			<Box component="header" className={classes.mainContainer}>
				<Typography variant="h4" align="center" className={classes.heading}>
					relevant project
				</Typography>
				<Box component="div" className={classes.timeline}>
					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						May 2020
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							Grocery Store Web App / Car Rental Web App
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							UTS, Internet Programming Assignment
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>Using HTML, CSS (Bootstrap), JS, PHP and MySQL/XML to build the website.</li>
								<li>Using Session to save and pass data between different pages.</li>
								<li>Using AJAX to fetch data from the university server or XML file.</li>
							</ul>
						</Typography>
					</Box>

					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						Nov 2019
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							YelpCamp Application
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							Online tutorial - Udemy
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>
									Build up a full-featured system, contains functions of login, post, comment, edit, user
									authentication and user authorization.
								</li>
								<li>
									Using CSS, HTML, JavaScript and Bootstrap to build front-end and MongoDB, Express and Node.js
									to build up back-end.
								</li>
							</ul>
						</Typography>
					</Box>

					<Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
						May - Jul 2018
					</Typography>
					<Box component="div" className={classes.timeLineItem}>
						<Typography variant="h5" aligh="center" className={classes.subHeading}>
							Development of Blog System
						</Typography>
						<Typography variant="body1" aligh="center" style={{ color: '#565656', fontWeight: 'bold' }}>
							Beijing Information Science and Technology University
						</Typography>
						<Typography variant="subtitle1" aligh="center" style={{ color: '#565656' }}>
							<ul>
								<li>
									Using HTML, CSS, jinja2, Flask-Bootstrap to build up front-end and SQLite, Flask extensions
									to build up back-end, such as Flask-login, Flask-Mail, Flask-Migrate.
								</li>
								<li>Used REST API to connect with third party, such as GitHub.</li>
								<li>Deployed the project on pythonanywhere.</li>
							</ul>
						</Typography>
					</Box>
				</Box>
			</Box>
		</div>
	);
};

export default Resume;
