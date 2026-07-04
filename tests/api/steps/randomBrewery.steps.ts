import { createBdd } from 'playwright-bdd';
import RandomBreweryPage from '../pages/RandomBreweryPage';

const { Given, Then } = createBdd();

let breweryPage: RandomBreweryPage;

Given('the user requests {int} random breweries', async ({ request }, count: number) => {
  breweryPage = new RandomBreweryPage(request);

  await breweryPage.getRandomBreweries(count);
});

Then('the API response status should be 200', async () => {
  await breweryPage.verifyStatusCode(200);
});

Then('brewery details should be displayed', async () => {
  await breweryPage.printBreweryDetails();
});
