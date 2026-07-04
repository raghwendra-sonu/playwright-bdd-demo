import { APIRequestContext, APIResponse, expect } from '@playwright/test';
import { Brewery } from '../models/Brewery';

export default class RandomBreweryPage {
  private response!: APIResponse;
  private breweries!: Brewery[];

  constructor(private request: APIRequestContext) {}

  async getRandomBreweries(size: number) {
    this.response = await this.request.get(
      `https://api.openbrewerydb.org/v1/breweries/random?size=${size}`,
    );

    this.breweries = await this.response.json();
  }

  getStatusCode(): number {
    return this.response.status();
  }

  async verifyStatusCode(expectedStatus: number) {
    expect(this.response.status()).toBe(expectedStatus);
  }

  async printBreweryDetails() {
    console.log('\n========== Brewery Details ==========');

    this.breweries.forEach((brewery, index) => {
      console.log(`\nRecord ${index + 1}`);
      console.log(`Name      : ${brewery.name}`);
      console.log(`Address 1 : ${brewery.address_1}`);
    });

    expect(this.breweries.length).toBe(2);
  }

  getBreweries(): Brewery[] {
    return this.breweries;
  }
}
