
database:
    models:
        USER:
            Each user should have the following properties:
                - a unique user id
                - user name
                - email
                -profile pic (so we can practice multer)

        PAGE:
            Each page should have the following properties:
                -an id (unique)
                -a name (given by the user)
                -page description (optional, based on the user)
                -an array of images scraped from the page (hold on that)
        
        IMAGE:
            Each image should have the following properties:
                -an id (numbered from 1 and should autoincrement)
                -the id of the page to which it belongs
                -the image url
                -the image, saved to file system (maybe...)


users should be able to:
    -register and login to the site,
    -scrape the images from a given page
    -add or remove images from the list of images returned during the scrape
    -download the scraped images as a pdf
    -Ability to download each image
    -Ability to download all scraped images from a given page
    -Ability to view all their created pages
    -Ability to delete a page (which will by extension delete its images)