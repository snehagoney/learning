"use client";

import React, { useState } from 'react';
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Container,
	Pagination,
	Grid,
} from '@mui/material';

const courses = [
	{
		title: 'Full Stack Web Development (MERN)',
		description: 'Master the MERN stack for building modern web applications.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'React, Tailwind CSS',
		backEnd: 'Node.js, Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Full Stack Development',
		description: 'Learn SAP Fiori and ABAP for enterprise applications.',
		duration: '10 weeks',
		level: 'Advanced',
		frontEnd: 'SAPUI5, SAP Fiori',
		backEnd: 'ABAP, SAP BTP',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Java Full Stack Development',
		description: 'Build robust applications with Java and Angular.',
		duration: '14 weeks',
		level: 'Intermediate',
		frontEnd: 'Angular, HTML, CSS',
		backEnd: 'Spring Boot',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Python Full Stack Development',
		description: 'Develop web apps with Python and Django.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'HTML, CSS, JavaScript',
		backEnd: 'Django, Flask',
		database: 'MySQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP ABAP Programming',
		description: 'Master ABAP for SAP backend development.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'ABAP',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'React and Node.js Full Stack',
		description: 'Create dynamic apps with React and Node.js.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'React, Tailwind CSS',
		backEnd: 'Node.js, Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Fiori Elements',
		description: 'Build user-friendly SAP interfaces with Fiori.',
		duration: '6 weeks',
		level: 'Intermediate',
		frontEnd: 'SAP Fiori, SAPUI5',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'MEAN Stack Development',
		description: 'Learn MongoDB, Express, Angular, and Node.js.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'Angular, CSS',
		backEnd: 'Node.js, Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP HANA Administration',
		description: 'Manage and optimize SAP HANA databases.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with Vue.js',
		description: 'Build apps with Vue.js and Node.js.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'Vue.js, Tailwind CSS',
		backEnd: 'Node.js, Express.js',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Cloud Platform Integration',
		description: 'Integrate SAP systems with cloud applications.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'SAP CPI',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Django and React Full Stack',
		description: 'Develop full stack apps with Django and React.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'React, Tailwind CSS',
		backEnd: 'Django',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP BusinessObjects BI',
		description: 'Create reports and dashboards with SAP BO.',
		duration: '6 weeks',
		level: 'Intermediate',
		frontEnd: 'SAP BO UI',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with Spring Boot',
		description: 'Build enterprise apps with Spring Boot and Angular.',
		duration: '14 weeks',
		level: 'Advanced',
		frontEnd: 'Angular, HTML, CSS',
		backEnd: 'Spring Boot',
		database: 'MySQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Analytics Cloud',
		description: 'Learn analytics and planning with SAP Analytics Cloud.',
		duration: '6 weeks',
		level: 'Intermediate',
		frontEnd: 'SAP SAC UI',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Node.js and MongoDB',
		description: 'Build scalable apps with Node.js and MongoDB.',
		duration: '8 weeks',
		level: 'Intermediate',
		frontEnd: 'HTML, CSS, JavaScript',
		backEnd: 'Node.js, Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP BTP Development',
		description: 'Develop applications on SAP Business Technology Platform.',
		duration: '10 weeks',
		level: 'Advanced',
		frontEnd: 'SAPUI5',
		backEnd: 'SAP CAP',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with Laravel',
		description: 'Create web apps with Laravel and Vue.js.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'Vue.js, Tailwind CSS',
		backEnd: 'Laravel',
		database: 'MySQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Master Data Governance',
		description: 'Manage enterprise master data with SAP MDG.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'React Native and Express',
		description: 'Build mobile and web apps with React Native.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'React Native',
		backEnd: 'Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP IDOC Integration',
		description: 'Learn SAP IDOC for data exchange.',
		duration: '6 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'SAP IDOC',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with Flask',
		description: 'Develop apps with Flask and JavaScript.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'HTML, CSS, JavaScript',
		backEnd: 'Flask',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP BW/4HANA',
		description: 'Master data warehousing with SAP BW/4HANA.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with .NET',
		description: 'Build apps with .NET and Angular.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'Angular, HTML, CSS',
		backEnd: '.NET Core',
		database: 'SQL Server',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Basis Administration',
		description: 'Learn SAP system administration.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'SAP Basis',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Ruby on Rails Full Stack',
		description: 'Develop web apps with Ruby on Rails.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'HTML, CSS, JavaScript',
		backEnd: 'Ruby on Rails',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP HANA Cloud Integration',
		description: 'Integrate SAP systems with cloud platforms.',
		duration: '8 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'SAP HCI',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack with Go',
		description: 'Build scalable apps with Go and Vue.js.',
		duration: '10 weeks',
		level: 'Intermediate',
		frontEnd: 'Vue.js, Tailwind CSS',
		backEnd: 'Go',
		database: 'PostgreSQL',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'SAP Data Services (BODS)',
		description: 'Master ETL processes with SAP BODS.',
		duration: '6 weeks',
		level: 'Advanced',
		frontEnd: 'None',
		backEnd: 'None',
		database: 'SAP HANA',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Next.js Full Stack',
		description: 'Build modern apps with Next.js and Node.js.',
		duration: '12 weeks',
		level: 'Intermediate',
		frontEnd: 'Next.js, Tailwind CSS',
		backEnd: 'Node.js, Express.js',
		database: 'MongoDB',
		image: '../Images/wrkng-person.jpg',
	},
];





