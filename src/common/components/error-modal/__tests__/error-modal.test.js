import React from 'react'
import { shallow } from 'enzyme'
import { createEnzymeAdapter } from '../../../../../test/enzyme-adapter'
import { YodaFullIcon } from '../../../icons'
import { ErrorModal } from '../error-modal'

createEnzymeAdapter()

describe('ErrorModal', () => {
    const EXPECTED = {
        SINGLE_ELEMENT: 1,
        PARAGRAPH_ELEMENTS: 2,
    }

    test('should render elements properly', () => {
        const mockedBaseProps = {
            closeErrorModal: jest.fn()
        }
        const wrapper = shallow(<ErrorModal {...mockedBaseProps}/>)
        const containerElement = wrapper.find('.error-modal__container')
        const contentElement = wrapper.find('.error-modal__content')
        const paragraphElements = contentElement.find('p')
        const iconElement = contentElement.find(YodaFullIcon)
        const buttonElement = contentElement.find('button')

        expect(containerElement).toHaveLength(EXPECTED.SINGLE_ELEMENT)
        expect(contentElement).toHaveLength(EXPECTED.SINGLE_ELEMENT)
        expect(paragraphElements).toHaveLength(EXPECTED.PARAGRAPH_ELEMENTS)
        expect(iconElement).toHaveLength(EXPECTED.SINGLE_ELEMENT)
        expect(buttonElement).toHaveLength(EXPECTED.SINGLE_ELEMENT)
    })

    test('function closeErrorModal should be called once when button clicked', () => {
        const mockedBaseProps = {
            closeErrorModal: jest.fn()
        }
        const wrapper = shallow(<ErrorModal {...mockedBaseProps}/>)
        const buttonElement = wrapper.find('button')

        buttonElement.simulate('click')
        expect(mockedBaseProps.closeErrorModal).toHaveBeenCalled()
    })
})
