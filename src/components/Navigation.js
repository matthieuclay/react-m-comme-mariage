import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav className='navigation'>
			<ul>
				<li>
					<NavLink
						to='/'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}
					>
						accueil
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/events'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}
					>
						événements
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/about'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}
					>
						à propos
					</NavLink>
				</li>

				<li>
					<NavLink
						to='/contact'
						className={(nav) => (nav.isActive ? 'nav-active' : '')}
					>
						contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
