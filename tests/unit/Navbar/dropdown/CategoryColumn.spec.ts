import CategoryColumn from "@/components/NavBar/dropdown/CategoryColumn.vue";
import { Wrapper, WrapperArray, shallowMount } from "@vue/test-utils";
import Vue from "vue";
import { Categories } from "@/models/Categories";
import DropdownButton from "@/components/NavBar/dropdown/DropdownButton.vue";

describe("Category Column", () => {
	it("Should render correct amount of categories", () => {
		const wrapper: Wrapper<Vue> = shallowMountComponent();
		const dropdownButtons: WrapperArray<Vue> =
			wrapper.findAllComponents(DropdownButton);
		expect(dropdownButtons.length).toEqual(10);
	});

	function shallowMountComponent(): Wrapper<Vue> {
		return shallowMount(CategoryColumn, {
			propsData: {
				//@ts-ignore
				categories: Categories[0]?.subcategories?.[1]?.firstColumn,
			},
		});
	}
});
