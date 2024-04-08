import type { Metadata } from 'next';
import { Architects_Daughter } from 'next/font/google';
import './globals.css';

const architectsDaughter = Architects_Daughter({ subsets: ['latin'], weight: ['400'] });

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
			<body className={architectsDaughter.className}>{children}</body>
		</html>
	);
}
