
const { Given, When, Then } = require('@cucumber/cucumber');
const { request, expect } = require('@playwright/test');
const { Apipage } = require('../pages/api/apipage');


  const api=new Apipage()



Given('user sets up the API context', async function () {
 
  await api.api()

});


When('user fetches the details', async function () {
  
  await api.getapi()
 
});


When('I creates a new user', async function () {
  
  await api.apiPost()
   
});

Then('new user should be created', async function(){
  await api.verifyPost()

})

When('user updates the data',async function () {
  
  await api.apiPut()

})

Then('data should be updated',async function(){
   await api.verifyPut()
})

When ('user delete the data',async function(){
  await api.apiDelete()
})

Then('data should be deleted',async function(){
  await api.verifyDelete()

})





