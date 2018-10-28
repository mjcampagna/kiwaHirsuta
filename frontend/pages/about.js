import Link from 'next/link'

export default () => (
	<div>
		<p>About</p>
		<Link href="index">
			<a>Home</a>
		</Link>
		<Link href="about">
			<a>About</a>
		</Link>
	</div>
)
