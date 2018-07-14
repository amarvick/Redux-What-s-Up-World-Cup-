import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'

import Layout from './js/components/Layout'
import store from './js/store'

const root = document.getElementById('root')

ReactDOM.render(
    <Provider store = {store}>
        <Layout />
    </Provider>, root
);