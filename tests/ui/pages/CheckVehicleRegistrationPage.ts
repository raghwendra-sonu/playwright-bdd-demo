import { expect, Page } from '@playwright/test';

export default class CheckVehicleRegistrationPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto(process.env.UI_APP_URL!);
  }

  async clickCheckRego() {
    await this.page.getByRole('link', { name: 'Check rego' }).click();
  }

  async clickCheckOnline() {
    await this.page.getByRole('button', { name: 'Check online' }).click();
  }

  async enterPlateNumber(plate: string) {
    await this.page.locator('#plateNumberInput').fill(plate);
  }

  async acceptTerms() {
    await this.page.getByRole('checkbox').check();
  }

  async clickCheckRegistration() {
    await this.page
      .getByRole('button', {
        name: 'Check registration',
      })
      .click();
  }

  async verifyErrorMessage(expectedMessage: string) {
    await this.page.waitForLoadState('networkidle');
    await this.page.screenshot({
      path: 'test-results/error-page.png',
      fullPage: true,
    });
    await expect(this.page.getByText(expectedMessage)).toBeVisible({
      timeout: 7000,
    });
  }
}
