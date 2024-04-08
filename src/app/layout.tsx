import type { Metadata } from 'next';
import { Architects_Daughter, Exo_2 } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const architectsDaughter = Architects_Daughter({ subsets: ['latin'], weight: ['400'] });
const exo2 = Exo_2({ subsets: ['latin'] });
const grammastile = localFont({
	src: '../components/fonts/Grammastile.woff2',
});

export const metadata: Metadata = {
	title: 'Murasaki 紫',
	description: '',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="icon" href="/icon.jpg" />
			<body className={grammastile.className}>{children}</body>
		</html>
	);
}
