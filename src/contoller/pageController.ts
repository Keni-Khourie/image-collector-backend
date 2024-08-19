import { Request, Response } from "express";
import User from "../model/userModel";
import Page from "../model/pageModel";
import Image from "../model/imageModel";
import {imageScraper} from "../utilities/scraper/ImageScraper";


export const getAllPages = async(req:Request, res:Response)=> {}

export const getPageById = async(req:Request, res:Response)=> {}

export const createPage = async(req:Request, res:Response)=>{
    const {pageName, pageUrl, pageDescription} = req.body;
    if(!pageName || !pageUrl){
       res.json({
      error: "page creation data incomplete",
    });
    return; 
    }

    const existingPage = Page.findOne({pageUrl, })

    try {
    
    } catch (error) {
        
    }
}

export const deletePage = async (req:Request, res:Response)=>{

    //delete all the images of a certain pageId
    // Then delete the page
}

export const scrapePage = async(req:Request, res:Response)=>{
    const pageId = req.params.pageId
    const page = await Page.findById(pageId)
    let scrapedImages:string[] = [];

    if(!page){
        res.json({
            error: "page not found",
        })
        return
    }

    try {
       scrapedImages = await imageScraper(page.pageUrl) 
       if(scrapedImages.length ===0){
        res.json({
            error:"no images scraped"
        })
        return
       }
    } catch (error) {
        console.log(error);
        res.json({
            error: "error scraping images"
        })
        return
    }

    try {
        for (let image of scrapedImages){
            await Image.create({
                imageUrl: image, 
                page: page._id
            })}
        
    } catch (error) {
        
    }

}