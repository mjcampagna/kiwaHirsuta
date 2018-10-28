import React, { Component, Fragment } from 'react'
import Meta from '../../components/Meta'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'
import 'normalize.css'
import './style.scss'

Router.onRouteChangeStart = () => {
	NProgress.start()
}
Router.onRouteChangeComplete = () => {
	NProgress.done()
}
Router.onRouteChangeError = () => {
	NProgress.done()
}

export default class Page extends Component {
	render() {
		return (
			<Fragment>
				<Meta />
				{this.props.children}
			</Fragment>
		)
	}
}
