import Image from 'next/image';

import { cn } from '@/lib/utils';

export default function Home() {
	return (
		<main className={cn('flex min-h-screen flex-col items-center justify-center bg-main-900 p-24')}>
			<Image className="-mb-16" src="/hat.png" alt="" height="500" width="500" />
			<div className="text-4xl text-accent-500">murasaki</div>
		</main>
	);
}
