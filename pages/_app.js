import Head from 'next/head';

import 'styles/globals.css';
import { Nav, Alert } from 'components';

export default App;

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>CRUD</title>

				{/* bootstrap css */}
				<link
					rel='stylesheet'
					href='https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css'
					integrity='sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2'
					crossorigin='anonymous'
				/>
			</Head>

			<div className='app-container bg-light'>
				<Nav />
				<Alert />
				<div className='container pt-4 pb-4'>
					<Component {...pageProps} />
				</div>
			</div>
		</>
	);
}
