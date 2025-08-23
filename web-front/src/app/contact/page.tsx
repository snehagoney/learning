"use client";
import { TextField, Button, Box, Typography, Container } from '@mui/material';
import clsx from 'clsx';

export default function Contact() {
	return (
		<>
			<Box className="bg-purple-600 w-full py-9">
				<Container className="flex justify-between items-center">
					<Box className="text-white">
						<Typography variant='subtitle2' className='inline-block !mb-5 bg-blue-600 text-white border-l-4 border-white px-5 py-2 lg:border-l-2'>
							25 Years of Experience in web design solutions
						</Typography>
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
			<Box >
				<Container className='py-9'>
					<Typography variant="h4" fontWeight="bold">Contact Us</Typography>
					<TextField label="Name" variant="outlined" fullWidth />
					<TextField label="Email" variant="outlined" fullWidth />
					<TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
					<Button variant="contained" color="primary">Submit</Button>
				</Container>
			</Box>
		</>

	);
}