
const axios = require('axios');
const puppeteer = require('puppeteer');
const { JSDOM } = require('jsdom');
const cheerio = require('cheerio');
// const { Builder, By } = require('selenium-webdriver');
const { chromium } = require('playwright');
const { html } = require('cheerio/lib/static');

let htmlContent='';
let htmlDetails='';
let org='';
let province='';
let district='';
let selectedOrganizationAnnouncement='';
///////////////////////////////////////////


////////////////////////////////////////////DGTS/////////////////////////////////////////////////
(async () => {
    let numberOfPages = 20
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://dgts.moj.gov.vn/portal/search/auction-notice?assetName=&endDate=&endPublishDate=&fromFirstPrice=&fullName=&numberPerPage='+numberOfPages+'&p=3&propertyTypeId=&provinceId=&searchSimple=&selectedOrganizationId=&startDate=&startPublishDate=&toFirstPrice=&typeOrder=2', { waitUntil: 'networkidle' });

    htmlContent = await page.content();
    const $ = cheerio.load(htmlContent);
    $('article').each((index, element) => {
        // console.log($(element).text());
        // console.log('ele: ',element)
        arr.push($(element).text())
    });
    
})();
////////////////////////////////////daugianVNA///////////////////////////////////////////////////////
async function fetchData(url) {
    try {

    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    }
}


let getAuctionAnnouncementService = (searchData)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let numberPerPages=100
            const response = await axios.get('https://dgts.moj.gov.vn/portal/search/auction-notice?assetName='+searchData.assetName+'&endDate='+searchData.to_auction_Date+'&endPublishDate='+searchData.to_publish_Date+'&fromFirstPrice='+searchData.starting_price_from+'&fullName='+searchData.fullName+'&numberPerPage='+numberPerPages+'&p='+searchData.p+'&propertyTypeId=&provinceId='+searchData.province_Id+'&searchSimple=&selectedOrganizationId='+searchData.selectedOrganization+'&startDate='+searchData.from_auction_Date+'&startPublishDate='+searchData.from_publish_Date+'&toFirstPrice='+searchData.starting_price_to+'&typeOrder=2');
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getAuctionAnnouncementService succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
    })
}
let getAuctionAnnoucementDetails = (id)=>{
    return new Promise(async(resolve, reject)=>{
        if(!id){
            resolve({
                errCode:1,
                message:'missing id...',
                data
            })
        }else{
            // try {
            //     const browser = await chromium.launch({ headless: true });
            //     const page = await browser.newPage();
            //     await page.goto('https://dgts.moj.gov.vn/portal/propertyInfo?auctionInfoId='+id);
            //     // console.log(page)
            //     htmlDetails = await page.content();
                
            //     // Tạo JSDOM từ HTML
            //     const dom = await new JSDOM(htmlDetails);

            //     // Lấy nội dung từ <pre>
            //     const jsonContent = await dom.window.document.querySelector("pre").textContent;

            //     // Chuyển đổi nội dung JSON thành đối tượng
            //     const data = await JSON.parse(jsonContent);
            //     // In ra kết quả
            //     // console.log(data);
            //     resolve({
            //         errCode:0,
            //         message:'getAuctionAnnouncementDetails succeeds !',
            //         data
            //     })
            // } catch (e) {
            //     reject(e);
            // }
            try {
                const response = await axios.get(`https://dgts.moj.gov.vn/portal/propertyInfo?auctionInfoId=${id}`);
                
                const jsonData = response.data;
                
                resolve({
                    errCode: 0,
                    message: 'getAuctionAnnoucementDetails succeeds!',
                    data: jsonData
                });
            } catch (e) {
                reject(e)
            }
        }
    })
}

