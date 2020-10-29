require("dotenv").config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page._client.send('Page.setDownloadBehavior', { behavior: 'allow', downloadPath: './my-downloads' });
  
  await Promise.all([
    page.goto('https://insighttimer.com/login'),
    page.waitForSelector('input[name="email"].MuiInputBase-input'),
  ]);
  await page.type('input[name="email"].MuiInputBase-input', process.env.INSIGHT_TIMER_EMAIL);
  await page.type('input[name="password"].MuiInputBase-input', process.env.INSIGHT_TIMER_PASSWORD);
  await Promise.all([
    page.click('.MuiButtonBase-root[type="submit"]'),
    page.waitForXPath('//*[@id="root"]/div/div[2]/section/h1'),
  ]);

  await Promise.all([
    page.goto("https://profile.insighttimer.com/profile_account"),
    page.waitForXPath('//*[@id="SessionListButtons"]/div/a[2]'),
  ]);

  await page.goto("https://profile.insighttimer.com/sessions/export");
  await page.waitFor(5000);
  await browser.close();
})();