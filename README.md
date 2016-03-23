# TASK RUNNERS

Er zijn heel veel verschillende task managers die allemaal met hun eigen voor en nadelen komen.

Echter lijkt Gulp de beste optie. 
- Gulp is sneller dan de meeste andere omdat hij Async werkt
- Gulp wordt vereweg het meest [gebruikt](https://www.npmjs.com/package/gulp), bijna 30.000 downloads per dag
- Hierdoor is er een grote community en zijn er veel plugins
- De Gulp syntax lijkt/is makkelijker dan Grunt


# Gulp

Voor gulp heb ik gebruikt gemaakt van Uglify, cleanCSS en Imagemin.

Hiermee heb ik de volgende resultaten behaald:
javascript bestanden: 11kb > 2kb
CSS bestanden: 3kb > 2kb
Images: 164kb > 145kb

De mobiele gebruikers zullen blij met me zijn! :tada:

# Webfonts

Bronnen:



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




