
// import db from '../models/index'
import userService from "../Services/userServices";
let getHomePage = async (req,res) =>{
    try{
        // let data= await db.User.findAll();
    

        return res.render('homePage.ejs'); 
    }catch(e){
        console.log(e)
    }
}

let getAboutme = (req,res) =>{
    return res.render('test/about.ejs');
}

let getAuctionAnnouncement = async(req,res) =>{
    try {
        // console.log('body',req.body)
        let data = await userService.getAuctionAnnouncementService(req.body)
        // console.log('Controller run !!!',data)
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getAuctionAnnouncementDetails = async(req,res) =>{
    try {
        let data = await userService.getAuctionAnnoucementDetails(req.query.id)
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getAuctionAnnouncementOrganization = async(req,res) =>{
    try {
        let data = await userService.getOrganization(req.query.id)
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getListProvince = async(req,res) =>{
    try {
        let data = await userService.getListProvince()
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getListDistrict = async(req,res) =>{
    try {
        let data = await userService.getListDistrict(req.query.id)
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getSelectedOrganizationAnnouncement = async(req,res) =>{
    try {
        // console.log('body',req.body)
        let data = await userService.getSelectedOrganizationAnnouncement(req.body)
        // console.log('Controller run !!!',data)
        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getDetailPropertyInfo = async(req,res)=>{
    try {
        // console.log('body',req.body)
        let data = await userService.getDetailPropertyInfo(req.query.id)

        return res.status(200).json(data);
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
let getInfoEditNotice =  async(req,res)=>{
    try {
        let data = await userService.getInfoEditNotice(req.query.id)
        return res.status(200).json(data);
        
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}


module.exports = {
    getHomePage: getHomePage,
    getAboutme : getAboutme,
    getAuctionAnnouncement : getAuctionAnnouncement,
    getAuctionAnnouncementDetails : getAuctionAnnouncementDetails,
    getAuctionAnnouncementOrganization : getAuctionAnnouncementOrganization,
    getListProvince : getListProvince,
    getListDistrict : getListDistrict,
    getSelectedOrganizationAnnouncement : getSelectedOrganizationAnnouncement,
    getDetailPropertyInfo : getDetailPropertyInfo,
    getInfoEditNotice : getInfoEditNotice
}