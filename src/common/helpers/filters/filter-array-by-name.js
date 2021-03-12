import {INITIAL_VALUE} from '../../constants'

export const filterArrayByName = (filter, data) => {
    const dataToFilter = Array.isArray(data) && filter ? data : INITIAL_VALUE.LIST
    return dataToFilter.filter(item => {
        return (
            item.name
                .toLowerCase()
                .includes(filter))
    })
}
