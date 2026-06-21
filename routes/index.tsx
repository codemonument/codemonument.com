import Layout from '@/components/Layout.tsx';
// import 'iconify-icon';
// import {Icon} from '@iconify-icon/react';
import {Icon} from "@iconify/react"w

export default function Home() {
	return (
		<Layout>
			<div class="p-4 mx-auto max-w-screen-md">
				<Icon icon="mdi-light:home" />
				{/* <iconify-icon icon="mdi:home"></iconify-icon> */}
			</div>
		</Layout>
	);
}
