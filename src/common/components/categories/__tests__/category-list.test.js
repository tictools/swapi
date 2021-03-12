import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../../test/enzyme-adapter'
import { CategoryList } from '../category-list'

createEnzymeAdapter()

describe('CategoryList', () => {
    const EXPECTED = {
        LENGTH: 1
    }

    const mockedBaseProps = {
        title: 'foo',
        children: 'children'
    }

    test('should render all elements properly', () => {
        const wrapper = shallow(<CategoryList {...mockedBaseProps}/>)
        const header = wrapper.find('h2')
        const list = wrapper.find('ul')

        expect(header).toHaveLength(EXPECTED.LENGTH)
        expect(list).toHaveLength(EXPECTED.LENGTH)
        expect(list.hostNodes().exists()).toBeTruthy()
    })
})
