# Live webside for Vartkjokken.no

## Kjerne funksjonalitet
1. Fungerende Webside
2. Bestillings side
3. Blog/Oppskrifts side

# Webside
Har ei landingside som gir kjapp og enkel oversikt øve kva og kven Vartkjokken er. 
Undersider er: Om oss, Oppskrifter, Bestillingside, logginn.

- Loginn sida er i hoved sak for admin til å oppdatere og tilføye nye produkter, bloggar.
  - Framtidig funkjson:
    - Selskapsplanlegger  

## Framside
Lett og enkelt design med minimal men sentral info om visjon, mål, tilgjengelighet.

visuel vegvisar til blog og bestillings side, kanskje i form av knapper med .SVG illustrasjoner?

## Om Oss
1. Bakgrunnen til Vartkjokken ideen
2. Visjonen / framtidsmål
    - utviklings stadiene ( martna, catering, kiosk, restaurant )
3. Lokasjon til kjøkkenet

om Emilie
- erfaring
- stilling

om Andres
- erfaring
- stilling

## Stillinger
- Oversikt av Teamet pr i dag
- liste med utlysninger
  - søknads skjema vis utlysning

# Bestillings side
Gjestene bestiller og utfører handelen hær. Ein epost med bestillingen blir sendt til kunden og "kjøkkenet".

## Ein bestilling må gjære:
- Sende bekreftelse til Gjesten
- Sende bestilling med detaljer til kjøkken/bedriften
- Registrere bestilling i Database
  - Leverings info: (bestillings_dato leverings_dato, adresse)
  - Produktinfo: ( produkt_id, modifisering, pris )
- Minimal informasjon loggføres i Databasen om kunden inntill kunden registrere seg via innlogging 
   - Epost 

## handlekorg
- api mot klarna
- api mot vips

# Blog
Blog side kor gjester kan søke etter oppskrifter og informasjon om matallergi og tilpassa oppskrifter.

## Er bruker logget inn som admin/skaper
- Redigere poster
- Lage poster
- Slette poster

## Er burker ikkje logga inn:
- Søke med kriterier
- Sjå postar
- Skrive ut posten
- dele postar

## Side meny
pop-ut meny med mulighet til å "sortere" postane ved å velge vekk allergier. 
+ standar navigasjon

## Postar
Hvis posten er linka til eit produkt, kan brukeren legge den til i handlekurga med søke alternativene som forhandsvalgte modifikasjoner (jmfr: allergier)