import React, { Suspense } from 'react'
import { Router, RouteComponentProps } from '@reach/router'

import Header from 'components/Header'
import Loading from 'components/Loading'

import './App.css'

const Home = React.lazy(() => import('pages/Home'))
const Events = React.lazy(() => import('pages/Events'))
const News = React.lazy(() => import('pages/News'))
const Services = React.lazy(() => import('pages/Services'))

const App: React.FC = () => {
	return (
		<div className='App'>
			<Header />
			<Suspense fallback={<Loading />}>
				<Router>
					<RouterPage path='/' pageComponent={<Home />} default />
					<RouterPage path='/eventos' pageComponent={<Events />} />
					<RouterPage path='/noticias' pageComponent={<News />} />
					<RouterPage path='/servicios' pageComponent={<Services />} />
				</Router>
			</Suspense>
		</div>
	)
}

export default App

const RouterPage = (props: { pageComponent: JSX.Element } & RouteComponentProps) => props.pageComponent
