import { createBdd } from 'playwright-bdd';
import CheckVehicleRegistrationPage from '../pages/CheckVehicleRegistrationPage';

const { Given, When, Then } = createBdd();

let regoPage: CheckVehicleRegistrationPage;

Given('the user opens the Service NSW homepage', async ({ page }) => {
  regoPage = new CheckVehicleRegistrationPage(page);

  await regoPage.navigate();
});

When('the user clicks the Check Rego link', async () => {
  await regoPage.clickCheckRego();
});

When('the user clicks the Check online button', async () => {
  await regoPage.clickCheckOnline();
});

When('the user enters {string} as the plate number', async ({ page }, plateNumber: string) => {
  await regoPage.enterPlateNumber(plateNumber);
});

When('the user accepts the terms and conditions', async () => {
  await regoPage.acceptTerms();
});

When('the user clicks the Check registration button', async () => {
  await regoPage.clickCheckRegistration();
});

Then(
  'the error message {string} should be displayed',
  async ({ page }, expectedMessage: string) => {
    await regoPage.verifyErrorMessage(expectedMessage);
  },
);
