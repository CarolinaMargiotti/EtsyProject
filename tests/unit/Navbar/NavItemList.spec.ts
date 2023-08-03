import NavItemList from "@/components/NavBar/NavItemList.vue";
import { Wrapper, WrapperArray, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import { Categories } from "@/models/Categories";

describe("NavItemList tests", () => {
	it("aa", () => {
		const wrapper: Wrapper<Vue> = shallowMountComponent();
		const mainSubcategories: WrapperArray<Vue> = wrapper.findAllComponents({
			ref: "mainSubcategories",
		});
	});

	function shallowMountComponent(): Wrapper<Vue> {
		return shallowMount(NavItemList, {
			propsData: {
				divide: true,
				itemArrays: Categories[0],
			},
		});
	}
});
