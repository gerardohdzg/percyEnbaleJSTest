const percySnapshot = require('@percy/webdriverio');
describe('Percy validation final', ()=>{
    it('should be correct', async ()=>{
        await browser.url('https://placeit.net/c/mockups/stages/bella-canvas-tee-mockup-of-a-couple-wearing-a-60s-outfit-m26554');
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').waitForDisplayed();
        await browser.pause(2000);
        await percySnapshot(browser,"After page load");
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').waitForClickable();
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').click();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked Add Text");
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Another Text"]').waitForDisplayed();
        await $('//aside[contains(@class,"sidebar--left")]//div[contains(@class, "font-container")]').click();
        await $('//div[contains(@class,"fontpicker ui-draggable")]').waitForDisplayed();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked the Font Selector");
        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').waitForDisplayed();
        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').waitForClickable();
        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').click();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked Color Selector Selector");
        // $('//*[@id="container"]/div/aside[2]/div[2]/div/button').waitForDisplayed();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div/button').click();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div[2]/div[2]/div[1]').click();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div[2]/div[2]/div[1]').click();
        // await percySnapshot(browser, 'One');
    });
});