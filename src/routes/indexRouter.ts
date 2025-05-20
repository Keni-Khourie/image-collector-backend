import express from'express';
import { getScrapedImages, scrapeImage } from '../controller/imageController';
import { homePageScrapeURL } from '../controller/homeController';

const router = express.Router();

/* GET home page. */

router.get('/get-image', getScrapedImages,);
router.post('/scrape', scrapeImage);
router.post('/', homePageScrapeURL)

export default router;
