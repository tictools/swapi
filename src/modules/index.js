import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, MainHeaderWithRouter as MainHeader } from '../common/components'
import { DEFAULT_STRING, ROUTES} from '../common/constants'
import { Categories } from './categories/categories'
import { Detail } from './detail/detail'
import styles from './index.css'

const App = () => {
    return(
        <div className={styles['container']}>
            <Router >
                <Route  path={ROUTES.HOME}>
                    <MainHeader title={DEFAULT_STRING.HEADER}/>
                </Route>
                <Switch>
                    <Route path={ROUTES.HOME} exact>
                        <Home />
                    </Route>
                    <Route path={ROUTES.CATEGORIES}>
                        <Categories />
                    </Route>
                    <Route path={ROUTES.DETAIL_CARD}>
                        <Detail />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
