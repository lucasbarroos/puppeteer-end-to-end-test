const faker = require('faker');
const puppeteer = require('puppeteer');

let browser = null;
let page = null;
const initializeBrowser = async () => {
  browser = await puppeteer.launch({
    headless: false,
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

describe('Content Tests', () => {
    test('The title "Descomplica" TOP should render', async () => {
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('h1');
  
      const itContains = await page.$$eval('div', (elements) =>
        elements.some((el) => el.textContent.includes('Descomplica Top'))
      );

      expect(itContains).toBe(true);
  
    }, 16000);

    test('The subtitle "E estão só te esperando para garantir a aprovação no Enem 2021. Garanta sua vaga e comece hoje." should render', async () => {
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('h1');
  
      const itContains = await page.$$eval('div', (elements) =>
        elements.some((el) => el.textContent.includes('E estão só te esperando para garantir a aprovação no Enem 2021. Garanta sua vaga e comece hoje.'))
      );
  
      expect(itContains).toBe(true);
    }, 16000);
  });

  describe('Functionality Tests', () => {
    test('The button "Já sou aluno" should render', async () => {
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('a');
  
      const itContains = await page.$$eval('a', (elements) =>
        elements.some((el) => el.textContent.includes('Já sou aluno'))
      );

      expect(itContains).toBe(true);
  
    }, 16000);

    test('The button click "Já sou aluno" redirect to login page', async () => {
      await page.goto('https://descomplica.com.br');
      await page.waitForSelector('.login-button');
  
      await page.click('.login-button');
      await page.waitForNavigation();

      const itContains = await page.$$eval('div', (elements) =>
        elements.some((el) => el.textContent.includes('Entre com sua conta no Descomplica.'))
      );

      expect(itContains).toBe(true);
  
    }, 16000);
  });
