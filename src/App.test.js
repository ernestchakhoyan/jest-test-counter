import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App />);
    if (state) {
        wrapper.setState(state);
    }
    return wrapper;
};

const findBtTestAttr = (component, attr) => {
    return component.find(`[data-test="${attr}"]`);
};

it("> should renders without crashing", () => {
    const wrapper = setup();
    const appComponent = findBtTestAttr(wrapper, "component-app");
    expect(appComponent.length).toBe(1);
});

it("> should render increment button", () => {
    const wrapper = setup();
    const button = findBtTestAttr(wrapper, "app-button");
    expect(button.length).toBe(1);
});

it("> should render counter display", () => {
    const wrapper = setup();
    const counter = findBtTestAttr(wrapper, "app-counter");
    expect(counter.length).toBe(1);
});

it("> counter starts at 0", () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state("counter");
    expect(initialCounterState).toBe(0);
});

it("> clicking button increments counter display", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    const button = findBtTestAttr(wrapper, "app-button");
    button.simulate("click");

    const displayCounter = findBtTestAttr(wrapper, "app-counter");
    expect(displayCounter.text()).toContain(counter + 1);
});

it("> should render decrement button", () => {
    const wrapper = setup();
    const decrementButton = findBtTestAttr(wrapper, "decrement-button");

    expect(decrementButton.length).toBe(1);
});

it("> clicking button decrements counter display", () => {
    const counter = 7;
    const wrapper = setup(null, { counter });

    const decrementButton = findBtTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");

    const displayCounter = findBtTestAttr(wrapper, "app-counter");
    expect(displayCounter.text()).toContain(counter - 1);
});

it("> should not be negative counter", () => {
    const counter = 1;
    const wrapper = setup(null, { counter });

    const decrementButton = findBtTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");

    expect(wrapper.state().counter).toBeGreaterThanOrEqual(0);
});
