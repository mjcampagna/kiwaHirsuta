import Link from 'next/link'

export default () => (
	<div>
		<p>Home</p>
		<Link href="index">
			<a>Home</a>
		</Link>
		<Link href="about">
			<a>About</a>
		</Link>
	</div>
)
