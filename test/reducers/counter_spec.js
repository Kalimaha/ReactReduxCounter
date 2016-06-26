import expect from 'expect'
import counter from '../../src/main/js/reducers/index'

describe('Counter reducers', () => {

    it('should handle the initial state', () => {
        expect(counter(undefined, {})).toEqual(0)
    })

    it('should handle the INCREASE action', () => {
         expect(counter(undefined, {'type': 'INCREASE'})).toEqual(1)
    })

    it('should handle the DECREASE action', () => {
         expect(counter(undefined, {'type': 'DECREASE'})).toEqual(-1)
    })

})
