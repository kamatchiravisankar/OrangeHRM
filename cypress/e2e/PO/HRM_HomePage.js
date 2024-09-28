export class homePage {
  getSideNavigationBar() {
    return cy.get(".oxd-sidepanel-header-close");
  }
  getMyInfo() {
    return cy.get(".oxd-sidepanel-body ul li:nth-child(6) >a");
  }
}
