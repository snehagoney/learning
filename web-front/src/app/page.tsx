"use client";

import React, { useState } from 'react';
import {
	Box,
	Button,
	Typography,
	Container,
	Card,
	CardContent,
	CardMedia,
} from '@mui/material';
import Grid from '@mui/material/GridLegacy'
import { ArrowRightAlt } from 'node_modules/@mui/icons-material';


const courses = [
	{
		title: 'Python Programming',
		description: 'Learn Python from basics to advanced concepts.',
		duration: '8 weeks',
		level: 'Beginner',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Web Development with React',
		description: 'Build modern web applications using React.js.',
		duration: '10 weeks',
		level: 'Intermediate',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Data Science Fundamentals',
		description: 'Master data analysis and visualization techniques.',
		duration: '12 weeks',
		level: 'Intermediate',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'JavaScript Essentials',
		description: 'Dive into JavaScript for dynamic web development.',
		duration: '6 weeks',
		level: 'Beginner',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Machine Learning Basics',
		description: 'Introduction to machine learning algorithms.',
		duration: '10 weeks',
		level: 'Advanced',
		image: '../Images/wrkng-person.jpg',
	},
	{
		title: 'Full Stack Development',
		description: 'Become a full stack developer with MERN stack.',
		duration: '14 weeks',
		level: 'Advanced',
		image: '../Images/wrkng-person.jpg',
	},
];



export default function Home() {

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
			<Box className="w-full py-9">
				<Container className="flex justify-between items-center">

					<Box
						component="img"
						className=""
						src="/Images/whoarewe.png"
						alt="Banner"
						sx={{ width: '48%', height: 'auto' }}
					/>
					<Box className="text-purple-900" sx={{ width: '48%' }}>
						<Typography variant='caption' className='mb-5' gutterBottom >Who Are We</Typography>
						<Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
							Comprehensive Technology Excellence
						</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> At Winnex Vexa Technology Solutions Pvt Ltd, we are a dynamic team of innovators, engineers, and strategists dedicated to building smart, scalable, and future-ready software solutions. As a fast-growing startup with a global vision, we specialize in transforming businesses through cutting-edge technology.</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> Our expertise spans custom software development, mobile and web applications, cloud solutions, enterprise integrations, and specialized insurance technology. We don't just build software – we craft digital experiences that drive meaningful business outcomes.</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> Driven by innovation and built on trust, we combine deep technical expertise with an agile mindset to deliver results that truly matter. From initial concept to final execution, we partner closely with our clients to turn ambitious visions into powerful realities.</Typography>

					</Box>
				</Container>
			</Box>
			<Box className="w-full py-9 bg-purple-100">
				<Container>
					<Box className="flex justify-between items-center mb-[50px]">
						<Typography variant='h4' gutterBottom className='w-half'>
							Comprehensive technology solutions tailored to drive your business forward.
						</Typography>
						<Button variant="contained" endIcon={<ArrowRightAlt />} href="#contained-buttons">
							View All Services
						</Button>
					</Box>
					<Box className="p-4">
						<Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
							{courses.map((course, index) => (
								<Grid item xs={2} sm={4} md={4} key={index}>
									<Card className="max-w-sm mx-auto shadow-md">
										<CardMedia
											component="img"
											className="h-36 object-cover"
											image={course.image}
											alt={course.title}
										/>
										<CardContent className="text-center">
											<Typography variant="h6" className="font-bold !mb-3">
												{course.title}
											</Typography>
											<Typography variant="body2" className="!mb-3">
												{course.description}
											</Typography>
											<Typography variant="body2" className="!mb-3">
												<strong>Duration:</strong> {course.duration}
											</Typography>
											<Typography variant="body2" className="!mb-3">
												<strong>Level:</strong> {course.level}
											</Typography>
											<Button
												variant="contained"
												className="mt-2 !bg-white-500  !text-purple"
											>
												Enroll Now
											</Button>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
					</Box>
				</Container>
			</Box>
			<Box className="w-full py-9">
				<Container className="flex justify-between items-center">
					<Box className="text-purple-900" sx={{ width: '48%' }}>
						<Typography variant='caption' className='mb-5' gutterBottom >Who Are We</Typography>
						<Typography variant="h4" sx={{ fontWeight: 'bold' }} gutterBottom>
							Comprehensive Technology Excellence
						</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> At Winnex Vexa Technology Solutions Pvt Ltd, we are a dynamic team of innovators, engineers, and strategists dedicated to building smart, scalable, and future-ready software solutions. As a fast-growing startup with a global vision, we specialize in transforming businesses through cutting-edge technology.</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> Our expertise spans custom software development, mobile and web applications, cloud solutions, enterprise integrations, and specialized insurance technology. We don't just build software – we craft digital experiences that drive meaningful business outcomes.</Typography>
						<Typography variant='body2' gutterBottom className='mb-5'> Driven by innovation and built on trust, we combine deep technical expertise with an agile mindset to deliver results that truly matter. From initial concept to final execution, we partner closely with our clients to turn ambitious visions into powerful realities.</Typography>

					</Box>
					<Box
						component="img"
						className=""
						src="/Images/whoarewe.png"
						alt="Banner"
						sx={{ width: '48%', height: 'auto' }}
					/>

				</Container>
			</Box>
		</>
	);
}