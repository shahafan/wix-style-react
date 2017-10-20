const dropdownDriverFactory = component => ({
  click: () => component.click(),
  getInput: () => component.$(`input`),
  getDropdown: () => component.$(`[data-hook="dropdown-layout-options"]`),
  getDropdownItem: index => component.$$(`[data-hook="dropdown-layout-options"] div`).get(index).getText(),
  getDropdownItemsCount: () => component.$$(`[data-hook="dropdown-layout-options"] div`).getText().count(),
  clickDropDownItem: (i = 0) => component.$(`[data-hook=dropdown-item-${i}]`).click(),
  element: () => component
});

export default dropdownDriverFactory;
