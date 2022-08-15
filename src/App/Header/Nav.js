function Nav(props) {
	let nav = props.nav;
	const navItem = nav.map(item => <li key={item.link}><a href={item.link}>{item.text}</a></li>)
	return(
		<div>
			<nav>
				<ul className="main-navigation">
					{navItem}
				</ul>
			</nav>
		</div>
	)
}

export default Nav;