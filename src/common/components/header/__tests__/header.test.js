import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from "../../../../../test/enzyme-adapter";
import { DEFAULT_STRING } from "../../../constants/strings";
import { MainHeader } from '../main-header'

createEnzymeAdapter()

const EXPECTED = {
    DEFAULT_VALUE: DEFAULT_STRING.HEADER,
    SIZE: 1
}
describe('Header', () => {
    test('should render one h1 element', () => {
        const wrapper = shallow(<MainHeader />)
        const title = wrapper.find('h1')
        expect(title).toHaveLength(EXPECTED.SIZE)
    })

    test('should render default title if no one is provided as prop', () => {
        const wrapper = shallow(<MainHeader />)
        const title = wrapper.find('h1').props().children
        expect(title).toBe(EXPECTED.DEFAULT_VALUE)
    })

    test('should render provided title', () => {
        const mockedProps = {
            title: 'foo'
        }
        const wrapper = shallow(<MainHeader {...mockedProps}/>)
        const title = wrapper.find('h1').props().children
        expect(title).toBe('foo')
    })
})
