import { Wrapper, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import HeadingButton from "@/components/NavBar/buttons/HeadingButton.vue";

describe("HeadingButton tests", () => {
	it("Should render correct assigned text when rendered", () => {
		const wrapper: Wrapper<Vue> = shallowMountComponent();
		expect(wrapper.text()).toEqual("Button text");
	});

	it("Should render link with right url when rendered", () => {
		const wrapper: Wrapper<Vue> = shallowMountComponent();
		const link: Wrapper<Vue> = wrapper.findComponent({ ref: "link" });
		expect(link.attributes("href")).toEqual("anurl");
	});

	function shallowMountComponent(): Wrapper<Vue> {
		return shallowMount(HeadingButton, {
			propsData: {
				text: "Button text",
				link: "anurl",
			},
		});
	}
});
