import '../styles/globals.css';
import Electronics from '../components/Electronics';
import Womens from '../components/Womens';
import { cards } from '/components/cards.js';
import Carousel from '../components/Carousel';
import carouselData from '../components/carouselData';


function MyApp({ Component, pageProps }) {

	return (
		<>
			<div>
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">BRAND DEALS FOR WOMEN</h1>
				<Carousel data={carouselData} />
			</div>
			{/* <div>
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">ELECTRONICS</h1>
				<Electronics cards={cards} />
			</div> */}
			{/* <div className="womens">
				<h1 className='text-1xl font-bold mb-1'>Womens sections</h1>
				<Womens cards={cards}/>
			</div> */}

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;





