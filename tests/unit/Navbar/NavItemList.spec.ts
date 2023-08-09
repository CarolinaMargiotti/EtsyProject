import NavCategoriesList from "@/components/NavBar/NavCategoriesList.vue";
import { Wrapper, WrapperArray, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import { Categories } from "@/models/Categories";

describe("NavCategoriesList tests", () => {
	it("aa", () => {
		const wrapper: Wrapper<Vue> = shallowMountComponent();
		const mainSubcategories: WrapperArray<Vue> = wrapper.findAllComponents({
			ref: "mainSubcategories",
		});
	});

	function shallowMountComponent(): Wrapper<Vue> {
		return shallowMount(NavCategoriesList, {
			propsData: {
				divide: true,
				itemArrays: Categories[0],
			},
		});
	}
});
