import "@ui5/webcomponents/dist/MultiComboBox.js"
import "@ui5/webcomponents/dist/MultiComboBoxItem.js"

describe('MultiComboBox', () => {
    it('render mcb', () => {
        cy.mount(
            <ui5-multi-combobox data-testid="mcb">
                <ui5-mcb-item text="Item 1"></ui5-mcb-item>
                <ui5-mcb-item text="Item 2"></ui5-mcb-item>
            </ui5-multi-combobox>
        );

        // cy.wait(1000);

        cy.get('[data-testid="mcb"]').shadow().get('#ui5-multi-combobox-input').type('i', { force: true, delay: 200 });
    });
});
