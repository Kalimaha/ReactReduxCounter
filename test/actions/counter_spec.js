import expect from 'expect'
import * as actions from '../../src/main/js/actions/index'

describe('Counter actions', () => {

    it('increase should create an INCREASE action', () => {
        expect(actions.increase()).toEqual({
            type: 'INCREASE'
        })
    })

    it('decrease should create a DECREASE action', () => {
        expect(actions.decrease()).toEqual({
            type: 'DECREASE'
        })
    })

})
