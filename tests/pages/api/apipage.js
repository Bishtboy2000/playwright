const { request, expect } = require('@playwright/test');
const { Console } = require('console');
const exp = require('constants');

class Apipage{
    
    constructor(){
         this.apicontext
         this.baseurl='https://gorest.co.in/public/v2/users/'
         this.id;
         this.random=Math.random().toString(32).substring(2)
         this.name=this.random
         this.email=this.name+"@gmail.com"
         this.newname="new"+this.random
         this.newemail="new"+this.newname+"@gmail.com"
         this.gender="male"
         this.status="active"
         this.authenticationToken="73aef2e24112827d5118a257b128a0ad37efbff334b39f979a6811b83cb38d33"
         this.id;
         this.PutresponseBody;
         this.putresponse;
         this.actualname;

        
    }
    
    async api(){
        this.apicontext=await request.newContext()
     }


    async getapi(){
        let response=await this.apicontext.get(this.baseurl)
        let responseBody=await response.json()
        console.log(responseBody)
    }
    
    // async responseOfGetApi()
    // {
    //     let response=await this.apicontext.get(this.baseurl)
    // }
    
    // async responseOfPostApi()
    // {
    //     let response=await this.apicontext.post(this.baseurl)
    // }


    async checkStatusForGet(){
        let response=await this.apicontext.get(this.baseurl)
        expect(response.status()).toBe(200)
        
    }

    async apiPost()
    {
        let response=await this.apicontext.post(this.baseurl,
            {
                data:{
                    "name":this.name,
                    "gender":this.gender,
                    "email":this.email,
                    "status":this.status
                },
                headers:{
                 'Authorization':'Bearer '+this.authenticationToken   
                }
            }

        )
        let responseBody=await response.json()
        this.id=responseBody.id
        console.log(responseBody.id)
        expect(response.status()).toBe(201)
    }

    async verifyPost()
    {
        console.log("====="+this.baseurl+this.id)
        let response=await this.apicontext.get(this.baseurl+this.id,{
            headers:{
                'Authorization':'Bearer '+this.authenticationToken
            }
            
        })
        let responseBody=await response.json()
        expect(response.status()).toBe(200)
        console.log(responseBody)
        expect(responseBody.id).toEqual(this.id)
        console.log(this.id)
    }

    async apiPut()
    {
         const response= await this.apicontext.put(this.baseurl+this.id,{
            data:{
                "name":this.newname,
                "email":this.newemail
            },
            headers:{
                'Authorization':'Bearer '+this.authenticationToken
            }
        })
         this.PutresponseBody=await response.json()
         console.log(this.PutresponseBody)
        
    }

    async verifyPut()
    {
        this.actualname= this.PutresponseBody.name
        expect(this.actualname).toEqual(this.newname)   
    }

    async apiDelete()
    {
        let response=await this.apicontext.delete(this.baseurl+this.id,{
            headers:{
                'Authorization':'Bearer '+this.authenticationToken
            }
        })

    }

    async verifyDelete()
    {
        let response=await this.apicontext.get(this.baseurl+this.id,{
            headers:{
                'Authorization':'Bearer '+this.authenticationToken
            }
        })
        let responseBody=await response.json()
        expect(response.status()).toBe(404)
    }
}
module.exports={Apipage}