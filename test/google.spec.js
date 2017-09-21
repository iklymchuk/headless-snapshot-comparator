import puppeteer from 'puppeteer';
const config = require('./config');

it('Verify start google page', async () => {
    const browser = await puppeteer.launch(
        {
            headless: false
        }
    );
    const page = await browser.newPage();
    await page.goto(config.url);
    await page.waitFor(config.wait);
    await page.setViewport(
        {
            width: config.width,
            height: config.height
        }
    );
    const screenshot = await page.screenshot(
        {
            fullPage: true
        }
    );
    browser.close();
    await expect(screenshot).toMatchImageSnapshot();
}, 5*1000);
