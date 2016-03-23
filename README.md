# Looklive Server

[link naar de online site](https://looklive.leandervanbaekel.nl)

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

Als eerst ben ik gaan lezen over wat er allemaal mogelijk is om webfonts te optimaliseren. er zijn een hoop tips en trucs.

Ik heb gekeken wat [Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) voor mij zou kunnen betekenen. Dit zou maar een paar KB schelen per font.

Ik heb ook geprobeerd de [fonts inline](https://www.youtube.com/watch?v=G5ZmSVK7CHo) in de CSS te zetten. Dit heeft als voordeel dat je niet extra HTTP request hoeft uit te voeren. Het nadeel is wel dat de stylesheet veel groter wordt. Het stylesheet is 'render-blocking' en dus zit je alsnog langer te wachten tot de pagina weergegeven is. Een ander nadeel daarvan is ook dat je eventueel onnodige fonts aan het laden bent.

De fonts zouden ook gecached kunnen worden in de browser van de gebruiker. echter zit je dan nogsteeds met het probleem dat je het eerste bezoek lang moet wachten. Ook is dit vaak niet legaal.

Ook heb ik gekeken naar de oplossing van de [Filament group](https://www.filamentgroup.com/lab/font-loading.html). Dit leek mij wel een interesante oplossing. Hiervoor gebruik je een combinatie van CSS en javascript om eerst het fallback font te laten zien en pas daarna het webfont te downloaden en weer te geven. Het nadeel hieraan vind ik dat je afhankelijk bent van javascript 


Andere bronnen:
[link](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization?hl=en)



# Service Worker

Op dit moment wordt de JS, CSS en de html opgeslagen in de cache zodat deze bij het volgende bezoek sneller getoont kunnen worden.


# Progressive Web App

Wat is een PWA? Een PWA is een website die deels of helemaal gecached kan worden zodat hij ook offline werkt. Doormiddel van een Manifest kan de web app op de telfoon van de gebruiker als 'native app' worden geinstalleerd. 

Ik denk (hoop) dat PWA's heel belangrijk gaan worden in de toekomst. Het is een hele mooie middenweg tussen een native app en een website. Het neemt de moeite weg van het installeren van een applicatie en van het googlen of intypen van een url van een website. 

Aan de Looklive-server heb ik zelf ook een manifest toegevoegd. Ik kan hem helaas niet testen omdat ik geen android device tot mijn beschikking heb.

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




