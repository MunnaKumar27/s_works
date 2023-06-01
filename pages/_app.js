import '../styles/globals.css';
import Carousel from '../components/Electronics';
import Womens from '../components/Womens';
import { cards } from '/components/cards.js';


function MyApp({ Component, pageProps }) {
	return (
		<>
			<div >
				<h1 className="text-1xl font-bold mb-1">Elctronics sections</h1>
				<Carousel cards={cards} />
			</div>
			<div className="womens">
				<h1 className='text-1xl font-bold mb-1'>Womens sections</h1>
				<Womens cards={cards}/>
			</div>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;





