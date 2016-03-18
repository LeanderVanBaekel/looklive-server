# Looklive Server

[link naar de online site](https://leandervanbaekel.nl)

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




