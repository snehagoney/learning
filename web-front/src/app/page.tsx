"use client";

import React, { useEffect, useState } from 'react';
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




export default function Home() {
	const [courses, setCourses] = useState([]);

	// Fetch courses from FastAPI backend
	useEffect(() => {
		fetch('http://127.0.0.1:8000/courses')
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);

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
			{/* Course Section */}
			<Box className="py-6 bg-purple-100">
				<Container>
					<Box className="flex justify-between mb-6">
						<Typography variant="h4" gutterBottom>
							Comprehensive technology solutions tailored to drive your business forward.
						</Typography>
						<Button variant="contained" endIcon={<ArrowRightAlt />}>
							View All Services
						</Button>
					</Box>
					<Grid container spacing={3}>
						{courses.map((course, index) => (
							<Grid item xs={12} sm={6} md={4} key={index}>
								<Card>
									<CardMedia
										component="img"
										height="140"
										image={`/Images/${course.image}`} // Adjust image path
										alt={course.title}
									/>
									<CardContent>
										<Typography variant="h6" gutterBottom>
											{course.title}
										</Typography>
										<Typography variant="body2" gutterBottom>
											{course.description}
										</Typography>
										<Typography variant="body2" gutterBottom>
											<strong>Duration:</strong> {course.duration}
										</Typography>
										<Typography variant="body2" gutterBottom>
											<strong>Level:</strong> {course.level}
										</Typography>
										<Button variant="contained" className="mt-2 bg-white text-purple">
											Enroll Now
										</Button>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
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