import { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
	const [isMobile, setIsMobile] = useState(false)
	
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 500px)');
		setIsMobile(mediaQuery.matches);
		const handleMediaQueryChange = (event) => { setIsMobile(event.matches); }
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		return () => { mediaQuery.removeEventListener('change', handleMediaQueryChange); }
	}, [])

	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero isMobile={isMobile} />
				</div>

				<About />
				<Experience />
				<Tech isMobile={isMobile} />
				<Works />
				{/*<Feedbacks />*/}

				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App
