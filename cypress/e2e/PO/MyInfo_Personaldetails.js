export class personalDetails {
  getFirstName() {
    return cy.get('[name="firstName"]');
  }
  getMiddleName() {
    return cy.get('[name="middleName"]');
  }
  getLastName() {
    return cy.get('[name="lastName"]');
  }
  getEmployeeId() {
    return cy.get(".oxd-form-row div div div div ~div :nth-child(1) ").eq(7);
  }
  getOtherId() {
    return cy.get(".oxd-form-row div div div div ~div :nth-child(1) ").eq(8);
  }
  getDrivingLiscendeId() {
    return cy.get(".oxd-form-row div div div div ~div :nth-child(1) ").eq(9);
  }
  getLCExpiryDate() {
    return cy.get('[placeholder="yyyy-dd-mm"]').first();
  }
  getcalenderboard() {
    return cy.get(".oxd-calendar-wrapper");
  }
  getcalendarYear() {
    return cy.get("li[class='oxd-calendar-selector-year'] p~i ");
  }
  getcalendarMonth() {
    return cy.get(".oxd-calendar-selector-month-selected p~i");
  }
  getcalendarDate() {
    return cy.get("div.oxd-calendar-date");
  }
  getNationalitydropdown() {
    return cy.get(".oxd-input-group >div~div div.oxd-select-text--after").eq(0);
  }
  getnationalitylistdropdown() {
    return cy.get(".oxd-select-dropdown");
  }
  selectnationality() {
    return cy.get("div>span");
  }
  getSubmitbtn() {
    return cy.get("form.oxd-form >div.oxd-form-actions>button").first();
  }
  getdocSubmitbtn() {
    return cy.get("form.oxd-form >div.oxd-form-actions>button").eq(2);
  }
}