export default function Courses() {
	const [page, setPage] = useState(1);
	const coursesPerPage = 6;
	const totalPages = Math.ceil(courses.length / coursesPerPage);

	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const paginatedCourses = courses.slice(
		(page - 1) * coursesPerPage,
		page * coursesPerPage
	);


	return (
		<>
			<Box className="bg-purple-600 w-full py-9">
				<Container className="flex justify-between items-center">
					<Box className="text-white">
						<Typography variant='subtitle2' gutterBottom>INNOVATION DRIVEN SOLUTIONS</Typography>
						<Typography variant="h3" sx={{ fontWeight: 'bold' }} gutterBottom>
							Building Tomorrow's Technology Today
						</Typography>
						<Typography variant='subtitle1' gutterBottom> Transform your business with cutting-edge software solutions designed for growth. From custom applications to enterprise systems, we deliver scalable technology that drives success.</Typography>
						<Button variant="contained" size="medium" href="#contained-buttons" className='bg-white-900  text-purple'>
							Get Started
						</Button>
					</Box>
					<Box
						component="img"
						className=""
						src="/Images/aim.png"
						alt="Banner"
						sx={{ width: 'auto', height: 'auto' }}
					/>
				</Container>
			</Box>
			<Box>
				<Typography variant="h4" className='text-center text-purple-900 py-6' sx={{ fontWeight: 'bold' }}>
					Our Top Courses
				</Typography>
				<Box className="p-4">
					<Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
						{paginatedCourses.map((course, index) => (
							<Grid item xs={2} sm={4} md={4} key={index}>
								<Card className="max-w-sm mx-auto shadow-md">
									<CardMedia
										component="img"
										className="h-36 object-cover"
										image={course.image}
										alt={course.title}
									/>
									<CardContent className="text-center">
										<Typography variant="h6" className="!mb-2 font-bold">
											{course.title}
										</Typography>
										<Typography variant="body2" className="!mb-2">
											{course.description}
										</Typography>
										<Typography variant="body2" className="!mb-1">
											<strong>Duration:</strong> {course.duration}
										</Typography>
										<Typography variant="body2" className="!mb-1">
											<strong>Level:</strong> {course.level}
										</Typography>
										<Typography variant="body2" className="!mb-1">
											<strong>Front-End:</strong> {course.frontEnd}
										</Typography>
										<Typography variant="body2" className="!mb-1">
											<strong>Back-End:</strong> {course.backEnd}
										</Typography>
										<Typography variant="body2" className="!mb-2">
											<strong>Database:</strong> {course.database}
										</Typography>
										<Button
											variant="contained"
											className="mt-2 bg-blue-500 hover:bg-blue-600 text-white"
											onClick={() => alert(`Enroll in ${course.title}`)}
										>
											Enroll Now
										</Button>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
					<Box className="flex justify-center mt-6">
						<Pagination
							count={totalPages}
							page={page}
							onChange={handlePageChange}
							className="bg-white rounded-lg shadow-md p-2"
							classes={{
								ul: '!flex !gap-2',
								page: '!text-blue-500 !hover:bg-blue-100',
								selected: '!bg-blue-500 !text-white',
							}}
						/>
					</Box>
				</Box>
			</Box>
		</>
	);
}