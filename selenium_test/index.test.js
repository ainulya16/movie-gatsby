/* eslint-disable prettier/prettier */
// index.test.js
import chromedriver from 'chromedriver';
import chrome from 'selenium-webdriver/chrome';
import webDriver, { By, until } from 'selenium-webdriver';

const rootURL = 'http://localhost:8080/product/PA100';
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

const CHROME_OPTIONS = {
  args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage'],
};
const chromeCapabilities = webDriver.Capabilities.chrome();
chromeCapabilities.set('chromeOptions', CHROME_OPTIONS);
const d = new webDriver.Builder()
  .withCapabilities(chromeCapabilities)
  .build();

const waitUntilTime = 10000;
let driver;
let actual;
let expected;
let el;

jest.setTimeout(waitUntilTime);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5; // eslint-disable-line

async function getElementByXPath(xpath) {
  el = await driver.wait(
    until.elementLocated(By.xpath(xpath)),
    waitUntilTime,
  );
  return driver.wait(until.elementIsVisible(el), waitUntilTime);
}

describe('should contains all components as expected in a home page.', () => {
  driver = d;
  it('initializes the context', async () => {
    await driver.get(rootURL);
  });

  describe('Home Page Product PA100', () => {
    it('Should be displayed the right title', async () => {
      expected = 'AIA Singapore | AIA Singapore';
      await driver.wait(until.titleIs(expected), waitUntilTime);
    });

    it('Should be displayed the right title for profiling component', async () => {
      el = await getElementByXPath(
        '//*[@id="___gatsby"]/div/div/div/div/div/h2',
      );
      expected = 'FIND THE RIGHT PLAN FOR YOU IN LESS THAN A MINUTES';
      actual = await el.getText();
      expect(actual).toBeDefined();
      expect(actual).toEqual(expected.toUpperCase());
    });
  });
});
