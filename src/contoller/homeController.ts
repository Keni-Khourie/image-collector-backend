import { Request, Response } from "express";
import {imageScraper} from "../utilities/scraper/ImageScraper";


//function to scrape page only!!!!!

export const homePageScrapeURL = async (req: Request, res: Response):Promise<void> =>{
    let images: string[] = []

    const {imageURL}= req.body;
    
    try {
        
       images = [... await imageScraper(imageURL)]
       console.log(images);
       if(images.length == 0){
        res.json({
            error: "No image scraped"
        })
        console.log("No image scraped");
        return
    }
    //for(image)
    
    res.json({images})

    } catch (error) {
        res.json({
            error: "Image scrape failed"
        })
       console.log("Error occurred while scraping image"); 
       console.log(error);
       return
    }

    
}

export const homePageScrapeURL2 = async (req: Request, res: Response):Promise<void> =>{
    const {imageURL}= req.body;
    res.json({imageURL})
}