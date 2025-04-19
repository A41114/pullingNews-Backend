import  express  from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app)=>{
    router.get('/', homeController.getHomePage);
    router.get('/aboutme',homeController.getAboutme)

    //auction announcement
    router.post('/api/auctionAnnouncement',homeController.getAuctionAnnouncement)
    router.get('/api/auctionAnnouncementDetails',homeController.getAuctionAnnouncementDetails)
    router.get('/api/auctionAnnouncementOrganization',homeController.getAuctionAnnouncementOrganization)
    router.get('/api/getListProvince',homeController.getListProvince)
    router.get('/api/getListDistrict',homeController.getListDistrict)

    //selected organization announcement
    router.post('/api/selectedOrganizationAnnouncement',homeController.getSelectedOrganizationAnnouncement)
    router.get('/api/getDetailPropertyInfo',homeController.getDetailPropertyInfo)
    router.get('/api/getInfoEditNotice',homeController.getInfoEditNotice)


    //rest api : sử dụng get, post,...
    return app.use("/", router);
}

module.exports = initWebRoutes