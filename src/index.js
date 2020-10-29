const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './my-downloads'})
  await page.goto('https://insighttimer.com/login');
  page.waitForNavigation();
  await page.type('input[name="email"].MuiInputBase-input', "fullchee@ymail.com");
  await page.type('input[name="password"].MuiInputBase-input', "bemindful");
  await page.click('.MuiButtonBase-root[type="submit"]'),
  await page.waitForXPath('//*[@id="root"]/div/div[2]/section/h1');
  
  await page.goto("https://profile.insighttimer.com/profile_account");
  await page.waitForXPath('//*[@id="SessionListButtons"]/div/a[2]');
  await page.goto("https://profile.insighttimer.com/sessions/export");
  await page.waitFor(5000);
  await browser.close();
})();