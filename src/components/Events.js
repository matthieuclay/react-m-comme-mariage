import React from 'react';

const Events = () => {
	return (
		<div className='events'>
			<div className='events-details'>
				<span>Organisation de mariages, d'événements et de fêtes</span>
				<p>
					Chez M comme Mariage, nous fournissons le meilleur en
					matière d'organisation, de production et de conception de
					mariages à Béthune, Le Touquet et Lille.
				</p>
			</div>

			<div className='event'>
				<div className='event-detail'>
					<h3>MARIAGES</h3>
					<img src='./assets/img/7.jpg' alt='event' />
					<span>Organisation de mariages à Béthune</span>
					<p>
						En tant qu'expérience de service complet, nous
						contrôlons tous les aspects de de votre mariage, de la
						planification à l'exécution. Ce service comprend la
						conception, la planification et la gestion.
					</p>
				</div>

				<div className='event-detail'>
					<h3>ÉVÉNEMENTS D'ENTREPRISES</h3>
					<img src='./assets/img/6.jpg' alt='event' />
					<span>Événements d'entreprises à Béthune</span>
					<p>
						Nous sommes spécialisés dans l'organisation d'événements
						à Béthune, que ce soit des événements, les lancements de
						produits, les soirées de gala et plus encore. Notre site
						services comprennent la planification, la conception et
						la gestion.
					</p>
				</div>

				<div className='event-detail'>
					<h3>FÊTES</h3>
					<img src='./assets/img/2.jpg' alt='event' />
					<span>Anniversaires et fêtes à Béthune</span>
					<p>
						Profitez-en sans vous soucier des détails. Il est
						important pour nous que cette fête soit la vôtre et que
						vous la viviez comme si vous étiez un invité ! Nos
						organisateurs de fêtes à Béthune, Le Touquet et à Lille
						se feront un plaisir de vous conseiller.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Events;
