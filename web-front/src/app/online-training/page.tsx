import { Container, Grid, Typography, Button, Box, List, ListItem, ListItemIcon, ListItemText, TextField, Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function OnlineTraining() {
	const services = [
		{ slug: "react-js-development", title: "React js Development", image: "amazing.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "react-native-development", title: "React Native Development", image: "amazing2.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "aitools-development", title: "AI Tools Development", image: "amazing3.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "front-end-development", title: "Front-end development", image: "amazing4.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "sap-development", title: "SAP Development", image: "amazing5.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "web-app-development", title: "Web app Development", image: "amazing6.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "mobile-app-development", title: "Mobile app Development", image: "amazing7.png", description: "Focus provide beautiful layout client look make import" },
		{ slug: "git-and-githubs", title: "Git & GitHub", image: "amazing8.png", description: "Focus provide beautiful layout client look make import" },
	];

	const teamMembers = [
		{ name: 'Richard C. Harrison', role: 'Senior Web Designer', image: '../images/team.png' },
		{ name: 'Donna C. Ludwig', role: 'Web Developer', image: '../images/team2.png' },
		{ name: 'Beulah M. Rose', role: 'SEO Expert', image: '../images/team3.png' },
		{ name: 'Steven F Spicer', role: 'UI/UX Expert', image: '../images/team4.png' },
		{ name: 'Donna C. Ludwig', role: 'Web Developer', image: '../images/team2.png' },
	];

	const TeamMem = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 424,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	};

	const techItems = [
		{ label: "Bootstrap", imgSrc: "/images/bootstrap.png" },
		{ label: "HTML", imgSrc: "/images/html.png" },
		{ label: "CSS", imgSrc: "/images/css.png" },
		{ label: "JS", imgSrc: "/images/js.png" },
		{ label: "Angular", imgSrc: "/images/angular.png" },
		{ label: "React JS", imgSrc: "/images/react.png" },
		{ label: "Gulp", imgSrc: "/images/gulpjs.png" },
	];

	const FeatureList = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 6,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 5,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 4,
				},
			},
			{
				breakpoint: 554,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 424,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	const feedbackItems = [
		{
			name: "Nicholas R. Gomez",
			position: "Medical Officers",
			message: "Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore",
			img: "/images/team.png",
		},
		{
			name: "James R. Lawrence",
			position: "Junior Manager",
			message: "Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore",
			img: "/images/team.png",
		},
		{
			name: "Jonson R. Lawrence",
			position: "SR Manager",
			message: "Sed ut perspiciatis unde omnis natus error voluptatem accusantium dolore laudantuce totam rem aperiam eaque inventore",
			img: "/images/team.png",
		},
	];

	const reviews = {
		dots: false,
		infinite: true,
		speed: 400,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 499,
				settings: {
					slidesToShow: 1,
				},
			},
		]
	};

	return (
		<Box className="bg-gray-100">
			<Box component="section" className="bg-[#0E1B38] pt-[170px] pb-[142px] 2xl:pt-[85px] 2xl:pb-[85px] xl:pt-[75px] xl:pb-[75px] lg:pt-[65px] lg:pb-[65px] md:pt-[55px] md:pb-0 sm:pt-[45px] sm:pb-0">
				<Container>
					<Grid container spacing={4} className="flex justify-between items-center relative">
						<Grid item xs={12} md={6} className="max-w-[730px] 2xl:max-w-[540px] lg:max-w-[440px] sm:max-w-full">
							<Typography variant="subtitle1" className="inline-block bg-[#1818C8] text-white rounded-r-md border-l-4 border-white py-[13px] px-5 mb-[30px] 2xl:mb-5 lg:border-l-2 lg:py-2.5 lg:px-3.5 lg:mb-[30px]">
								25 Years of Experience in web design solutions
							</Typography>
							<Typography variant="h2" className="mb-[30px] text-white 2xl:mb-5">
								Web Development Service Provider
							</Typography>
							<Typography variant="body1" className="text-[16px] leading-[29px] mb-[50px] pl-[30px] border-l-4 border-[#8C52FF] text-white 2xl:leading-6 2xl:pl-5 lg:text-sm lg:leading-[21px] lg:mb-[30px] lg:pl-[15px] lg:border-l-2">
								Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore dolore magna aliquauis ipsum suspendisse ultrices gravida risus
							</Typography>
							<Button variant="contained" className="inline-block" endIcon={<img src="../images/2arw.png" alt="arrow" />}>
								<a href="#">Download Now</a>
							</Button>
						</Grid>
						<Grid item xs={12} md={6} className="absolute -right-[165px] -top-[95px] 2xl:right-0 2xl:top-[-21px] 2xl:w-[682px] lg:w-[610px] lg:top-[-33px] lg:right-[-10px] md:w-[541px] sm:w-[400px] sm:static sm:mx-auto sm:-mb-1.5 xs:w-[300px]">
							<Box component="img" src="../images/bnr_img.png" alt="banner" className="w-full" />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="pt-[140px] pb-[70px] 2xl:pt-[100px] 2xl:pb-[70px] xl:pt-20 xl:pb-[60px] lg:pt-[65px] lg:pb-[55px] md:pt-[55px] md:pb-[45px] sm:pt-[45px] sm:pb-[45px]">
				<Container>
					<Grid container spacing={4} className="flex justify-between items-center flex-wrap">
						<Grid item xs={12} md={6} className="flex items-end relative 2xl:flex-[0_0_490px] 2xl:max-w-[490px] lg:flex-[0_0_45%] lg:max-w-[45%] md:flex-[0_0_400px] md:max-w-[400px] md:pt-10 md:mb-[30px] md:mx-auto xs:flex-[0_0_300px] xs:max-w-[300px]">
							<Box component="img" src="../images/frontend-about.jpg.png" alt="web design" className="w-full" />
							<Box className="bg-[#1818C8] p-[55px] w-[368px] absolute top-0 -right-[85px] 2xl:p-[35px] 2xl:w-[332px] 2xl:-right-[62px] lg:p-[25px] lg:w-[244px] lg:-right-[50px] md:p-[15px] md:w-[200px] md:-right-[10px] md:-top-5 sm:hidden">
								<Box component="img" src="../images/36.png" alt="icon" className="mb-10 2xl:mb-[25px] lg:mb-[15px] w-full lg:w-auto" />
								<Typography variant="h6" className="text-white font-medium text-[24px] leading-9 2xl:text-lg 2xl:leading-7 lg:text-sm lg:leading-[21px]">
									Years of experience in web design solutions
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} md={6} className="flex-[0_0_565px] max-w-[565px] 2xl:flex-[0_0_525px] 2xl:max-w-[525px] lg:flex-[0_0_45%] lg:max-w-[45%] sm:flex-[0_0_100%] sm:max-w-full">
							<Box className="flex items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
								<Box className="flex items-center mr-[15px] 2xl:mr-2.5">
									<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
									<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
									<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
								</Box>
								<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
									About digital solutions
								</Typography>
							</Box>
							<Typography variant="h2" className="mb-5 2xl:mb-[15px]">
								We’re Award-winning web design studio
							</Typography>
							<Typography variant="body1" className="leading-7 mb-[30px] 2xl:leading-[25px] 2xl:mb-[25px]">
								Our web design company specializes the professional creation unique sites. Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects, making them modern and high-tech. We create only selling websites – this is an achievement by drawing the design and working out usability.
							</Typography>
							<Box className="flex items-center mb-[30px] 2xl:mb-5">
								<Box component="img" src="../images/clap.png" alt="clap" className="mr-[35px] lg:mr-[30px] md:w-[50px]" />
								<Box component="img" src="../images/3658.png" alt="icon" className="mr-[35px] lg:mr-[30px] md:w-[140px]" />
								<Typography variant="h6" className="flex-[0_0_131px] max-w-[131px] font-black 2xl:flex-[0_0_120px] 2xl:max-w-[120px]">
									Clients Satisfaction
								</Typography>
							</Box>
							<Button variant="contained" className="inline-block" endIcon={<img src="../images/2arw.png" alt="arrow" className="lg:h-[10px] lg:ml-[3px]" />}>
								<a href="#">Learn More About Us</a>
							</Button>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="py-[100px] bg-[#8c52ff24] 2xl:py-[85px] xl:py-[75px] lg:py-[65px] md:py-[55px] sm:py-[45px]">
				<Container>
					<Box className="text-center mb-[60px] 2xl:mb-[45px] lg:mb-[35px] md:mb-[25px]">
						<Box className="flex justify-center items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
							<Box className="flex items-center mr-5 2xl:mr-2.5">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
							<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] mr-5 underline 2xl:text-lg lg:text-sm">
								Technology Features
							</Typography>
							<Box className="flex items-center">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
						</Box>
						<Typography variant="h2" className="mb-0">
							Full Potential Modern Features
						</Typography>
					</Box>
				</Container>
			</Box>

			<Box component="section" className="py-[100px] 2xl:py-[85px] xl:py-[75px] lg:py-[65px] md:py-[55px] sm:py-[45px]">
				<Container>
					<Grid container spacing={4} className="flex justify-between items-center flex-wrap">
						<Grid item xs={12} md={6} className="flex-[0_0_610px] max-w-[610px] 2xl:flex-[0_0_520px] 2xl:max-w-[520px] lg:flex-[0_0_47%] lg:max-w-[47%] md:flex-[0_0_49%] md:max-w-[49%] sm:flex-[0_0_100%] sm:max-w-full sm:mb-[30px]">
							<Box className="text-left mb-10 2xl:mb-[30px] md:mb-[15px]">
								<Box className="flex items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
									<Box className="flex items-center mr-[15px] 2xl:mr-2.5">
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
									</Box>
									<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
										Mission and Vision
									</Typography>
								</Box>
								<Typography variant="h2" className="mb-0">
									We aim to deliver quality creative solutions
								</Typography>
							</Box>
							<Typography variant="body1" className="mb-10 leading-7 2xl:mb-[30px] md:mb-5 md:leading-[23px]">
								Our web design company specializes the professional creation unique sites. Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects
							</Typography>
							<Button variant="contained" className="bg-transparent border border-[#C1C3CB] text-[#293043]" endIcon={<img src="../images/2arwblue.png" alt="arrow" className="lg:h-[10px] lg:ml-[3px]" />}>
								<a href="#">Learn More About Us</a>
							</Button>
						</Grid>
						<Grid item xs={12} md={6} className="flex-[0_0_568px] max-w-[568px] 2xl:flex-[0_0_50%] 2xl:max-w-[50%] md:flex-[0_0_400px] md:max-w-[400px] md:mx-auto xs:flex-[0_0_300px] xs:max-w-[300px]">
							<Box component="img" src="../images/aim.png" alt="aim" className="w-full" />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="py-[100px] mb-[150px] 2xl:py-[85px] 2xl:mb-[110px] xl:py-[75px] xl:mb-[55px] lg:py-[65px] lg:mb-0 md:py-[55px] sm:py-[45px]">
				<Container>
					<Box className="text-center mb-[60px] 2xl:mb-[45px] lg:mb-[35px] md:mb-[25px]">
						<Box className="flex justify-center items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
							<Box className="flex items-center mr-5 2xl:mr-2.5">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
							<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] mr-5 underline 2xl:text-lg lg:text-sm">
								Our Popular Services
							</Typography>
							<Box className="flex items-center">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
						</Box>
						<Typography variant="h2" className="mb-0">
							Amazing Web Design Service
						</Typography>
					</Box>
					<Grid container spacing={4} className="flex flex-wrap -mx-[15px]">
						{services.map(({ slug, title, image, description }, index) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={index} className="flex-[calc(100%/4-30px)] max-w-full mx-[15px] text-center p-[30px_20px_40px] mb-[30px] shadow-[1px_6px_20px_0px_#6c6c6c4d] rounded-md 2xl:flex-[calc(100%/3-30px)] md:flex-[calc(100%/2-20px)] md:p-[20px_15px_25px] md:mb-5 md:mx-2.5 xs:flex-[calc(100%/1-20px)] xs:mx-0">
								<Box component="img" src={`../images/${image}`} alt="service" className="mb-5 w-full md:w-10 md:mx-auto" />
								<Typography variant="h6" className="underline mb-[25px] text-[20px] 2xl:mb-5 2xl:text-lg md:mb-[7px] md:text-[15px] xs:text-[12px]">
									{title}
								</Typography>
								<Typography variant="body2" className="leading-7 mb-[15px] md:leading-[21px] md:mb-[10px] xs:text-[11px]">
									{description}
								</Typography>
								<Button className="text-[#8C52FF] flex justify-center items-center underline" endIcon={<img src="../images/2arwprple.png" alt="arrow" className="ml-2.5 md:ml-1.5 md:w-[10px]" />}>
									<a href={`/services/${slug}`}>Read More</a>
								</Button>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="bg-[#0E1B38] py-[100px_0_135px] 2xl:py-[85px_0_95px] xl:py-[85px_0_75px] lg:py-[85px_0_55px] md:py-[45px_0_45px]">
				<Container className="w-[1660px] mx-auto 2xl:w-[1500px] xl:w-[1260px] lg:w-[1160px] md:w-[950px] sm:w-full sm:px-[15px]">
					<Grid container spacing={4}>
						<Grid item xs={12} className="-mt-[221px] mb-[100px] 2xl:mb-[75px] xl:mb-[50px] lg:mb-[35px] md:mt-0 md:mb-[10px]">
							<Box className="flex justify-between items-center flex-wrap -mx-[15px]">
								{['dev1.png', 'dev2.png', 'dev3.png', 'dev4.png', 'dev5.png', 'dev6.png'].map((img, idx) => (
									<Box key={idx} component="img" src={`../images/${img}`} alt="dev" className="flex-[calc(100%/3-30px)] max-w-full mx-[15px] mb-5 md:flex-[calc(100%/2-30px)] xs:flex-[calc(100%/1-20px)] xs:mx-0" />
								))}
							</Box>
						</Grid>
						<Grid item xs={12} className="w-[1200px] mx-auto 2xl:w-[865px] xl:w-[80%] sm:w-full">
							<Box className="text-center mb-0">
								<Box className="flex justify-center items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
									<Box className="flex items-center mr-5 2xl:mr-2.5">
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#8C52FF]" />
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#8C52FF]" />
										<Box className="w-[5px] h-[5px] rounded-full bg-[#8C52FF]" />
									</Box>
									<Typography variant="subtitle2" className="font-bold text-[#8C52FF] text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
										Company Statistics
									</Typography>
									<Box className="flex items-center ml-5">
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#8C52FF]" />
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#8C52FF]" />
										<Box className="w-[5px] h-[5px] rounded-full bg-[#8C52FF]" />
									</Box>
								</Box>
								<Typography variant="h2" className="text-white w-[1055px] mx-auto leading-[71px] 2xl:w-full 2xl:leading-[50px] xl:leading-[45px] md:leading-[38px]">
									We're the best web development agency much more achievement
								</Typography>
							</Box>
							<Box className="flex justify-between mb-[100px] 2xl:mb-[70px] xl:mb-[50px] md:mb-10 md:flex-wrap md:justify-center">
								{[
									{ img: 'vect1.png', value: '2365+', text: 'Projects complete' },
									{ img: 'vect2.png', value: '9632+', text: 'Trusted Global Clients' },
									{ img: 'vect3.png', value: '8504+', text: 'Expert Team Member' },
									{ img: 'vect4.png', value: '6763+', text: 'Awards Win' },
								].map((stat, idx) => (
									<Box key={idx} className="flex-[calc(100%/4)] max-w-full text-center md:flex-[calc(100%/2-20px)] md:mx-2.5 md:mb-[30px] xs:flex-[calc(100%/1-20px)] xs:mx-0 xs:mb-5">
										<Box component="img" src={`../images/${stat.img}`} alt="stat" className="2xl:w-[45px] xl:w-[40px] md:w-[40px] md:mx-auto" />
										<Typography variant="h3" className="text-white text-[45px] my-[35px_0_10px] 2xl:text-[35px] 2xl:my-[25px_0_10px] xl:text-[30px] md:text-[25px] md:my-[20px_0_10px] sm:text-[22px] sm:my-[15px_0_6px]">
											{stat.value}
										</Typography>
										<Typography variant="body2" className="text-white leading-5">
											{stat.text}
										</Typography>
									</Box>
								))}
							</Box>
							<Box className="bg-[#8C52FF] w-[810px] mx-auto flex justify-between items-center p-[30px_50px] 2xl:w-[770px] 2xl:p-[20px_40px] xl:w-[90%] xl:p-[18px_30px] md:w-[80%] md:p-[15px_20px] md:flex-wrap xs:w-full xs:text-center">
								<Typography variant="h4" className="text-white text-[24px] 2xl:text-xl xl:leading-[25px] md:text-lg md:mb-[15px] md:w-full xs:text-base">
									Interested! Let’s work together
								</Typography>
								<Button variant="contained" className="bg-transparent border border-white text-white px-[25px] 2xl:px-[18px] xl:px-[15px] mx-auto" endIcon={<img src="../images/2arw.png" alt="arrow" className="lg:h-[10px] lg:ml-[3px]" />}>
									<a href="#">Get Started Now</a>
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="py-[100px] 2xl:py-[75px] lg:py-[65px] md:py-[55px] sm:py-[45px]">
				<Container>
					<Grid container spacing={4} className="flex justify-between items-center flex-wrap">
						<Grid item xs={12} md={6} className="flex-[0_0_512px] max-w-[512px] 2xl:flex-[0_0_48%] 2xl:max-w-[48%] lg:flex-[0_0_50%] lg:max-w-[50%] sm:flex-[0_0_100%] sm:max-w-full sm:mb-[30px]">
							<Box className="text-left mb-[30px] 2xl:mb-5">
								<Box className="flex items-center mb-5 2xl:mb-[15px] lg:mb-5">
									<Box className="flex items-center mr-[15px] 2xl:mr-2.5">
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
									</Box>
									<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
										Why Choose Us
									</Typography>
								</Box>
								<Typography variant="h2" className="mb-0">
									Web design company that you can trust
								</Typography>
							</Box>
							<List>
								{[
									{ title: 'Competitive rates', desc: 'We use strategic marketing tactics that have been proven programming for most complex functions.' },
									{ title: 'Premium Development', desc: 'An emphasis on cutting-edge design and modern usability standards strategic marketing tactics proven.' },
									{ title: 'Retina Ready & Super Flexible', desc: 'Devices show more pixels square inch resulting sharperes images Content moves freely across all screen' },
									{ title: 'No contracts needed', desc: 'You can increase, pause or stop our services at any time leaving you completely marketing budgets.' },
								].map((item, idx) => (
									<ListItem key={idx} className="mb-10 last:mb-0 2xl:mb-[30px] xl:mb-[20px]">
										<ListItemIcon className="bg-[#8C52FF] h-11 w-11 flex items-center justify-center rounded-full mr-5 2xl:h-10 2xl:w-10 2xl:mr-[15px] xl:h-[35px] xl:w-[35px] xl:mr-[15px]">
											<CheckCircleIcon className="text-white text-[22px] 2xl:text-[20px] xl:text-[15px]" />
										</ListItemIcon>
										<ListItemText
											primary={<Typography variant="h5" className="mb-5 2xl:mb-2.5">{item.title}</Typography>}
											secondary={<Typography variant="body2" className="text-[#696E7B]">{item.desc}</Typography>}
										/>
									</ListItem>
								))}
							</List>
						</Grid>
						<Grid item xs={12} md={6} className="flex-[0_0_520px] max-w-[520px] 2xl:flex-[0_0_50%] 2xl:max-w-[50%] md:flex-[0_0_400px] md:max-w-[400px] md:mx-auto xs:flex-[0_0_300px] xs:max-w-[300px]">
							<Box component="img" src="../images/chartboygril.png" alt="chart" className="w-full" />
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="bg-[#F7F9FD] py-[120px] 2xl:py-[85px] xl:py-[75px] lg:py-[65px] md:py-[55px] sm:py-[45px]">
				<Container>
					<Grid container spacing={4} className="flex justify-between items-center flex-wrap">
						<Grid item xs={12} md={6} className="flex-[calc(100%/2)] max-w-full">
							<Box className="flex flex-wrap justify-between -mx-[20px] lg:-mx-[15px] md:-mx-2.5">
								{[
									{ img: 'support1.png', text: 'Responsive design' },
									{ img: 'support2.png', text: 'Powerful Customization' },
									{ img: 'support3.png', text: 'Cool & modern animations' },
									{ img: 'support4.png', text: 'SEO Friendly Coding' },
									{ img: 'support5.png', text: 'Best Technical supports' },
									{ img: 'support6.png', text: 'Varied Layouts & parallax' },
								].map((item, idx) => (
									<Box key={idx} className="flex-[calc(100%/3-40px)] max-w-full bg-white rounded-md p-[40px_25px] mx-5 mb-[30px] text-center lg:flex-[calc(100%/3-30px)] lg:mx-[15px] lg:p-[30px_20px] md:flex-[calc(100%/3-20px)] md:p-[20px_15px] md:mx-2.5 sm:flex-[calc(100%/2-20px)]">
										<Box component="img" src={`../images/${item.img}`} alt="support" className="mb-[15px] md:w-[45px] md:mx-auto" />
										<Typography variant="body2" className="font-bold text-[#293043] md:text-[12px]">
											{item.text}
										</Typography>
									</Box>
								))}
							</Box>
						</Grid>
						<Grid item xs={12} className="ml-[100px] flex-[0_0_558px] 2xl:ml-[33px] 2xl:flex-[0_0_550px] lg:ml-[30px] lg:flex-[0_0_45%] sm:ml-0 sm:flex-[0_0_100%] sm:max-w-full">
							<Box className="text-left mb-0">
								<Box className="flex items-center mb-5 2xl:mb-[15px] lg:mb-5">
									<Box className="flex items-center mr-[15px] 2xl:mr-2.5">
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
										<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
									</Box>
									<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
										Support & Features
									</Typography>
								</Box>
								<Typography variant="h2" className="mb-10 2xl:mb-[25px] lg:mb-5">
									Amazing web design development features
								</Typography>
								<Typography variant="body1" className="leading-[30px] mb-[30px] 2xl:leading-[25px] 2xl:mb-5">
									Our web design company specializes the professional creation unique sites. Our team constantly monitors the emergence of new technologies that we are not afraid to implement in web projects, making them modern and high-tech. We create only selling websites – this is an achievement by drawing the design and working out usability.
								</Typography>
								<Button variant="contained" className="inline-block" endIcon={<img src="../images/2arw.png" alt="arrow" className="lg:h-[10px] lg:ml-[3px]" />}>
									<a href="#">Learn More About Us</a>
								</Button>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>

			<Box component="section" className="py-[100px] 2xl:py-[85px] xl:py-[75px] lg:py-[65px] md:py-[55px] sm:py-[45px]">
				<Container>
					<Box className="text-center mb-[60px] 2xl:mb-[45px] lg:mb-[35px] md:mb-[25px]">
						<Box className="flex justify-center items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
							<Box className="flex items-center mr-5 2xl:mr-2.5">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
							<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] mr-5 underline 2xl:text-lg lg:text-sm">
								Our Team Member
							</Typography>
							<Box className="flex items-center">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
						</Box>
						<Typography variant="h2" className="mb-0">
							Exclusive Team Member
						</Typography>
					</Box>
				</Container>
			</Box>

			<Box component="section" className="bg-[#F7F9FD] py-[140px] 2xl:py-[115px] xl:py-[90px] lg:py-[55px] md:py-[45px]">
				<Container>
					<Box className="text-center mb-[60px] 2xl:mb-[45px] lg:mb-[35px] md:mb-[25px]">
						<Box className="flex justify-center items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
							<Box className="flex items-center mr-5 2xl:mr-2.5">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
							<Typography variant="subtitle2" className="font-bold text-[#1818C8] text-[20px] leading-[18px] mr-5 underline 2xl:text-lg lg:text-sm">
								Clients Feedback
							</Typography>
							<Box className="flex items-center">
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-[#1818C8]" />
								<Box className="w-[5px] h-[5px] rounded-full bg-[#1818C8]" />
							</Box>
						</Box>
						<Typography variant="h2" className="w-[560px] mx-auto 2xl:w-[70%] lg:w-full">
							3,000+ Positive reviews by our satisfied clients
						</Typography>
					</Box>
					<Box className="flex justify-between items-center bg-[#1818C8] p-[75px_100px] relative 2xl:p-[65px_80px] xl:p-[30px_45px] lg:p-[25px_20px] md:flex-col-reverse md:mb-0 sm:mb-[-285px] xs:mb-0">
						<Box className="w-[600px] text-left mb-0 2xl:w-[515px] xl:w-[490px] lg:w-[60%] md:w-full">
							<Box className="flex items-center mb-5 2xl:mb-[15px] lg:mb-[10px]">
								<Box className="flex items-center mr-[15px] 2xl:mr-2.5">
									<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-white" />
									<Box className="w-[5px] h-[5px] mr-[5px] rounded-full bg-white" />
									<Box className="w-[5px] h-[5px] rounded-full bg-white" />
								</Box>
								<Typography variant="subtitle2" className="font-bold text-white text-[20px] leading-[18px] 2xl:text-lg lg:text-sm">
									Our Newsletter
								</Typography>
							</Box>
							<Typography variant="h2" className="mb-5 text-white 2xl:mb-5">
								Subscribe Our Newsletter to Get More Updates
							</Typography>
							<Typography variant="body1" className="text-white mb-[30px] leading-7 2xl:mb-5 2xl:leading-[21px] lg:text-[13px]">
								Consectetur adipiscing eiusmod tempor incididunt labore et dolores magna aliquae suspendisse ultrices gravid commodo viverra
							</Typography>
							<Box className="relative">
								<TextField
									type="email"
									placeholder="Enter Email"
									variant="outlined"
									className="bg-white w-full h-[60px] rounded-md border-none outline-none px-10 text-[16px] text-[#696E7B] 2xl:h-[50px] 2xl:px-[30px] 2xl:text-sm"
									inputProps={{ className: "h-full" }}
								/>
								<Button
									variant="contained"
									className="absolute right-2 top-[7px] 2xl:right-[-15px] 2xl:top-1.5"
									endIcon={<img src="../images/2arw.png" alt="arrow" className="lg:h-[10px] lg:ml-[3px]" />}
								>
									<a href="#">Subscribe</a>
								</Button>
							</Box>
						</Box>
						<Box component="img" src="../images/newsletter.png" alt="newsletter" className="absolute right-[100px] -bottom-[60px] 2xl:right-[78px] 2xl:-bottom-[50px] 2xl:w-[380px] xl:right-5 xl:-bottom-[52px] xl:w-[35%] lg:right-[20px] lg:w-[34%] md:right-0 md:bottom-0 md:w-[328px] md:mb-[30px] xs:w-[230px] xs:mb-5" />
					</Box>
				</Container>
			</Box>
		</Box>
	);
}