const faker = require('faker');
const puppeteer = require('puppeteer');

let browser = null;
let page = null;
const initializeBrowser = async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
};

const closeBrowser = async () => {
  await browser.close();
};

beforeAll(async () => {
  await initializeBrowser();
});

afterAll(async () => {
  return closeBrowser();
});

describe('Titles Tests', () => {
    test('The title Descomplica TOP should render', async () => {
      page.emulate({
        viewport: {
          width: 500,
          height: 2400
        },
        userAgent: ''
      });
  
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('h1');
  
      const itContains = await page.$$eval('div', (elements) =>
        elements.some((el) => el.textContent.includes('Descomplica Top'))
      );

      expect(itContains).toBe(true);
  
    }, 16000);

    test('The subtitle "E estão só te esperando para garantir a aprovação no Enem 2021. Garanta sua vaga e comece hoje."', async () => {
      page.emulate({
        viewport: {
          width: 500,
          height: 2400
        },
        userAgent: ''
      });
  
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('h1');
  
      const itContains = await page.$$eval('div', (elements) =>
        elements.some((el) => el.textContent.includes('E estão só te esperando para garantir a aprovação no Enem 2021. Garanta sua vaga e comece hoje.'))
      );
  
      expect(itContains).toBe(true);
    }, 16000);
  });