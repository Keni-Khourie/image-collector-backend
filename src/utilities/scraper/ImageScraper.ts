import puppeteer from 'puppeteer'



export const imageScraper = async(url:string): Promise<string[]> => {
  let imageArray:string[] = [];
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const images = await page.$$("img");
  for (const image of images) {
    let src = await image.getProperty("src");
    const srcText:string = await src.jsonValue() as string;
    imageArray.push(srcText);
  }
  console.log(imageArray);
  await browser.close();
  return imageArray
}

//export default imageScraper