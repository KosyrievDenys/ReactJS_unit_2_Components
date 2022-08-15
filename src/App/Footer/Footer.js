import Nav from '../Header/Nav.js';

function Footer(props) {
	return(
		<div>
			<footer>
				<h3>{props.site_name}</h3>
				<Nav nav={props.data.nav}/>
				{props.data.site}
			</footer>
		</div>
	)
}

export default Footer;