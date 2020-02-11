import React, { lazy, Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Header from 'components/Header'
import Loading from 'components/Loading'

import './App.css'

const Home = lazy(() => import('pages/Home'))
const Events = lazy(() => import('pages/Events'))
const News = lazy(() => import('pages/News'))
const Services = lazy(() => import('pages/Services'))

const App: React.FC = () => {
	return (
		<Router>
		<div className='App'>
			<Header />
			<Suspense fallback={<Loading />}>
				 <Switch>
					<Route path='/eventos'>
						<Events />
					</Route>
					<Route path='/noticias'>
						<News />
					</Route>
					<Route path='/servicios'>
						<Services />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Suspense>
		</div>
	</Router>
	)
}

export default App

