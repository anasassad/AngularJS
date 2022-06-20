# AngularJS


## Section 5 :  
**  DigestCycle PART 2 **


- Digest Cycle does not get triggered automatically if events are unaware of Angular
- **Solution :**

   > Call `$digest` after your custom code
   > 
   > Wrap your custom code inside `$apply`
   > 
   > Find Angular specific service that handles the same functionality . e.g `$timeout`
