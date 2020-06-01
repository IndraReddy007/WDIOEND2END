describe("my main1 suite ",()=>{
    it("my main1 spec",async() =>{ 
       var emp=["standard_user","problem_user","performance_glitch_user"];
        var i=0;
        while(i<emp.length){
            await browser.url("https://www.saucedemo.com/");
            var element=await browser.$('//input[@id="user-name"]');
            await element.waitForExist(2000);
            await element.setValue(emp[i]);
            var element=await browser.$('//input[@id="password"]');
            await element.waitForExist(5000);
            await element.setValue('secret_sauce');
            var element=await browser.$('//input[@type="submit"]');
            await element.click();
            var element=await browser.$("(//button[text()='ADD TO CART'])[1]");
            await element.click();
            var element=await browser.$("//div[@id='shopping_cart_container']//a");
            await element.click();
            var element=await browser.$('//a[text()="CHECKOUT"]');
            await element.click();
            var element=await browser.$('//input[@id="first-name"]');
            await element.waitForExist(2000);
            await element.setValue("indra");
            var element=await browser.$('//input[@id="last-name"]');
            await element.waitForExist(2000);
            await element.setValue("reddy");
            var element=await browser.$('//input[@id="postal-code"]');
            await element.waitForExist(5000);
            await element.setValue("522647");
            var element=await browser.$("//input[@value='CONTINUE']");
            await element.click();
            
            var element=await browser.$('//a[text()="FINISH"]');
            await element.click();
            var element=await browser.$("//button[text()='Open Menu']");
            await element.click();
            var element=await browser.$('//a[text()="Logout"]');
            await element.click();


            i++;
          
           
          }
        

    })

})
