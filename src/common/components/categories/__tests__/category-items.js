import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../../test/enzyme-adapter'
import { INITIAL_VALUE } from '../../../constants'
import { CategoryItems } from '../category-items'

createEnzymeAdapter()

describe('ItemsList', () => {
    const EXPECTED = {
        PARAGRAPH_ELEMENT_LENGTH: 2,
        LI_ELEMENT_LENGTH: 3
    }
    const mockedItemsWithNameKey = [
        { name: 'foo-name', quantity: 1},
        { name: 'bar-name', quantity: 2 },
        { name: 'buzz-name', quantity: 3 }
    ]

    const mockedItemsWithTitleKey = [
        { title: 'foo-title', quantity: 1 },
        { title: 'bar-title', quantity: 2 },
        { title: 'buzz-title', quantity: 3 }
    ]

    const mockedFilteredItems = INITIAL_VALUE.LIST

    const mockedLabelsWithName = {
        name: 'name',
        quantity: 'quantity'
    }
    const mockedLabelsWithTitle = {
        title: 'title',
        quantity: 'quantity'
    }

    test('should render elements properly', () => {
        const mockedBaseProps = {
            data: mockedItemsWithNameKey,
            labels: mockedLabelsWithName
        }
        const wrapper = shallow(<CategoryItems {...mockedBaseProps}/>)
        expect(wrapper.find('li')).toHaveLength(EXPECTED.LI_ELEMENT_LENGTH)
    })

    test('should render values properly when category has TITLE key', () => {
        const mockedPropsWithTitleKey = {
            data: mockedItemsWithTitleKey,
            labels: mockedLabelsWithTitle
        }

        const wrapper = shallow(<CategoryItems {...mockedPropsWithTitleKey}/>)
        const elements = wrapper.find('li')
        expect(elements.at(0).text()).toBe('title: foo-titlequantity: 1')
        expect(elements.at(1).text()).toBe('title: bar-titlequantity: 2')
        expect(elements.at(2).text()).toBe('title: buzz-titlequantity: 3')
    })

    test('should render values properly when category has NAME key', () => {
        const mockedPropsWithNameKey = {
            data: mockedItemsWithNameKey,
            labels: mockedLabelsWithName
        }

        const wrapper = shallow(<CategoryItems {...mockedPropsWithNameKey}/>)
        const elements = wrapper.find('li')
        expect(elements.at(0).text()).toBe('name: foo-namequantity: 1')
        expect(elements.at(1).text()).toBe('name: bar-namequantity: 2')
        expect(elements.at(2).text()).toBe('name: buzz-namequantity: 3')
    })
})
