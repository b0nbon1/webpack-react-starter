import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('App component', () => {
	test('should render login page without error', () => {
    const wrapper = mount(<App />);
    wrapper.find('button').simulate('click');
    expect(wrapper.find("p").text().includes('The count now is: 1')).toBe(true);
		expect(wrapper.find("[data-testid='app-test']")).toHaveLength(1);
  });
});
