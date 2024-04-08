import Image from 'next/image';
import { Architects_Daughter, Shadows_Into_Light_Two } from 'next/font/google';
import { cn } from '@/lib/utils';

const architectsDaughter = Architects_Daughter({ subsets: ['latin'], weight: ['400'] });
const shadowsIntoLightTwo = Shadows_Into_Light_Two({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
	return (
		<main className={cn('bg-main-600 flex min-h-screen flex-col items-center justify-center p-24', architectsDaughter.className)}>
			<Image className="-mb-16" src="/hat.png" alt="" height="500" width="500" />
			<div className="text-accent-500 text-6xl">Murasaki</div>
		</main>
	);
}
