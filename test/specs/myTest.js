const percySnapshot = require('@percy/webdriverio');
describe('Editor tests', ()=>{
    it('should capture accurate screenshots on the editor', async ()=>{
        await browser.url('https://placeit.net/c/mockups/stages/bella-canvas-tee-mockup-of-a-couple-wearing-a-60s-outfit-m26554');
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').waitForDisplayed();
        await browser.pause(2000);
        await percySnapshot(browser,"After Editor page load");

        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').waitForClickable();
        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Text"]').click();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked Add Text");

        await $('//aside[contains(@class,"sidebar--left")]//button[text()="Add Another Text"]').waitForDisplayed();
        await $('//aside[contains(@class,"sidebar--left")]//div[contains(@class, "font-container")]').click();
        await $('//div[contains(@class,"fontpicker ui-draggable")]').waitForDisplayed();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked the Font Selector")

        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').waitForDisplayed();
        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').waitForClickable();
        await $('//aside[contains(@class,"sidebar--right")]//div[@class="graphic-header"]/label[contains(text(),"Left")]//following-sibling::div').click();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked Color Selector Selector");

        await $("//div[contains(@class,'colorpicker-container-graphic-control')][1]/div[contains(@class,'component dialog-topbar placeit-widget')]//button").waitForDisplayed();
        await $("//div[contains(@class,'colorpicker-container-graphic-control')][1]/div[contains(@class,'component dialog-topbar placeit-widget')]//button").click();
        await $("//label[text()='Extra Graphics']/following-sibling::div").waitForDisplayed();
        await $("//label[text()='Extra Graphics']/following-sibling::div").click();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked The Add Graphic");

        await $("//span[text()='Add From Our Gallery']").waitForDisplayed();
        await $("//span[text()='Add From Our Gallery']").click();
        await $("//img[contains(@data-src,'fff94393dcb5874bab3b9436c808353d/images/small.jpg')]").waitForDisplayed();
        await $("//img[contains(@data-src,'fff94393dcb5874bab3b9436c808353d/images/small.jpg')]").click();
        await browser.pause(2000);
        await percySnapshot(browser,"Added the graphic");

        await browser.url("https://placeit.net/c/videos/stages/animated-gaming-logo-generator-with-a-shooter-character-clipart-2754w-2933");
        await $("//div[contains(@class,'timeline ui-sortable active')]").waitForDisplayed();
        //await browser.pause(2000);
        await $("//div[@class='play-all-container']//div[@class='play-all']").waitForDisplayed();
        await $("//div[@class='play-all-container']//div[@class='play-all']").click();
        await browser.pause(2000);
        await percySnapshot(browser,"Played the video");
        // $('//*[@id="container"]/div/aside[2]/div[2]/div/button').waitForDisplayed();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div/button').click();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div[2]/div[2]/div[1]').click();
        // $('//*[@id="container"]/div/aside[2]/div[2]/div[2]/div[2]/div[1]').click();
        // await percySnapshot(browser, 'One');
    });

    it('should capture the manu items', async()=>{
        await browser.url('https://placeit.net/');
        await browser.pause(2000);
        await $('//a[@data-slug="mockups"]').waitForDisplayed();
        await $('//a[@data-slug="mockups"]').moveTo();
        await browser.pause(2000);
        await percySnapshot(browser,"Hovered Over Mockups");

        await $('//a[@title="Apparel"]').waitForDisplayed();
        await $('//a[@title="Apparel"]').click();
        await $('//a[@title="Apparel"]/following-sibling::ul//a[@title="T-Shirts"]').waitForDisplayed();
        await browser.pause(2000);
        await percySnapshot(browser,"Clicked on apparel");
    });

    it('should capture the button color change when hovered', async()=>{
        await browser.url('https://placeit.net/twitch-overlay-maker');
        await browser.pause(2000);
        await percySnapshot(browser,"After Twitch Overlay page load");

        await $('//span[text()="Make a Twitch Overlay"]').moveTo();
        await browser.pause(2000);
        await percySnapshot(browser,"Hovered over the banner button");
        
    })
});