let getOrganization = (id)=>{
    return new Promise(async(resolve, reject)=>{
        id=id.replaceAll(' ','+')
        // console.log('get org id:',id)
        if(!id){
            resolve({
                errCode:1,
                message:'missing id...',
                data
            })
        }else{
            // try {
            //     const browser = await chromium.launch({ headless: true });
            //     const page = await browser.newPage();
            //     await page.goto('https://dgts.moj.gov.vn/ThongTin/getAllOrganizationAuction?name='+id+'&numberPerPage=10', { waitUntil: 'networkidle' });
            //     // console.log(page)
            //     org = await page.content();
                
            //     // Tạo JSDOM từ HTML
            //     const dom = await new JSDOM(org);

            //     // Lấy nội dung từ <pre>
            //     const jsonContent = await dom.window.document.querySelector("pre").textContent;

            //     // Chuyển đổi nội dung JSON thành đối tượng
            //     const data = await JSON.parse(jsonContent);
            //     // In ra kết quả
            //     // console.log(data);
            //     resolve({
            //         errCode:0,
            //         message:'getAuctionAnnouncementOrganization succeeds !',
            //         data
            //     })
            // } catch (e) {
            //     reject(e);
            // }
            try {
                // let numberPerPages=10
                const response = await axios.get('https://dgts.moj.gov.vn/ThongTin/getAllOrganizationAuction?name='+id+'&numberPerPage=10');
                
                const jsonData = response.data;
                
                resolve({
                    errCode: 0,
                    message: 'getOrganization succeeds!',
                    data: jsonData
                });
            } catch (e) {
                reject(e)
            }
        }
    })
}
let getListProvince = ()=>{
    return new Promise(async(resolve, reject)=>{
        
        // try {
        //     const browser = await chromium.launch({ headless: true });
        //     const page = await browser.newPage();
        //     await page.goto('https://dgts.moj.gov.vn/common/getListProvince');
        //     // console.log(page)
        //     province = await page.content();
            
        //     // Tạo JSDOM từ HTML
        //     const dom = await new JSDOM(province);

        //     // Lấy nội dung từ <pre>
        //     const jsonContent = await dom.window.document.querySelector("pre").textContent;

        //     // Chuyển đổi nội dung JSON thành đối tượng
        //     const data = await JSON.parse(jsonContent);
        //     // In ra kết quả
        //     // console.log(data);
        //     resolve({
        //         errCode:0,
        //         message:'getAuctionAnnouncementOrganization succeeds !',
        //         data
        //     })
        // } catch (e) {
        //     reject(e);
        // }
        try {
            // let numberPerPages=10
            const response = await axios.get('https://dgts.moj.gov.vn/common/getListProvince');
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getListProvince succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
        
    })
}
let getListDistrict = (id)=>{
    return new Promise(async(resolve, reject)=>{
        // try {
        //     const browser = await chromium.launch({ headless: true });
        //     const page = await browser.newPage();
        //     await page.goto('https://dgts.moj.gov.vn/common/getListDistrict?province='+id);
        //     // console.log(page)
        //     district = await page.content();
            
        //     // Tạo JSDOM từ HTML
        //     const dom = await new JSDOM(district);

        //     // Lấy nội dung từ <pre>
        //     const jsonContent = await dom.window.document.querySelector("pre").textContent;

        //     // Chuyển đổi nội dung JSON thành đối tượng
        //     const data = await JSON.parse(jsonContent);
        //     // In ra kết quả
        //     // console.log(data);
        //     resolve({
        //         errCode:0,
        //         message:'getAuctionAnnouncementOrganization succeeds !',
        //         data
        //     })
        // } catch (e) {
        //     reject(e);
        // }
        try {
            // let numberPerPages=10
            const response = await axios.get('https://dgts.moj.gov.vn/common/getListDistrict?province='+id);
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getListDistrict succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
        
    })
}

let getSelectedOrganizationAnnouncement = (dataFromReactjs)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            let numberPerPages=100
            const response = await axios.get('https://dgts.moj.gov.vn/ThongTin/getInfoSelectAuctionOrg?district='+dataFromReactjs.district_Id+'&endPublishDate=&fromDate='+dataFromReactjs.fromDate+'&noticeSub='+dataFromReactjs.assetName+'&numberPerPage='+numberPerPages+'&ownerFullname='+dataFromReactjs.fullName+'&p='+dataFromReactjs.p+'&province='+dataFromReactjs.province_Id+'&startPublishDate=&toDate='+dataFromReactjs.toDate);
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getSelectedOrganizationAnnouncement succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
        
    })
}
let getDetailPropertyInfo = (dataFromReactjs)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            const response = await axios.get(`https://dgts.moj.gov.vn/ThongTin/getDetailPropertyInfo?noticeID=${dataFromReactjs}`);
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getDetailPropertyInfo succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
        
    })
}
let getInfoEditNotice=(dataFromReactjs)=>{
    return new Promise(async(resolve, reject)=>{
        try {
            // console.log(dataFromReactjs)
            const response = await axios.get(`https://dgts.moj.gov.vn/ThongTin/getInfoEditNotice?id=${dataFromReactjs}`);
            
            const jsonData = response.data;
            
            resolve({
                errCode: 0,
                message: 'getInfoEditNotice succeeds!',
                data: jsonData
            });
        } catch (e) {
            reject(e)
        }
        
    })
}
module.exports = {
    getAuctionAnnouncementService : getAuctionAnnouncementService,
    getAuctionAnnoucementDetails : getAuctionAnnoucementDetails,
    getOrganization : getOrganization,
    getListProvince : getListProvince,
    getListDistrict : getListDistrict,
    getSelectedOrganizationAnnouncement : getSelectedOrganizationAnnouncement,
    getDetailPropertyInfo : getDetailPropertyInfo,
    getInfoEditNotice : getInfoEditNotice
}