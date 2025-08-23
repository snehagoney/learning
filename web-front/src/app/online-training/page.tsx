import {
	Container,
	Typography,
	Button,
	Box,
	Grid,
} from '@mui/material';
import Chatbot from '@/components/Chatbot';



export default function OnlineTraining() {

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
			<Box className="py-[80px]">
				<Container>
					<Box className="text-center ">
						<Typography variant="h4" className="mb-5">
							Our Online Training Programs
						</Typography>
						<Typography variant="subtitle1" className="mb-10">
							Explore our comprehensive online training programs designed to enhance your skills and knowledge in various domains.
						</Typography>
					</Box>
					<Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Box
								component="img"
								className="w-[300px] h-auto"
								src="/Images/wrkng-person.jpg"
								alt="Banner"
								
							/>
							<Typography variant="h6" className="mt-3 mb-2">
								Full Stack Development
							</Typography>
						</Grid>
					</Grid>

				</Container>
			</Box>
			<Box className="bg-purple-100 py-10 w-full">
				<Container>
					<Box className="text-center">
						<Typography variant="h4" className="mb-5">
							Chat with Our AI Assistant
						</Typography>
						<Typography variant="subtitle1" className="mb-10">
							Get instant answers to your queries and assistance with our AI-powered chatbot.
						</Typography>
					</Box>
					<Chatbot />
				</Container>
			</Box>
		</>


	);
} 1