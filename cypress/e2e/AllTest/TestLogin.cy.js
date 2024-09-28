const { homePage } = require("../PO/HRM_HomePage");
const { personalDetails } = require("../PO/MyInfo_Personaldetails");

describe("Orange HRM", () => {
  const homePageObj = new homePage();
  const personalinfoObj = new personalDetails();
  it("Login", () => {
    cy.viewport("macbook-11");
    cy.login(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
      "Admin",
      "admin123"
    );

    // homePageObj.getSideNavigationBar().click();
    homePageObj.getMyInfo().click({ force: true });
    personalinfoObj.getFirstName().clear().type("Kamatchi");
    personalinfoObj.getMiddleName().clear().type("Ravi");
    personalinfoObj.getLastName().clear().type("sankar");
    personalinfoObj.getEmployeeId().clear().type("EMP002");
    personalinfoObj.getOtherId().clear().type("O45345");
    personalinfoObj.getDrivingLiscendeId().clear().type("DL35345");
    personalinfoObj.getLCExpiryDate().click();
    personalinfoObj.getcalenderboard().then(() => {
      personalinfoObj.getcalendarYear().click();
      cy.get(".oxd-calendar-selector-year ul li").contains("2024").click();
      personalinfoObj.getcalendarMonth().click();
      cy.get(".oxd-calendar-selector-month ul li").contains("December").click();
      personalinfoObj.getcalendarDate().contains("30").click();
    });
    personalinfoObj.getNationalitydropdown().click();
    personalinfoObj.getnationalitylistdropdown().should("be.visible");
    personalinfoObj.selectnationality().contains("India").click();
    cy.get('[type="radio"]').check("2", { force: true });
    personalinfoObj
      .getSubmitbtn()
      .click()
      .then(() => {
        cy.get(".oxd-toast--success div div.oxd-toast-content p")
          .invoke("text")
          .then((txt) => {
            cy.log(txt);
          });
      });
    cy.get('.orangehrm-action-header button[type="button"]').click();
    cy.get(".oxd-file-input").as("fileInput");
    //cy.get(".oxd-file-button").attachFile("sample.jpg");
    cy.get(".oxd-file-input").selectFile(
      "cypress/fixtures/Fileuploadpaint.jpg",
      { force: true }
    );

    personalinfoObj.getdocSubmitbtn().click();
    cy.wait(6000);

    cy.get(".oxd-table .oxd-table-body .oxd-table-row").as("row");
    cy.get("@row")
      .first()
      .find(" :nth-child(8) >div button i.bi-download")
      .click();

    cy.get(
      ".oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon"
    ).click();
    cy.get(
      '[data-v-5a621acd=""][data-v-eeb97be0=""] > .orangehrm-horizontal-padding > div > .oxd-button'
    ).click();
    cy.get(".orangehrm-modal-footer > .oxd-button--label-danger").click();
  });
});
