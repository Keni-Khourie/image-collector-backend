ENDPOINTS:

1. an endpoint to register
        REQUEST:
            POST: BASEURL/register
            request body: {
                firstName: "", 
                lastName: "", 
                email: "", 
                password: ""
            }
        
        RESPONSE:
            ON SUCCESS: {
                success: "user created"
            }
            Then it should redirect to the pages account.
            
            ON ERROR:{
                error: "error creating user"
            }

2. an endpoint to Login
        REQUEST:
            POST: BASEURL/login
            request body :{
                email: "",
                password: ""
            }
        
        RESPONSE:
            ON SUCCESS: {
                success: "user logged in"
            }
            Then it should redirect to the pages account.
            
            ON ERROR:{
                error: "error logging in user"
            }
   
3. an endpoint to delete a user account
        REQUEST:
            DELETE:BASEURL/{userID}
        
        RESPONSE
            ON SUCCESS: {
                success: "user deleted"
            }
            Then it should redirect to the pages account.
            
            ON ERROR:{
                error: "error deleting user"
            }
    
4. an endpoint to view all pages belonging to a user
        REQUEST:
            GET: BASEURL/pages
        
        RESPONSE:
            ON SUCCESS:An array of objects where each object is each data for each individual page (maybe select data, like the name and id, so as not to clog the server)
            
            ON ERROR:{
                error: "error obtaining pages"
            }

5. an endpoint to scrape all the images on a page given its url
        REQUEST:
            POST: BASEURL/scrape
            request-body: {
                targetUrl:""
            }

        RESPONSE:
            ON SUCCESS:{
                success: "images successfully scraped"
            }

            ON SUCCESS, BUT EMPTY ARRAY: {
                empty: "no image scraped from page"
            }

            ON ERROR: {
                error: "error scraping images"
            }


6. an endpoint to add a new page
        REQUEST:
            POST: BASEURL/add-page
        
        RESPONSE:
        ON SUCCESS:{
            success: "page created"
        }

        ON ERROR : {
            error: "error adding page"
        }

7. an endpoint to get/view all the (already scraped) images for a page
        REQUEST:
            GET: BASEURL/{pageId}

        RESPONSE:
        ON SUCCESS: an array of objects with the src url for the scraped objects
        
        ON SUCCESS, EMPTY:{
            empty: "no data to display"
        }

        ON ERROR: {
            error: "error getting scraped images"
        }

8. an endpoint to delete a specific page (including all its images)
        REQUEST:
            DELETE: BASEURL/{pageId}

        RESPONSE:
            ON SUCCESS: {
                success: page deleted
            }

            ON ERROR: {
                error: "error deleting page"
            }

9. an endpoint to edit the details of a page (name and description only)
        REQUEST:
            POST: BASEURL/{pageId}
            requestbody:{
                pageName: "",
                pageDescription:"",
            }

        RESPONSE:
            ON SUCCESS: {
                success: page details edited
            }

            ON ERROR: {
                error: "error updating page details"
            }

10. an endpoint to get a specifc scraped image from the list of images
        REQUEST:
            GET: BASEURL/{pageId}/{imageId}
        
        RESPONSE:
            ON SUCCESS: an object with the src url of the image

            ON ERROR{
                error: "error getting image"
            }

11. an endpoint to delete a scraped image from the list of images
        REQUEST:
            DELETE: BASEURL/{pageId}/{imageId}
        
        RESPONSE:
            ON SUCCESS:{
                success: "image deleted"
            }

            ON ERROR: {
                error: "error deleting image"
            }


12. an endpoint to download a specific scraped image from a page
        REQUEST:
            POST: BASEURL/{pageId}/{imageId}
        
        RESPONSE:
            ON SUCCESS: {
                success: "image downloaded"
            }

            ON ERROR: {
                error: "error downloading image"
            }


   
