import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
  let wrapper;

  //runs before each test
  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });

  //checks if the components renders
  it("renders", () => {
    expect(wrapper.exists()).toBe(true);
  });

  //checks the value of data attribute 'value'
  it("value starts at 1", () => {
    expect(wrapper.vm.value).toBe(1);
  });

  //set the value of a data variable
  it("'value' is set to 4", () => {
    wrapper.setData({ value: 4 });
    expect(wrapper.vm.value).toBe(4);
  });

  //checks if the value increases on button click
  it("value increments on button click", async () => {
    wrapper.find(".incrementbutton").trigger("click");
    //wait for the dom to update with $nextTick()
    await wrapper.vm.$nextTick();
    const counter = wrapper.find("h1");
    expect(counter.text()).toBe("2");
  });

  //checks if the value decreases on button click
  it("value decrements on button click", async () => {
    wrapper.find(".decrementbutton").trigger("click");
    //wait for the dom to update with $nextTick()
    await wrapper.vm.$nextTick();
    const counter = wrapper.find("h1");
    expect(counter.text()).toBe("0");
  });
});
