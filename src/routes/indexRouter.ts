import express from'express';
import { getScrapedImages, scrapeImage } from '../contoller/imageController';
import { createUser, loginUser } from '../contoller/userController';
import { homePageScrapeURL } from '../contoller/homeController';

const router = express.Router();

/* GET home page. */
router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/get-image', getScrapedImages,);
router.post('/scrape', scrapeImage);
router.post('/', homePageScrapeURL)

export default router;
