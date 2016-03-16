# HTML/CSS optimisation

## Baseline

Every test is done at 4mb/s in Chrome Canary.

Speed test

![Feed baseline](/screenshots/1base.png)



## Optimise HTML, CSS & image

After optimising the header image and made icons inline svg

![After optimising CSS HTML and imag](/screenshots/2html:css:img.png)



## Optimising javascript

After removing the Jquery script

![Jquery removed](/screenshots/3jquery.png)



## Added srcset

This will only add performance for the mobile/tablet users



## SPA

By making the page not reloading the header and navigation when you navigate to a different page. There will be a performance boost and data-saving.


## Final result

![Final result](/screenshots/final.png)

The 'first paint' of the website is after 300ms in stead of 1600ms.




