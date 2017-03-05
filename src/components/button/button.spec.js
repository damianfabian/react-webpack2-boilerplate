import React from 'react'
import { mount } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import Component from './index.js'

const expect = chai.expect
chai.use(chaiEnzyme()) // We need to tell chai to use chaiEnzyme

describe ('App ', () => {

    it ('Render', () => {
        const com = mount(<Component />)
        expect(com).to.be.ok
    });

    it ('Render by default Login', () => {
        const com = mount(<Component />)
        expect(com.find('button')).to.have.lengthOf(1)
    });

});