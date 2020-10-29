# How to extract data from Insight Timer with Puppeteer

Puppeteer is awesome!

```js
const browser = await puppeteer.launch();
const page = await browser.newPage();
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './my-downloads'});
```

