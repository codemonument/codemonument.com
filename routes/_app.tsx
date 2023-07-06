import {asset, Head} from '$fresh/runtime.ts';
import {AppProps} from '$fresh/src/server/types.ts';

export default function App({Component}: AppProps) {
	return (
		<html>
			<Head>
				<title>CodeMonument</title>
				<link rel="stylesheet" href={asset('global.css')} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body class="background-gradient">
				<Component />
			</body>
		</html>
	);
}
