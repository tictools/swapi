import React from 'react'
import { MainHeader } from '../common/components'
import { Categories } from './categories/categories'

const App = () => {
    return(
        <div>
            <MainHeader title="SWAPI"/>
            <Categories />
        </div>
    )
}

export default App
