import DropdownButton from "@/components/NavBar/dropdown/DropdownButton.vue";
import { Wrapper, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import HeadingButton from "@/components/NavBar/buttons/HeadingButton.vue";
import NormalButton from "@/components/NavBar/buttons/NormalButton.vue";
import LinkButton from "@/components/NavBar/buttons/LinkButton.vue";
import ArrowButton from "@/components/NavBar/buttons/ArrowButton.vue";

describe("DropdownButton tests", () => {
	it.each([
		["heading", HeadingButton],
		["normal", NormalButton],
		["link", LinkButton],
		["arrow", ArrowButton],
	])(
		"Should render correct component when rendered",
		(buttonType: string, component) => {
			const wrapper: Wrapper<Vue> = shallowMountComponent(buttonType);
			const button: Wrapper<Vue> = wrapper.findComponent(component);
			expect(button.exists()).toBeTruthy();
		}
	);

	function shallowMountComponent(
		buttonType: string = "heading"
	): Wrapper<Vue> {
		return shallowMount(DropdownButton, {
			propsData: {
				item: {
					text: "button",
					link: "#",
					type: buttonType,
				},
				shouldBeActive: false,
			},
		});
	}
});
