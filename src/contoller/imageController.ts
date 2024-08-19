import { Request, Response } from "express";
import {imageScraper} from "../utilities/scraper/ImageScraper";
import { LocatorEvent } from "puppeteer";

let allScrapedImages:string[] = []
export const getScrapedImages = (req:Request, res:Response):void =>{
res.json({allScrapedImages})
}

export const scrapeImage = async(req:Request, res:Response)=>{
    
    const path:string = req.body.path
    try {
        let  scrapedImages:string[] = await imageScraper(path)
    for (let image of scrapedImages){
        allScrapedImages.push(image)
    }
    res.json({message: `images scraped`})
    } catch (error) {
        console.log(error);
        res.json({error: `Error scraping image`})
    }
   
  // res.json({})
}