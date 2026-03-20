const articles = [
  {
    "id": "a1",
    "title": "Thinger Hankinnan osoite : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001173678-thinger-hankinnan-osoite",
    "updated": "2026-03-20",
    "content": "Ratkaisu-kotisivu Thinger Hankinta Thinger Hankinnan käyttöönotto Thinger Hankinnan osoite Tulosta Muokattu: To, 21 Heinä, 2022 klo 2:46 PM Thinger Hankinnan ylläpito löytyy osoitteesta: https://hankinta.thinger.fi/ Oliko tästä vastauksesta apua? Kyllä EiSend feedback Pahoittelut, että emme voineet auttaa. Anna palautetta, jotta voimme parantaa tätä artikkelia. Liittyvät artikkelit"
  },
  {
    "id": "a2",
    "title": "Salasana unohtunut? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001278127-salasana-unohtunut-",
    "updated": "2026-03-20",
    "content": "Jos olet unohtanut järjestelmän salasanan, saat pyydettyä uuden kirjautumisikkunan 'Unohditko salasanasi?' avulla.Saat tällöin sähköpostiisi linkin, jonka avulla voit vaihtaa salasanasi.Käyttäjätunnus on oma sähköpostiosoitteesi."
  },
  {
    "id": "a3",
    "title": "SSO kirjautuminen (Azure AD) : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001254552-sso-kirjautuminen-azure-ad-",
    "updated": "2026-03-20",
    "content": "Thinger Hankintaan on mahdollista ottaa käyttöön Azure AD:n kirjautuminen. Ole tällöin yhteydessä meidän tukeen: support@thinger.fi SSO kirjautuminen vaatii aina yrityksesi Azure Adminin hyväksyntää.SSO luvitus Vaadittavat oikeudet luvitukseen."
  },
  {
    "id": "a4",
    "title": "Azure AD (SSO) ja O365 -integraatio – käyttöönotto : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001281426-azure-ad-sso-ja-o365-integraatio-k%C3%A4ytt%C3%B6%C3%B6notto",
    "updated": "2026-03-20",
    "content": "Alla on yleiskuvaus siitä, miten Azure AD (SSO) -kirjautuminen ja O365-integraatio toimivat sekä mitä käyttöönotto vaatii.Käyttöönotto on suoraviivainen ja kestää tyypillisesti noin 15 minuuttia, kun se tehdään yhdessä esimerkiksi Teams-palaverissa.SSO-kirjautuminen (Azure AD)Kun ensimmäinen käyttäjä kirjautuu Azure AD:n kautta ja tenant-tason admin consent annetaan, Azureen muodostuu Enterprise Application nimeltä “Thinger”.Kirjautumisen yhteydessä Microsoft näyttää hyväksyntäruudun, jossa pyydetään seuraavat oikeudet:Perustietojen lukeminen (View your basic profile)Pääsyn ylläpito annettuihin tietoihin (Maintain access to data you have given it access to)Nämä ovat standardeja OpenID-oikeuksia ja niitä käytetään ainoastaan:Käyttäjän tunnistamiseen (SSO-kirjautuminen)Käyttäjän yksilöintiin palvelussaIstunnon ylläpitoon ilman jatkuvaa uudelleenkirjautumistaO365-sähköposti-integraatioJos käyttäjät haluavat lähettää sähköposteja omasta O365-tilistään palvelun kautta, sovelluksessa pyydetään erillinen tenant-tason hyväksyntä.Tämä hyväksyntä sisältää:Sähköpostin lähettäminen käyttäjänä (Send mail as you)Perustietojen lukeminen (View your basic profile)Pääsyn ylläpito annettuihin tietoihin (Maintain access to data you have given it access to)Tämä vaihe on tarpeellinen vain, jos sähköpostien lähetys halutaan ottaa käyttöön.Käyttöönoton vaiheetAsiakas toimittaa yhden admin-tasoisen käyttäjänKäyttäjällä tulee olla käytössä sähköpostilaatikko (kutsu lähetetään sähköpostitse)Azure AD (SSO) aktivoidaan asiakkaan domainille Admin-käyttäjä kirjautuu palveluun Azure AD:n kauttaTenant-tason hyväksyntä annetaan→ Enterprise Application muodostuu AzureenKirjautumisen jälkeen admin-käyttäjä tekee O365-sähköpostin valtuutuksen palvelussa Tenant-tason hyväksyntä annetaan→ Enterprise Application päivittyy tarvittavilla oikeuksillaLopputulosKäyttäjät voivat kirjautua Azure AD:n kautta (SSO)Sähköposteja voidaan lähettää käyttäjien omista O365-tileistä"
  },
  {
    "id": "a5",
    "title": "Sähköpostin lähetys omasta osoitteesta (Office 365, Gmail) : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001254551-s%C3%A4hk%C3%B6postin-l%C3%A4hetys-omasta-osoitteesta-office-365-gmail-",
    "updated": "2026-03-20",
    "content": "Tämän ohjeen avulla voit vaihtaa Thingerin no-reply-lähettäjän omaksi Outlook-sähköpostiosoitteeksesi, jos käytössäsi on Office 365 -ympäristö tai jos käytössä on Googlen ympäristö.O365-ympäristöO365 luvitus vaatii yrityksen O365 adminin hyväksymisen ensimmäisellä kerralla. Tämän jälkeen jokainen käyttäjä voi luvittaa erikseen oman sähköpostinsa. Mikäli O365 admin ei ole käyttäjänä Thinger Hankinnassa, olkaa tällöin yhteydessä meidän tukeen: support@thinger.fiHuom! Luvituksen jälkeen kaikki poissaoloviestit, toimittamattomien viestien ilmoitukset sekä toimittajien vastaukset tulevat käyttäjän omaan sähköpostiin järjestelmän sijaan.Yksittäisen käyttäjän luvitus: Kirjaudu Thinger Hankintaan hankinta.thinger.fiKlikkaa valkoisen hahmon kuvaa ja valitse Omat asetuksetklikkaa Office 365 tai Gmail linkkiäKlikkaa Yhdistä O365 sähköposti / Yhdistä Gmail sähköpostiTunnistauduGmail- yhdistäminenValitse oikea gmail-tili ja tunnistauduO365 - yhdistäminenTunnistauduVoit koska tahansa katkaista valtuutuksen samasta paikkaa mistä aloititkin valtuutuksen.Organisaatiotason luvitusAdmin oikeuksien avulla annetaan organisaatiotason luvitus,"
  },
  {
    "id": "a6",
    "title": "Kun luvitus on tehty/ei ole tehty : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001278083-kun-luvitus-on-tehty-ei-ole-tehty",
    "updated": "2026-03-20",
    "content": "Alla kuvataan ero, miten O365/Gmail luvitus vaikuttaa sähköpostien kulkuun.Ilman O365 luvitusta: Kun lähettävä osoite on järjestelmän oletus (no-reply@thinger.fi) Jos toimittajan sähköpostiosoitetta ei ole enää olemassa, tulee tällöin meidän järjestelmään Hankintaan näkyville punainen varoituskolmio, joka kertoo, ettei sähköposti ole mennyt perille. Punainen kolmio ilmestyy muutaman lähetysyrityksen jälkeen, n. 5-10min. Jos toimittajan osoite on olemassa, eli sähköposti menee perille, mutta toimittaja on joko lomalla tai lähtenyt firmasta, mutta osoitetta ei ole poistettu, niin tällöin poissaoloilmoitus tulee meidän no-reply@thinger.fi osoitteeseen, jota luetaan meillä aina silloin tällöin. Nämä viestit välitetään sitten sinulle eteenpäin. O365 luvitus tehtynä: Kun lähettävä osoite on sinun osoite (etunimi.sukunimi@firma.fi) Jos toimittajan sähköpostiosoitetta ei ole enää olemassa, tulee tällöin sinun sähköpostiisi tieto, ettei viesti ole mennyt perille. Punainen kolmio ilmestyy myös Hankintaan ko.toimittajan kohdalle tarjouspyynnössäsi.Jos toimittajan osoite on olemassa, eli sähköposti menee perille, mutta toimittaja on joko lomalla tai lähtenyt firmasta, mutta osoitetta ei ole poistettu, niin tällöin poissaoloilmoitus tulee sinun sähköpostiosoitteeseen."
  },
  {
    "id": "a7",
    "title": "Miten vaihdan eri yritystilien välillä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001254294-miten-vaihdan-eri-yritystilien-v%C3%A4lill%C3%A4-",
    "updated": "2026-03-20",
    "content": "Voit vaihtaa eri yritystilien välillä klikkaamalla valkoisen hahmon kuvaa ja valitsemalla Vaihda yritystä. Yksityiskohtainen kuvausKun olet kirjautuneena sisälle Thinger Hankintaan voit helposti vaihtaa eri yritystilien välillä. Klikkaamalla valkoisen hahmon kuvaa, valitse avautuvasta valikosta Vaihda yritystä. Saat listan yrityksistä, joihin sinulla on pääsy. Valitse yritys, jonka tilille haluat siirtyä ja tallenna valinta painamalla Vaihda."
  },
  {
    "id": "a8",
    "title": "Oma logo näkyville toimittajien näkymään : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190562-oma-logo-n%C3%A4kyville-toimittajien-n%C3%A4kym%C3%A4%C3%A4n",
    "updated": "2026-03-20",
    "content": "Halutessasi oman yrityksesi logon näkyville toimittajien näkymään, toimita oma logosi mahdollisimman hyvälaatuisena osoitteeseen support@thinger.fi ja kerro että haluat oman logosi näkyville Thinger Hankintaan toimittajan näkymään.Mitä neliskanttisempi logo, sen parempi. Suositeltavat tiedostomuodot: jpg, jpeg, png"
  },
  {
    "id": "a9",
    "title": "Thinger Hankinnan kuukausikirjeen malli : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001192041-thinger-hankinnan-kuukausikirjeen-malli",
    "updated": "2026-03-20",
    "content": "Ratkaisu-kotisivu Thinger Hankinta Thinger Hankinnan käyttöönotto Thinger Hankinnan kuukausikirjeen malli Tulosta Muokattu: Ma, 26 Elo, 2024 klo 10:12 AM Oliko tästä vastauksesta apua? Kyllä EiSend feedback Pahoittelut, että emme voineet auttaa. Anna palautetta, jotta voimme parantaa tätä artikkelia. Liittyvät artikkelit"
  },
  {
    "id": "a10",
    "title": "Sähköpostipohjat : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001266349-s%C3%A4hk%C3%B6postipohjat",
    "updated": "2026-03-20",
    "content": "Voit luoda omiin tarpeisiin erilaisia sähköpostipohjia. Jos et tee omia pohjia, silloin käytetään järjestelmän omaa oletuspohjaa.Versiopäivitys joulukuu 2024Käyttäjäkohtaiset sähköpostipohjatSähköpostipohjat ovat henkilökohtaisia ja näkyvät vain itselle. Pääset muokkaamaan pohjia omista asetuksista:Voit tehdä jokaiseen sähköpostin lähetykseen yhden tai useamman pohjan. Voit myös määritellä jokaiselle sähköpostityypille yhden pohjan oletuspohjaksi. Jos mikään tekemäsi pohja ei ole oletus, käytetään silloin järjestelmän omaa oletuspohjaa.Jos omia sähköpostipohjia on määritelty, tulee sähköpostin lähetyksen yhteyteen näkyville alasvetovalikko, jossa on esivalittuna joko se oma oletuspohja tai muutoin järjestelmän oletuspohja. Lähetysvaiheessa voit valita, mitä pohjaa haluat käyttää.Lähetysvaiheessa on edelleen mahdollista muokata kyseisen lähetyskerran tekstiä.Tarjouspyyntöpohjan muokkaus tageilläSähköpostin pohjaan on eri osioilla omat taginsä. Tagin tieto päivittyy pohjaan antamasi tiedon pohjalta eli tieto tulee tekemästäsi tarjouspyynnön eri kentistä. Tageja lisätään siihen kohtaan, missä kursori vilkkuu tekstissä. Teksti tulee näkyviin lopullisessa sähköpostiviestissä.Sähköpostiviestipohjan lukunäkymäSamaan aikaan, kun lisäät tagejä viestiisi, tieto päivittyy näytöllä oikealla olevaan sähköpostipohjan lukunäkymään. Näin voit aina ajantasaisesti tarkastaa viestisi sisältöä."
  },
  {
    "id": "a11",
    "title": "Miten luon uuden tarjouspyynnön? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001260022-miten-luon-uuden-tarjouspyynn%C3%B6n-",
    "updated": "2026-03-20",
    "content": "Uuden tarjouspyynnön luominen1. Päänäkymässä oikealla yläkulmassa Lisää 2. Anna tarjouspyynnölle nimi tai valitse listalta sopiva otsikko ja paina Luo tarjouspyyntö Järjestelmässä on valmiina n.400 erilaista otiskkoa.3. Tarjouspyyntö- lomake avautuu. Voit määritellä tarjouspyynnön yksityiskohdat: sisällön, tarjouslomakkeen kentät ja vastaanottajat.4. Tarjouspyyntö- välilehti Tässä ensimmäisessä välilehdessä kerrot tarjouspyynnön sisällön: tilaajan, kohteen, toimeksiantajan, projektinumeron, työn ajankohta, liitteet jne. Pakolliset kentät on merkattu tähdellä *.Toimeksiantaja ja projektinumero- kentät näkyvät vain, jos ne on asetettu näkymään Yrityksen asetuksissa.LiitteetJos tarvetta, liitteiden järjestystä voi jälkikäteen vaihtaa ottamalla kiinni =- merkistä. Yhden liitteen max.koko 25Mb. Näitä voi olla useampi Tarjouksen viimeinen jättöpäiväPäivämäärän lisäksi, voit asettaa tarjouspyynnölle kellonajan 5 minuutin tarkkuudella. Luonnos- tilassa olevan tarjouspyynnön poistaminenTarjouslomakkeen (hintakenttien määrittely)Tarjouspyynnön vastaanottajatMiten etsin toimittajia toimittajarekisteristäEsikatsele tarjouspyyntöä"
  },
  {
    "id": "a12",
    "title": "Luonnos tilassa olevan tarjouspyynnön poistaminen : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190507-luonnos-tilassa-olevan-tarjouspyynn%C3%B6n-poistaminen",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnön, jota ei ole vielä lähetetty, voi poistaa tarjouspyyntöpalvelusta. Tällöin kaikki tieto, mikä on kyseiselle tarjouspyynnölle tallennettu, häviää. Luonnoksen voi poistaa joko suoraan Aktiiviset tarjouspyynnöt näkymästä roskakorin kuvaTai avaamalla luonnoa ja valitsemalla kolmen pisteen takaa Poista luonnos"
  },
  {
    "id": "a13",
    "title": "Tarjouslomakkeen (hintakenttien) määrittely : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001202597-tarjouslomakkeen-hintakenttien-m%C3%A4%C3%A4rittely",
    "updated": "2026-03-20",
    "content": "Tyhjälle tarjouspyynnölle tulee automaattisesti oletuksena tietyt hinta- ja lisätietokentät.Näitä kaikkia kenttiä pystyy muokkaamaan, poistamaan sekä tarvittaessa lisäämään uusia.Katso myös tämä artikkeli TietotyypitYksittäisen kentän muokkausRattaan/kukkasen kuvasta saa auki yksittäisen kentän tiedot. Voit vaihtaa kentän nimeäVoit määritellä kentälle tarkemman kuvauksenVoit vaihtaa kentän tietotyyppiä (otsikko, teksti, monirivinen, hinta tai numero)hinta-tietotyypin voi määritellä verolliseksi tai verotonVoit määritellä kentälle halutessasi yksikön (esim. numerotyyppiseen €/h, €, €/km jne)Voit määritellä onko kenttä pakollinen kenttäHinta-tietotyyppiVoit ottaa kantaa onko hintakenttä veroton vai verollinen. Kentän poistaminen Voit poistaa ylimääräisen kentän painamalla roskakorin kuvaa. Kenttien järjestyksen vaihtaminenOta hiirellä kiinni kahdesta viivasta ja raahaamalla siirrä kenttä haluamasi kohtaan.Olemassa olevien kenttien kopiointiVoit kopioida olemassa olevan kentän kopiointi painiketta painamalla.Kopioitu kenttä tulee kopioidun kentän alapuolelle.Uusien kenttien lisäysHalutessasi lisää kenttiä, klikkaa LISÄÄ KENTTIÄValitse haluamasi kentät ja klikkaa LISÄÄ. Lisätyt kentät tulevat alimmaksi, josta niitä voi siirtää ja muokata haluamalla tavalla."
  },
  {
    "id": "a14",
    "title": "Minulla on liitettävänä tarjouspyyntöön isoja liitteitä, miten toimin? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001222548-minulla-on-liitett%C3%A4v%C3%A4n%C3%A4-tarjouspyynt%C3%B6%C3%B6n-isoja-liitteit%C3%A4-miten-toimin-",
    "updated": "2026-03-20",
    "content": "Voit kerätä isot liitteet tiedostopankkiin (onedrive, sharepoint, jne) ja liittää linkin tiedostopankkiin osaksi tarjouspyyntöäsi. Liitteen kuvaukseen voi kirjoittaa esim. mahdollisen salasanan joka tarvitaan tiedostopankkiin tai muita ohjeita. Yksityiskohtainen kuvausTarjouspyyntöä luodessa klikkaa Lisää linkki painiketta lisätäksesi linkin tarjouspyynnölle.Määritä linkille tarvittavat tiedot ja klikkaa Lisää. Linkin tiedot tulevat tämän jälkeen näkyville. Voit lisätä useamman linkin halutessasi tai poistaa lisäämäsi linkin.Tuetut tallennusformaatit"
  },
  {
    "id": "a15",
    "title": "Tarjouspyynnön vastaanottajat : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259281-tarjouspyynn%C3%B6n-vastaanottajat",
    "updated": "2026-03-20",
    "content": "Välilehti Vastaanottajatkun olet lähettämässä tarjouspyyntöä toimittajille tai muille sidosryhmilleSyöttäessä sähköpostiosoitteen tai henkilön nimen, näytetään yrityksen alla vain ne yhteyshenkilöt, jotka mätsää hakuunYritystä klikkaamalla aukeaa uusi yrityskortti, josta löytyy kaikki yrityksen tarjoamat palvelut sekä palvelualueet. Yrityskortilla näkyy ne henkilöt, jotka voivat vastaanottaa tarjouspyyntöjäYrityskortilta käy myös heti ilmi, jos toimittaja on luotettava kumppani. Voit hakea toimittajia myös niistä toimittajista, joilta yrityksenne on aiemmin pyytänyt tarjouksen jajotka löytyvät toimittajarekisteristä."
  },
  {
    "id": "a16",
    "title": "Miten etsin toimittajia toimittajarekisteristä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001222547-miten-etsin-toimittajia-toimittajarekisterist%C3%A4-",
    "updated": "2026-03-20",
    "content": "Voit etsiä toimittajia toimittajarekisteristä tarjouspyynnön vastaanottajaksi vastaanottajan nimen ja sähköpostin, yrityksen nimen, toimialan tai sijainnin perusteella. Voit lisäksi suodattaa näkyville yrityksen kumppanit. Yksityiskohtainen kuvausVoit suodattaa toimittajia eri tavoillaYhteyshenkilön nimen tai sähköpostin perusteellaYrityksen nimen perusteellaYrityksen tarjoamien palveluiden perusteellaYrityksen palvelualueen perusteellaKumppanuuden perusteellaAiempien tarjouspyyntöjen perusteellaHae palveluita- haku avaa Palvelusuodattimet näkymän, josta voit etsiä sopivaa toimialaa. Voit myös katsoa toimittajaan liittyviä kommentteja ja avata toimittajan tiedot tarkasteltavaksi."
  },
  {
    "id": "a17",
    "title": "En löydä toimittajaa toimittajalistauksesta, miten lähetän tarjouspyynnön hänelle? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001222549-en-l%C3%B6yd%C3%A4-toimittajaa-toimittajalistauksesta-miten-l%C3%A4het%C3%A4n-tarjouspyynn%C3%B6n-h%C3%A4nelle-",
    "updated": "2026-03-20",
    "content": "Jos vastaanottajien haku ei tuota tulosta, järjestelmä tällöin ehdottaa mahdollisuutta lisätä vastaanottaja käyttäen sähköpostiosoitetta. Voit lisätä kerralla useamman osoitteen puolipisteellä erotettuna.Yksityiskohtainen kuvausJos haku ei tuota tuloksia, ilmoittaa järjestelmä mahdollisuudesta lisätä toimittaja sähköpostiosoitteella. Osoitteen voi lisätä kummallakin kuvassa osoitetulla tavalla. Klikkaa Lisää vastaanottaja tai Lisää lisätäksesi vastaanottajan sähköpostin perusteella.Voit lisätä kerralla useammankin osoitteen puolipisteellä erotettuna."
  },
  {
    "id": "a18",
    "title": "Miten lähetän viestin toimittajille? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190512-miten-l%C3%A4het%C3%A4n-viestin-toimittajille-",
    "updated": "2026-03-20",
    "content": "Thinger Hankinnan kautta voit lähettää joko kaikille tarjouspyynnön toimittajille viestiä tai vain osalle. Etsi ja avaa tarjouspyyntö. Toiminnot valikosta valitse Lähetä viesti toimittajille. Voit muokata viestin sisältöä sekä poistaa toimittajat, joille et halua viestiä lähtevän. Jokainen toimittaja saa yksilöllisen viestin.Yksityiskohtainen kuvausJos olet esim. lisännyt uuden liitetiedoston tarjouspyyntöön, on tällöin hyvä kommunikoida asia tiedoksi kaikille toimittajille.Jos taas haluat lähestyä niitä toimittajia, jotka eivät ole vielä tarjoustaan jättäneet, voit valita vain heidät viestin vastaanottajiksi.Tai jos toimittaja on hukannut alkuperäisen linkin tarjouspyyntöön, saa tätä kautta lähetettyä hänelle uuden linkin.Viestin lähettäminen tapahtuu Toiminnot - Lähetä viesti toimittajille toiminnon kautta.Oletuksena vastaanottajiksi tulee kaikki tarjouspyynnölle määritellyt toimittajat, mutta voit halutessasi poistaa tässä kohtaa jakelulistalta osan toimittajista. Viestin otsikko ja teksti sisältö on täysin muokattavissa. Viestiin tulee aina linkki itse tarjouspyyntöön."
  },
  {
    "id": "a19",
    "title": "Voinko esikatsella tarjouspyyntöäni ennen lähetystä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001222543-voinko-esikatsella-tarjouspyynt%C3%B6%C3%A4ni-ennen-l%C3%A4hetyst%C3%A4-",
    "updated": "2026-03-20",
    "content": "Voit esikatsella omaa sekä kolleegoidesi tarjouspyyntöjä milloin tahansa. Voit esikatsella niin luonnos tilassa olevaa kuin jo lähetettyjä ja suljettuja tarjouspyyntöjä. Lähetettyjä ja suljettuja tarjouspyyntöjä voi esikatsella klikkaamalla Toiminnot valikkoa tarjouspyynnöltä ja valita Katso toimittajien näkymässä.Luonnosta voi esikatsella avaamalla luonnoksen ja klikkaamalla yläriviltä Esikatsele.Yksityiskohtainen kuvausLuonnoksen esikatselu tapahtuu klikkaamalla Esikatsele painiketta. Luonnoksen muutokset myös tallentuvat samassa yhteydessä. Lähetetyn ja suljetun tarjouspyynnön esikatselu tapahtuu avaamalla tarjouspyyntö ja valitsemalla Toiminnot valikosta Katso toimittajien näkymässä."
  },
  {
    "id": "a20",
    "title": "Mistä saan tarjouspyynnön tulostettua PDF:nä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190514-mist%C3%A4-saan-tarjouspyynn%C3%B6n-tulostettua-pdf-n%C3%A4-",
    "updated": "2026-03-20",
    "content": "Lähetetyn tarjouspyynnön saa tulostettua PDF:ksi Tarjouspyynnön Toiminnot - Tarjouspyynnön tiedot valikon kautta."
  },
  {
    "id": "a21",
    "title": "Miten lisään vastaanottajia jo lähetettyyn tarjouspyyntöön? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190511-miten-lis%C3%A4%C3%A4n-vastaanottajia-jo-l%C3%A4hetettyyn-tarjouspyynt%C3%B6%C3%B6n-",
    "updated": "2026-03-20",
    "content": "Uusien vastaanottajien lisäys jo lähetettyyn tarjouspyyntöön tapahtuu Toiminnot - Lisää vastaanottaja toiminnon kautta.Klikkaamalla Lisää vastaanottaja voit lisätä vastaanottajien sähköposteja yksitellen. Vastaanottajia voi myös hakea toimittajarekisteristä yrityksen nimen perusteella."
  },
  {
    "id": "a22",
    "title": "Miten jatkan tarjouspyynnön vastausaikaa? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001223420-miten-jatkan-tarjouspyynn%C3%B6n-vastausaikaa-",
    "updated": "2026-03-20",
    "content": "Toimittajat voivat jättää tarjouksia vaikka tarjouspyynnön jättöaika olisikin jo mennyt. Tarjouksia voi jättää niin kauan kunnes tarjouspyyntö on suljettu. Jättöajan jälkeen tulleet tarjoukset on merkitty Saapunut myöhässä statuksella.Halutessasi voit kuitenkin jatkaa jättöaikaa tarjouspyynnölle valitsemalla tarjouspyynnön Toiminnot valikosta Jatka vastausaikaa.Yksityiskohtainen kuvausTarjouksia voi vastaanottaa tarjouspyynnölle vaikka tarjouksen jättöaika olisikin umpeutunut. Jättöajan jälkeen saapuneet tarjoukset merkitään Saapunut myöhässä -merkinnällä vertailunäkymässä. Tarjouksia voi jättää niin kauan kunnes tarjouspyyntö on suljettuTarjousaikaa voit jatkaa valitsemalla tarjouspyynnön Toiminnot valikosta Jatka vastausaikaa tai klikkaamalla sinisellä olevaa vastausaikaa.Määrittele avautuvasta kalenterista haluttu vastausaika. Oletuksena on rasti päällä Ilmoita toimittajille vastausajan jatkamisesta.Huom! Uusi vastausaika pitää olla aina myöhäisempi ajankohta kuin nykyinen vastausaika.Huom! Vastausaikaa ei voi jatkaa, jos tarjousten vertailu on ollut lukittuna ja lukitus on jo ehdittu avata. Lähetä tämän jälkeen viesti kaikille toimittajille vastausajan jatkamisesta. Voit muokata viestin sisältöä halutessasi. Paina lopuksi Jatka vastausaikaa ja ilmoita."
  },
  {
    "id": "a23",
    "title": "Miten lisään liitteitä ja kuvia jo lähetettyyn tarjouspyyntöön? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190509-miten-lis%C3%A4%C3%A4n-liitteit%C3%A4-ja-kuvia-jo-l%C3%A4hetettyyn-tarjouspyynt%C3%B6%C3%B6n-",
    "updated": "2026-03-20",
    "content": "Etsi ja avaa lähetetty tarjouspyyntö. Sen Toiminnot-valikosta löytyy kohta Tarjouspyynnön tiedot. Valinnan takaa pääset katsomaan kaikkia tarjouspyynnölle syötettyjä tietoja kuten kohteen kuvausta ja tarjouspyynnön sisällön kuvausta. Myös tarjouspyynnön liitteet ja kuvat näkyvät Toiminnot kautta. Jos haluat päivittää liitetiedostoja tai kuvia, valitse Toiminnot- Hallinnoi liitetiedotoja tai Hallinnoi kuvia.Yksityiskohtainen kuvaus Hallinnoi liitetiedostojaEtsi haluamasi tarjouspyyntö valitsemalla se työpöydältä tai etsi haun kautta.Avaa tarjouspyynnön Toiminnot - Hallinnoi liitetiedostojaVoit lisätä tai poistaa liitetiedostoja Lisää liitteitä katkoviiva-alueelle tai rastilla X poistaa. Oletuksena muutoksesta ilmoitetaan toimittajille, rasti on päällä. Klikkaamalla Näytä vastaanottajat, näet kenelle muutosviestisi lähtee. Voit vielä muokata viestin sisältöä. Klikkaa Tallenna muutokset ja ilmoita.Vastaanottaja saa sähköpostiinsa viestin otsikolla, joka kertoo, että liitteitä on muokattu.Hallinnoi kuviaKuvien lisääminen ja poistaminen tapahtuu samallalailla kuin liitetiedotojen. Tuetut tallennusformaatitVinkki: Joskus etenkin puhelimella otetut kuvat ovat väärinpäin. Voit kääntää kuvan klikkaamalla sen auki ja klikkaamalla kääntöpainikkeita."
  },
  {
    "id": "a24",
    "title": "Tarjouspyynnön tapahtumalokin tulostus PDF-tiedostona : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259161-tarjouspyynn%C3%B6n-tapahtumalokin-tulostus-pdf-tiedostona",
    "updated": "2026-03-20",
    "content": "Tapahtumaloki on mahdollista tulostaa myös PDF- tiedostona jolloin:Tapahtumalokista on nopea ja tehokasta hakeaTapahtumaloki on helppo jakaaTapahtumaloki on helposti arkistoitavissaTapahtumaloki on helppo tulostaaAvaa tarjouspyyntö 2. Toiminnot- valikosta valitse Tapahtumahistoria3. Lataa tapahtumahistoria pdfTapahtumalokista näkeeKun vertailu-välilehti tai vertailu-excel on ladattuliitteitä on lisätty/poistettutoimittaja avaa tarjouspyynnnön, jättää tarjouksen/palautteentarjousajan jatkaminenlähetetyt sähköpostit eri vaiheistaprojektiarvio lisättyomistajuus vaihdettuTarjouspyyntö jaettu/jako poistettu"
  },
  {
    "id": "a25",
    "title": "Kollegan omistama tarjouspyyntö : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001275548-kollegan-omistama-tarjouspyynt%C3%B6",
    "updated": "2026-03-20",
    "content": "Joskus käy niin, että kollega lähtee talosta ja hänen työnsä jää kesken. Silloin avoimet tarjouspyynnöt pitää/kannattaa siirtää toisen omistajan nimiin.Toiminnot - Vaihda omistajaJärjestelmä tarjoaa yrityksen käyttäjälistaa, josta voi valita oikean uuden omistajan.Uusi omistaja näkyy tarjouspyynnön 'etusivulla' työpöydällä"
  },
  {
    "id": "a26",
    "title": "Huomion lisääminen tarjouspyynnölle : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001279299-huomion-lis%C3%A4%C3%A4minen-tarjouspyynn%C3%B6lle",
    "updated": "2026-03-20",
    "content": "Voit tarvittaessa lisätä tarjouspyynnölle huomioita ts.muistiinpanoja. HUOMIOT- osio löytyy työpöydän yläosasta, ks.kuva Lisää huomioKlikkaa kpl-määrä linkkiäHuomiot- ikkuna avautuu. Lähde kirjoittamaan Huomio- kenttään. LISÄÄ- painikkeella tallennat huomion tarjouspyynnölle.Huomiota voi muokata tai poistaa.Uuden huomion voi lisätä alkamalla kirjoittaa Huomio- kenttään, LISÄÄ- painike aktivoituu."
  },
  {
    "id": "a27",
    "title": "Mallipohja eri tarjouspyynnöille : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259761-mallipohja-eri-tarjouspyynn%C3%B6ille",
    "updated": "2026-03-20",
    "content": "Olemme tehneet muutaman mallipohjan, joita voit hyödyntää omassa työssäsi. Mallipohjan käyttö nopeuttaa tarjouspyynön luontia, kun tietyt kentät on jo valmiiksi mietitty. Mallipohja kopioidaan itselle ja sen jälkeen kenttiä voi vielä muokata itse.Jos haluat malllipohjat käyttöön, ota yhteys meidän tukeensupport@thinger.fipuh. 02 77980Julkisivujen, parvekkeiden ja pihakansien kuntotutkimusPalovaroittimien uusiminen10-vuotisvastuutarkastusSähköautojen latausinfran suunnittelu ja valvontaSähköautojen latausinfran toteutusIlmanvaihtokanavien puhdistus ja säätöKameravalvontaEnergiasäästökartoitusKiinteistönhuollon kilpailutusMaalämpö palvelunaMaalämpö- ja/tai poistoilman lämmön talteenottohankkeen konsultointiPutkistojen kuntotutkimusKaukolämmön alajakokeskuksen uusimisen suunnitteluProjektijohto ja valvonta, mm.maalämpösähköjulkisivulinjasaneerausenergiahankeNäin löydät mallipohjatNäin saat mallipohjan käyttöösiKaikki tarjouspyynnöt - tyhjennä hakuehdot - omistaja 'Katru' - hakusana 'malli'klikkaa haluttu mallipohja aukiToiminnot - Kopioi uuteen tarjouspyyntöönValitse kentät, jotka haluat mukaan tarjouspyyntöönKopioiAloita tarjouspyynnön tekoHuomaa poistaa sana 'MALLIPOHJA' tarjouspyynnön otsikosta, jos kopioit mukaan myös otsikonHUOMAA! Tarjouspyynnön otsikossa on vielä sana 'MALLIPOHJA'. Muista poistaa tämä!"
  },
  {
    "id": "a28",
    "title": "Miten voin jakaa lähetetyn tarjouspyynnön omalle organisaatiolle? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001218811-miten-voin-jakaa-l%C3%A4hetetyn-tarjouspyynn%C3%B6n-omalle-organisaatiolle-",
    "updated": "2026-03-20",
    "content": "Lähetetyn Tarjouspyynnön voi jakaa omalle organisaatiolle ottamalla tarjouspyynnön auki ja valitsemalla Jakaminen-välilehtiOmalle organisaatiolleLisätyt käyttäjät näkyvät Jakaminen osiossa, jota kautta jaon voi myös poistaa. Tarjouspyyntö tulee kyseiselle henkilölle näkyville omalle työpöydälleen Aktiiviset tarjouspyynnöt näkymään.Käyttäjälle jaetut tarjouspyynnöt on merkitty kuvakkeella."
  },
  {
    "id": "a29",
    "title": "Tarjouspyynnön jakaminen sidosryhmille : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001218813-tarjouspyynn%C3%B6n-jakaminen-sidosryhmille",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnön voi jakaa sidosryhmille, esim. hallituksen puheenjohtajalle, ottamalla tarjouspyynnön auki ja valitsemalla Jakaminen - SidosryhmilleLinkki toimii niin kauan kun kilpailutus on käynnissä. Suljettua tarjouspyyntöä ei pysty sidosryhmäläinen tarkastelemaanSyötä tiedot ja valitse Lisää jako.Lisätyt käyttäjät näkyvät Jakaminen osiossa, jota kautta jaon voi myös poistaa. Lisäksi lisätyn sidosryhmäläisen kohdalta löytyy linkki, josta voi tarkastella samaa katselulinkkiä, jonka sidosryhmäläinen on saanut.Sidosryhmäläinen saa sähköpostissa linkin, jota kautta pääsee tarkistelemaan tarjouspyynnön tilaa.Linkin takaa sidosryhmäläinen näkee keille tarjous on lähetetty, statuksen jokaisen osalta, sekä tarjouspyynnön sisällön ja liitteet."
  },
  {
    "id": "a30",
    "title": "Sidosryhmäläinen ei saa linkkiä auki : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001269845-sidosryhm%C3%A4l%C3%A4inen-ei-saa-linkki%C3%A4-auki",
    "updated": "2026-03-20",
    "content": "Poistettu jakoJos isännöitsijä on jaannut tarjouspyynnön sidosryhmäläisille, mutta päättääkin sitten myöhemmin poistaa jaon, sidosryhmälälinen ei saa enää spostissa olevaa linkkiä auki.Hänelle tulee seuraavanlainen ilmoitus:"
  },
  {
    "id": "a31",
    "title": "Milloin tarjouspyyntö kannattaa jakaa sidosryhmille / omalle organisaatiolle? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001222545-milloin-tarjouspyynt%C3%B6-kannattaa-jakaa-sidosryhmille-omalle-organisaatiolle-",
    "updated": "2026-03-20",
    "content": "esimerkkeinä: lomatuuraajallehallinnollinen ja tekninen isännöitsijä hoitaa samaa tarjouspyyntöätaloyhtiön hallituksen edustajallevakuutusyhtiön edustajalleKatso tarkemmat ohjeet Tarjouspyynnön jakaminen sidosryhmille"
  },
  {
    "id": "a32",
    "title": "Voiko luonnostilassa olevan tarjouspyynnön jakaa? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259163-voiko-luonnostilassa-olevan-tarjouspyynn%C3%B6n-jakaa-",
    "updated": "2026-03-20",
    "content": "Luonnostilassa olevan tarjouspyynnön jakaminen sidosryhmilleVoit jakaa tarjouspyynnön luonnoksen relevanteille sidosryhmille ennen sen virallista lähettämistä. Tämä mahdollistaa palautteen keräämisen tarjouspyynnön hiomisen yhteistyössäsaumaton tiedonkulku lisää läpinykyvyyttäLuonnosvaiheessa lisätyt sidosryhmäläiset pysyvät automaattisesti mukana myös tarjouspyynnön lähettämisen jälkeen, ellei heitä erikseen poisteta. Tämä varmistaa saumattoman tiedonkulun koko prosessin ajan. Kaikki sidosryhmät pysyvät ajan tasalla tarjouspyynnön kehityksestä alusta alkaen, mikä parantaa prosessin läpinäkyvyyttä.Avaa lúonnostilassa oleva tarjouspyyntö2. Klikkaa kolme pistettä sivun oikeassa laidassa - valitse Jaa sidosryhmille3. Määrittele vastaanottajat. Tämän jälkeen Lisää jako- nappula tulee aktiiviseksi, paina sitä. Aktiiviset jaot- ikkunaan ilmestyy henkilöt, joille tarjouspyyntö on jaettu ja linkki tarjouspyyntöön."
  },
  {
    "id": "a33",
    "title": "Miten lähetän tarjouspyynnön uudestaan? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259433-miten-l%C3%A4het%C3%A4n-tarjouspyynn%C3%B6n-uudestaan-",
    "updated": "2026-03-20",
    "content": "Jos toimittaja sanoo, ettei ole saanut sähköpostia tarjouspyynnöstä, sen voi lähettää järjestelmästä uudestaan.Samoin, jos sähköpostiosoite on kirjoitettu väärin, tarjouspyynnön voin lähettää uudestaan oikeaan osoitteeseen.UUDELLEEN LÄHETYSEtsi tarjouspyyntösi, joko Aktiiviset tai Kaikki tarjouspyynnötToiminnot Lähetä viesti toimittajalle - lähettää viestin kaikille toimittajille, jotka ovat tarjouspyynnön jo kerran saaneet. Viestin otsikko on MUUTOS tarjouspyyntöönLisää vastaanottaja - tässä voit syöttää uuden toimittajan sähköpostiosoitteen. Viestin otsikko TARJOUSPYYNTÖ.jos haluat lähettää tarjouspyynnön uudestaan vain jollekin toimittajalle, poista lähetyslistalta muut toimittajatSÄHKÖPOSTIOSOITE VIRHEELLINENJos olet epähuomiossa kirjoittanut sähköpostiosoitteen väärin, järjestelmä antaa siitä herjan. Punainen kolmio ilmestyy vastaanottajan tietoon. Tämä tapahtuu VAIN, jos et ole luvittanut O365. Eli sähköpostin lähettäjä pitää olla meidän järjestelmä, no-reply@thinger.fi. Jos olet luvittanut O365 lähettämään viestejä omissa nimissäsi, saat omaan sähköpostiin tiedon virheellisestä sähköpostista.Jos lähetysvirhettä ei ole tullut sähköpostiisi (jos luvitus päällä) tai meidän järjestelmään, lähtökohtaisesti viesti on silloin toimitettu perille.Viestiä koitetaan lähettää muutaman kerran ennenkuin virhe palautetaan. Kun haluat lähettää tarjouspyynnön uudestaan, oikeaan osoitteeseen, toimi kuten kohdassa UUDELLEEN LÄHETYS neuvotaan.Aktiiviset tarjouspyynnötTässä näkymässä näet myös punaisen kolmion, joka kertoo, että jokin sähköposti jäi tavoittamatta. Mihin sähköpostiosoitteeseen virhe kohdistuu, sen näet avaamalla tarjouspyynnön."
  },
  {
    "id": "a34",
    "title": "Evästeet/cookies: Miksi tarjouspyynnön esikatselu ei avaudu? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259530-ev%C3%A4steet-cookies-miksi-tarjouspyynn%C3%B6n-esikatselu-ei-avaudu-",
    "updated": "2026-03-20",
    "content": "Ongelma liittyy selaimen asetuksiin. Pitää hyväksyä evästeet.Kun käyttäjä yrittää esikatsella Luonnos-tilassa olevaa tarjouspyyntöä ja klikkaa ”Esikatsele”, palautuu käyttäjä takaisin Aktiiviset tarjouspyynnöt -työpöytä näkymään, eikä esikatselu avaudu. Tee muutoksia selaimen asetuksiin.Google Chrome selainasetuksetAvaa selaimessa Asetukset/Settingslöytyy kolmen pisteen takaa2. Yksityisyys ja turvallisuus/privacy and security kolmannen osapuolen evästeet/third-pary cookies - klikkaa3. Salli kolmannen osapuolen evästeet - Lisää/Add Thinger Hankinta sallittujen listalleMicrosoft Edge selainasetuksetAvaa Microsoft EdgeKlikkaa oikeasta yläkulmasta ⋯ (kolme pistettä)Valitse Settings (Asetukset)Valitse vasemmaltaPrivacy, search, and servicesSelaa alas kohtaan CookiesVarmista seuraavat asetukset:✅ Allow sites to save and read cookie data (recommended) → ON❌ Block third-party cookies → OFF (kytkin pois päältä)Kuvassa asetukset ovat oikein:Third-party cookies EI ole estettyEvästeet ovat sallittujaSiirry Salli-osioon ja valitseLisää/Add site, jos haluat sallia evästeet sivustokohtaisesti kirjoittamalla sivuston URL-osoitteen.Firefox asetuksetAvaa selaimessa asetukset / settingsPrivacy settings ja etsi kohta Manage exceptions ja klikkaa se aukisyötä kenttään hankinta.thinger.fi,paina Allow ja sitten Save ChangesPäivitä Hankinnan välilehti -"
  },
  {
    "id": "a35",
    "title": "Lomatuuraus : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001273340-lomatuuraus",
    "updated": "2026-03-20",
    "content": "Kun lomakausi lähestyy ja sinulla on kilpailutuksia kesken, kollega voi helposti katsoa sinun avoimia tarjouspyyntöjäsi työpöydän kautta.Vaihtoehto 1Kaikki tarjouspyynnötValitse näkymä Kaikki tarjouspyynnötOmistaja - valitse oikea kollega, kenen kilpailutusta seuraat loman ajanVaihtoehto 2Aktiiviset tarjouspyynnötValitse näkymä Aktiiviset tarjouspyynnötValitse omistaja listalta"
  },
  {
    "id": "a36",
    "title": "Miten vertailen saamiani tarjouksia? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001184216-miten-vertailen-saamiani-tarjouksia-",
    "updated": "2026-03-20",
    "content": "Kun tarjousaika on päättynyt, tulleet tarjoukset näkyvät tarjouspyynnön vertailunäkymässä.Lisäksi tarjoukset saa ladattua exceliin Lataa vertailu excel painiketta painamalla.Excelissä voi tehdä tarvittavia lisälaskutoimituksia ja lisämerkintöjä.Exceliin tulee näkyville kaikki toimittajat, joille tarjouspyyntö on lähetetty, huolimatta siitä, ovatko he jättäneet tarjouksen tai eivät.Toimittajat järjestetään siten, että ensin aakkosjärjestyksessä ne toimittajat jotka ovat jättäneet tarjouksen. Sitten ne toimittajat aakkosjärjestyksessä, jotka ovat avanneet tarjouspyynnön ja lopuksi ne, jotka eivät ole avanneet tarjouspyyntöä. Lisäksi näytetään syy, jos toimittaja on ilmoittanut ettei aio jättää tarjousta. Vertailuexcelistä löytyy myös listaus liitteistä, jotka liittyvät jätettyyn tarjoukseen:"
  },
  {
    "id": "a37",
    "title": "Miten jaan vertailun sidosryhmille? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259531-miten-jaan-vertailun-sidosryhmille-",
    "updated": "2026-03-20",
    "content": "Vertailun jakamiseen on kaksi vaihtoehtoa:Voit Vertailu- näkymässä ladata tarjoukset pdf-muodossa ja lähettää sähköpostilla.Voit ladata kaikki tarjoukset yhdellä kertaa exceliin, muokata sitä siellä ja lähettää sähköpostilla sidosryhmälle."
  },
  {
    "id": "a38",
    "title": "Vertailu Excel: miksi kaikki teksti ei näy excelissä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001176855-vertailu-excel-miksi-kaikki-teksti-ei-n%C3%A4y-exceliss%C3%A4-",
    "updated": "2026-03-20",
    "content": "Syy saattaa johtua siitä että yksittäiseen tarjouspyynnön kenttään on tullut pitkä teksti eikä excel kykene suoriltaan näyttämään kaikkea tekstiä.Tällöin on tarve yhdistää useampi solu yhteen Excelin Yhdistä toiminnolla jotta koko teksti näkyy.Tarkista että halutun laajennettavan solun alapuolella on tyhjiä rivejävalitse solu ja sen alapuolelta 1-3 tyhjään soluaValitse \"Yhdistä solut\"tarvittaessa venytä solua niin pituus- kuin leveyssuunnassa"
  },
  {
    "id": "a39",
    "title": "Miten lukitsen tarjouspyynnön vertailun? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001198734-miten-lukitsen-tarjouspyynn%C3%B6n-vertailun-",
    "updated": "2026-03-20",
    "content": "Lukitus asetuksista koko yrityksen tarjouspyynnöilleHankinnan asetusten kautta, voitte helposti itse asettaa yrityksellenne tarjousten lukituksen päälle.Lukituksen saa tarjouspyynnön lähetysvaiheessa toki otettua pois päältä, mutta suosittelemme vahvasti lukitsemaan tarjousten katselun, kunnes vastausaika on umpeutunut.- valkoinen hahmo- yrityksen asetukset- asettaminen arvo oletukseksi koskee tällöin yrityksen kaikkia tarjouspyyntöjäYksittäisen tarjouspyynnön lukitus Jos lukitus ei ole oletusarvona päällä yrityksellä, lukitus lisätään tarjouspyynnölle luontivaiheessa joko tarjouspyynnön asetuksista tai lähetysvaiheessa.- kolme pistettä- asetuksetLukitus lähetysvaiheessaTäppä päälle 'Lukitse tarjousten vertailu'.Tarjouspyynnön vertailu välilehdellä näkyy lukon kuva merkkinä lukituksesta."
  },
  {
    "id": "a40",
    "title": "Miten tarjouspyynnön lukitus näkyy toimittajille? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001268472-miten-tarjouspyynn%C3%B6n-lukitus-n%C3%A4kyy-toimittajille-",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnön voi lukita, niin että tarjouksia ei voi katsoa kuin vasta viimeisen jättöpäivän jälkeen. Katso ohje lukitukseen alla:https://thinger.freshdesk.com/support/solutions/articles/48001198734-miten-lukitsen-tarjouspyynn%C3%B6n-vertailun-Vertailun lukituksesta tieto sekä toimittajien että sidosryhmäläisten näkymäänJos tarjouspyynnön vertailu on lukittu, tieto näkyy toimittajille ja sidosryhmäläisille.Toimittajan saama sähköpostiNäkymä toimittajille:Näkymä sidosryhmäläisille:"
  },
  {
    "id": "a41",
    "title": "Miten avaan tarjouspyynnön vertailunäkymän lukituksen? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001198737-miten-avaan-tarjouspyynn%C3%B6n-vertailun%C3%A4kym%C3%A4n-lukituksen-",
    "updated": "2026-03-20",
    "content": "Jos tarjouspyynnön vertailu on lukittu ja tarjouksen vastausaikaa on vielä jäljellä, ei tarjouksen vertailunäkymää pysty avaamaan. Avaus on mahdollista vasta kun vastausaika on päättynyt.Kun tarjousaika on mennyt umpeen, tarjoukset voi avata vertailtavaksi klikkaamalla Avaa vertailtavaksi.Avaajalta kysytään vielä varmistus ja kerrotaan mitä tietoja avauksesta tallennetaan.Avauspäivä ja avaajan nimi näkyy vertailunäkymän lisäksi myös vertailuexcelissä ja tarjouspyyntö PDF:ssä.Vertailunäkymässä näkyy myös tieto Saapunut myöhässä (punaisella), jos tarjous on tullut vastausajan umpeutumisen jälkeen."
  },
  {
    "id": "a42",
    "title": "Miten lukitus näkyy sidosryhmälle? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001279115-miten-lukitus-n%C3%A4kyy-sidosryhm%C3%A4lle-",
    "updated": "2026-03-20",
    "content": "Lukitun tarjouspyynnön / kilpailutuksen tilanteen jakaminen sidosryhmälleKun tarjouspyyntö on lukittu ja kilpailutuksen tilanne jaetaan sidosryhmälle, tieto lukituksesta näkyy seuraavalla tavalla:tee sidosryhmäjako Hankinnassasidosryhmäläinen saa spostinSpostissa olevan linkin takaa avautuu kilpailutuksen tilanne:lukon kuva kertomassa lukituksestateksti kertomassa lukituksesta"
  },
  {
    "id": "a43",
    "title": "Tarjousten vertailu AI:n avulla : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001281129-tarjousten-vertailu-ai-n-avulla",
    "updated": "2026-03-20",
    "content": "Tarjousten vertailu AI:n avullaVoit nyt pyytää AI:ta analysoimaan tarjouksia ja tarjoukseen liitettyjä liitteitä.AI purkaa tarjoukset selkokielelle, sekä antaa päätösehdotuksen.Huom! Koska analyysi on tekoälyn luoma, saattaa se sisältää virheitä. Huomioi tämä tehdessäsi lopullista lausuntoa."
  },
  {
    "id": "a44",
    "title": "Tarjouspyynnön päättäminen : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190516-tarjouspyynn%C3%B6n-p%C3%A4%C3%A4tt%C3%A4minen",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnön päättäminen on tärkeä tehdä, sillä osana päättämistä hoidetaan myös viestintä niin voittaneelle kuin hävinneille toimittajille. Päätetty tarjouspyyntö poistuu myös aktiiviselta työpöydältä, mutta siihen pystyy tarvittaessa palaamaan Kaikki tarjouspyynnöt valikon kautta.Päättäminen tapahtuu avaamalla tarjouspyyntö ja klikkaamalla Päätä painiketta. Tarjouspyynnön voi myös päättää ilman yhtään valittua toimittajaa. Sekä voittajan, että hävinneiden sähköposteja on myös mahdollisuus muokata.Yksityiskohtainen kuvausPÄÄTTÄMINEN, KUN VOITTAJA ON VALITTUTarjouspyynnön päättäminen tapahtuu avaamalla tarjouspyyntö ja klikkaamalla Päätä.Päättämisprosessi jakautuu 5 eri vaiheeseen. Vaiheita on vähemmän jos esim. voittajaa ei valita lainkaan.Valitse toimittajaPäätä tarjouspyynnön laskutusEsikatsele voittajan sähköpostiviestiEsikatsele hävinneiden sähköpostiviestiYhteenveto1. Valitse toimittaja, joka voitti tarjouskilpailun2. Päätä tarjouspyynnön laskutus3. Esikatsele voittajan sähköpostiviestiSähköpostiin oletuksena haetaan tilaajan verkkolaskutiedot verkkolaskuosoite.fi -palvelusta.Voit muokata voittajalle menevän sähköpostin otsikkoa ja viestiä.Voit myös jättää lähettämättä sähköpostia voittajalle, mutta tämä ei ole suositeltu vaihtoehto.4. Esikatsele hävinneiden sähköpostiviestiVoit myös jättää lähettämättä sähköpostia hävinneille, mutta tämä ei ole suositeltu vaihtoehto. On tärkeää, että hävinneetkin toimittajat saavat tiedon, jolloin vähennetään turhia kyselyitä heidän suunnalta kilpailutuksen lopputuloksen osalta.5. YhteenvetoPÄÄTTÄMINEN, KUN TOIMITTAJAA EI VALITA LAINKAANJos toimittajaa/voittajaa ei valita lainkaan ja tarjouspyyntö päätetään, silloin kaikille tarjouksen jättäneille toimittajille lähtee yhteinen sähköposti. Tämä sähköpostiviestipohja on tyhjä, muista siis kirjoittaa siihen jotain. Muutoin toimittajat saavat viestin, joka on tyhjä.TapahtumaTapahtumalokissa on eritelty tapahtumat: viesti voittajalle ja viesti hävinneille"
  },
  {
    "id": "a45",
    "title": "Mistä näen, milloin tarjouspyynnön jättöaika lähestyy? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001271604-mist%C3%A4-n%C3%A4en-milloin-tarjouspyynn%C3%B6n-j%C3%A4tt%C3%B6aika-l%C3%A4hestyy-",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnön tekijäJos olet tarjouspyynnön tekijä, tällöin järjestelmä lähettää viestin sähköpostiin, kun tarjouksen jättöaika on lähestymässä. Sähköpostissa onyhteenveto, montako tarjousta on siihen mennessä saapunut. Tarjouksen jättäjä - KalenterimuistutusJos olet tarjouksen jättäjän roolissa, voit tallentaa tarjouspyynnöltä itsellesi kalenterimerkinnän muistuttamaan, kun tarjouksen jättöaika lähestyy."
  },
  {
    "id": "a46",
    "title": "Onko pakko odottaa tarjouspyynnön päättymiseen asti? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001275286-onko-pakko-odottaa-tarjouspyynn%C3%B6n-p%C3%A4%C3%A4ttymiseen-asti-",
    "updated": "2026-03-20",
    "content": "Ei ole. Voit päättää tarjouspyynnön milloin tahansa, vaikka kaikki toimittajat eivät olisi vastanneetkaan. Muista kuitenkin hoitaa viestintä muille toimittajille, jotta he tietävät, mitä on tapahtunut. Tarjouksia ei voi enää tarjouspyyntöön jättää, kun se on päätetty ja suljettu."
  },
  {
    "id": "a47",
    "title": "Miten valitsen kaksi voittajaa? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001276462-miten-valitsen-kaksi-voittajaa-",
    "updated": "2026-03-20",
    "content": "Joskus on tilanteita ja kilpailutuksia, kun voittajia valitaan kaksi. Järjestelmän Päätä- toiminto antaa valita vain yhden voittajan. Kahden voittajan valinnan voi kiertää alla kuvatulla ohjella:Kun voittajia on kaksi ja olet päättämässä tarjouspyyntöä, voit toimia silloin näin:Toiminnot - Lähetä viesti toimittajille2. Jätä vastaanottajiksi valitut voittajat, poista muut. Muokkaa viesti halutunlaiseksi. Tätä varten voi myös tehdä oman sähköpostipohjan.3. Päätä tarjouspyyntö tämän jälkeen niin, että voittajia ei valita. Jätä viestin vastaanottajiksi hävinneet toimittajat ja muotoile viesti sopivaksi."
  },
  {
    "id": "a48",
    "title": "Toimittajan lisäys toimittajarekisteriin : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190480-toimittajan-lis%C3%A4ys-toimittajarekisteriin",
    "updated": "2026-03-20",
    "content": "Toimittajat syntyvät järjestelmään kahdella eri tavalla. Kun toimittaja jättää ensimmäisen tarjouksensaRekisteröitymisen yhteydessäSinun ei siis tarvitse - etkä edes voi - lisätä toimittajia itse. Voit aina lähettää tarjouspyyntöjä mihin tahansa sähköpostiosoitteeseen riippumatta siitä, onko toimittaja rekisterissä vai ei. Toimittajan valinta rekisteristä tekee valinnasta hieman helpompaa.Voit tarkistaa ensin löytyykö etsimäsi toimittaja toimittajarekisteristä Toimittajat - Kaikki toimittajat välilehdeltä. Mikäli rakennat järjstelmään kumppaniverkostoa toimittajista, voit kutsua kumppaniksi myös yrityksen jota järjestelmästä ei löydy. Toimittajan rekisteröitymisen yhteydessä yritys lisätään myös kumppaniksi.Tätä voi hyödyntää, jos haluat lisätä järjestämään yrityksiä, joiden palvelutarjontaa et tunne kovin hyvin. Saattaa olla, että esimerkiksi harvemmin tarvittavia palveluja ei tarjota omalla paikkakunnallasi, jolloin haluat laajentaa tarjouspyyntöjä laajemmalle alueelle.Kutsuminen tapahtuu Kumppanit välilehdeltä valitsemalla Lisää kumppani.Valitse Eikö löydy? Kutsu toimittaja kumppaniksi.Syötä tiedot ja paina Kutsu. Toimittajalle lähtee sähköpostitse rekisteröitymispyyntö."
  },
  {
    "id": "a49",
    "title": "Miten määrittelen toimittajan kumppaniksi / poistan kumppaneista? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190482-miten-m%C3%A4%C3%A4rittelen-toimittajan-kumppaniksi-poistan-kumppaneista-",
    "updated": "2026-03-20",
    "content": "Voit määritellä olemassa olevan toimittajan kumppaniksi avaamalla yrityksen tiedot ToimittajatToiminnot - Valitse kumppaniksiKumppanuuden merkiksi lisätään tällöin Käden puristus- kuvake. Kumppanuuden voi päättää avaamalla yrityksen tiedoToiminnot - Peru kumppanuus"
  },
  {
    "id": "a50",
    "title": "Toimittajan palveluluokittelu ja toimialueet : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001214779-toimittajan-palveluluokittelu-ja-toimialueet",
    "updated": "2026-03-20",
    "content": "Vastaanottajia valitessa Tarjouspyynnön lähetystä varten, näytetään rekisteröityneistä toimittajista lisätietoja. Etsi toimittajia, klikkaa nimeä ja sivulle aukeaa lisätietoa toimittajasta.Tarjouspyynnön lähetysvaihe - vastaanottajatSamat tiedot löytyvät myös Toimittajat näkymän kautta yrityksen perustiedoistaToimittajat-näkymä"
  },
  {
    "id": "a51",
    "title": "Miten lisään toimittajalle yleisen kommentin? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001243628-miten-lis%C3%A4%C3%A4n-toimittajalle-yleisen-kommentin-",
    "updated": "2026-03-20",
    "content": "Voit lisätä koska tahansa toimittajalle yleisen kommentin. Kommentit ovat näkyvissä vain omalle organisaatiolle.Lisäys tapahtuu etsimällä haluttu toimittaja Toimittajarekisteristä ja valitsemalla Toiminnot valikosta Lisää kommentti tai klikkaamalla ylärivillä olevaa Kommentit kohtaa. Voit myös muokata ja poistaa omia kommenttejasi, mutta et muiden organisaatiossasi olevien.Yksityiskohtainen kuvausLisätäksesi toimittajalle yleisen kommentin, etsi ensin haluttu toimittaja toimittajarekisteristä.Valitse tämän jälkeen joko Toiminnot valikosta Lisää kommentti tai klikkaa kommentteja.Näet kaikki toimittajasta jätetyt kommentit ja voit jättää oman kommentin.Kolmesta pisteestä klikkaamalla voit muokata tai poistaa jättämäsi kommentin. Et voi poistaa tai muokata muiden jättämiä kommentteja."
  },
  {
    "id": "a52",
    "title": "Miksi en löydä yritystäni toimittajarekisterissä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001259079-miksi-en-l%C3%B6yd%C3%A4-yrityst%C3%A4ni-toimittajarekisteriss%C3%A4-",
    "updated": "2026-03-20",
    "content": "Ongelma:Yritän jättää tarjousta, mutta en löydä yritystäni toimittajarekisteristä?Ratkaisu:Tarkista kirjoitusasu.Thinger hakee tiedot suoraan YTJ:n rekistereistä, jolloin yrityksen nimikin pitää hakea sen virallisella muodolla. Voit kirjoittaa vain osan yrityksesi nimestä ja valita sen jälkeen avautuvasta listasta yrityksesi."
  },
  {
    "id": "a53",
    "title": "Miten lisään toimittajalle projektiarvion tarjouspyynnön päätyttyä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001243625-miten-lis%C3%A4%C3%A4n-toimittajalle-projektiarvion-tarjouspyynn%C3%B6n-p%C3%A4%C3%A4tytty%C3%A4-",
    "updated": "2026-03-20",
    "content": "Kun tarjouspyyntö on päätetty ja voittaja on valittu, voidaan toimittajalle lisätä projektiarvio kun koko kilpailutettu työ on saatettu päätökseen. Projektiarvion voi lisätä tarjouspyynnön Toiminnot valikon kautta valitsemalla Lisää projektiarvio tai menemällä toimittajarekisteriin, etsiä toimittajan ja Tapahtumat välilehdeltä lisätä päättyneelle tarjoukselle arvion. Arviot näkyvät vain omalle organisaatiollesi. Voit lisätä useita projektiarvioita yhteen tarjouspyyntöön liittyen.Yksityiskohtainen kuvausVoit lisätä päätetyn tarjouspyynnön voittajalle projektiarvion. Projektiarvion voi lisätä joko tarjouspyynnön kautta avaamalla tarjouspyynnön ja valitsemalla Toiminnot valikosta Lisää projektiarvio.Tai etsimällä toimittaja toimittajarekisteristä ja Tapahtumat välilehden kautta lisätä projektiarvio.Muistutus projektiarvion antamisestaKun tarjouskilpailu on päättynyt ja voittaja on valittu, järjestelmä muistuttaa projektiarvion antamisesta tietyn ajan kuluessa. Kellon kuva yläkulmassa oikealla, sen päälle ilmestyy punainen merkki.Jos avoimia projektiarvioita on, pääset antamaan niitä klikkaamalla kellonkuvaa. Avautuu lista kaikista päätetyistä tarjouskilpailuistaVoit päättää, annatko arvion tai valita 'Ei projektiarviota'"
  },
  {
    "id": "a54",
    "title": "Miten tarkistan onko toimittaja Luotettava kumppani? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001201237-miten-tarkistan-onko-toimittaja-luotettava-kumppani-",
    "updated": "2026-03-20",
    "content": "Toimittajarekisterin kauttaValitse Toimittajat etsi toimittaja jonka tietoja haluat tarkastellaLuotettavuus välilehdeltä näet suoraan, onko yritys luotettava kumppanivihreä väkänen --> Luotettava, kaikki kunnossaIkoni voi olla myös keltainen varoitus tai harmaa, jolloin tiedot puuttuvat. Tämä auttaa tunnistamaan tilanteet, joissa asiaan on syytä kiinnittää erityistä huomiota. Vertailunäkymän kauttaTarjouspyynnön vertailunäkymässä näet sekä Intrumin että Luotettava Kumppanin- tiedot. Klikkaa alasvetonuoltaJärjestelmä näyttää vihreää väkästä, jos kaikki kunnossaitse Luotettava kumppani- raportin voit ladata täältä, jos yrityksesi on Vastuu Groupin asiakas. raportin lataaminen edellyttää rajapintatunnisteen hakemistaLuotettava kumppani- tietoa ei ole saatavillaTässä esimerkki tilanteesta, jossa tietoja ei ole käytössä."
  },
  {
    "id": "a55",
    "title": "Rajapintatunniste - Vastuu Group : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001273262-rajapintatunniste-vastuu-group",
    "updated": "2026-03-20",
    "content": "Mikäli yrityksesi on Vastuu Groupin asiakas, voit nyt hakea toimittajan Luotettava Kumppani -raportin suoraan Hankinnan sisällä. Raporttien lataaminen edellyttää aina järjestelmään syötettyä Luotettava Kumppani -rajapintatunnistetta. Ennen ominaisuuden hyödyntämistä sinun pitää siis asettaa Vastuu Groupin rajapintatunniste yrityksen asetuksissa.Itse rajapintatunniste luodaan Vastuu Groupin palvelussa. Ohje Rajapintatunnisteen haku, alla.Rajapintatunnisteen hakuRajapintatunniste on ladattavissa Vastuu Groupin palvelun sisältä luomalla uusi rajapintatunniste. Kirjoita alla olevaan ruutuun Thinger ja palvelu opastaa luomaan uuden tunnisteen. Se on käytännössä pitkä merkkisarja. Tämä merkkisarja pitää lisätä Hankinnassa yrityksen asetuksissa sille varattuun kenttään, ohje yllä.HUOM! Vaatii Vastuu Groupin Valvoja tai Valvoja Rajapinta -lisenssin."
  },
  {
    "id": "a56",
    "title": "Intrum luottotietoraportti : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001260675-intrum-luottotietoraportti",
    "updated": "2026-03-20",
    "content": "Voit ostaa Intrumin luottotietoraportin suoraan vertailu näkymän kautta. Raportti maksaa 15e + alv.Raportti tallentuu Hankintaan ja on sieltä katseltavissa uusiksi myöhemminkin.Osto-oikeuden saa aktivoitua päälle Organisaation asetuksista.Yksityiskohtainen kuvausVertailu näkymästä voi ostaa luottotietoraportin valitsemalla Tilaa luottotietoraportti.Raportti maksaa 15 + alv. Vahvista tilausta klikkaamalla Vahvista tilaus.Saat vahvistuksen kun raportti on ladattu. Raportti tallentuu Hankintaan, mutta latautuu samalla tietokoneellesi.Yrityksen tietoihin tallentuu kaikki ostetut raportit ja niitä voi katsella myöhemmin uusiksi. Raportit löytyvät lisäksi Toimittajat -näkymän kautta yksittäisen toimittajan Luotettavuus näkymässä.Huom! Et voi ostaa saman päivän aikana samalle yritykselle uutta raporttia.Luottotietoraportin oston salliminenOsto-oikeuden salliminen löytyy Yrityksen asetuksista. Asetuksen muuttamisesta jää jälki, kuka asetusta on muuttanut."
  },
  {
    "id": "a57",
    "title": "Yrityksen toiminta päättynyt : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001275479-yrityksen-toiminta-p%C3%A4%C3%A4ttynyt",
    "updated": "2026-03-20",
    "content": "Yrityksen toiminta päättynyt- tiedon näyttäminenJos yrityksen toiminta on lakannut tai yritys on mennyt konkurssiin, näytetään tieto 'Toiminta päättynyt'sekä vertailu näkymässä että toimittajarekisterissä. Lisäksi toimittaja, jonka toiminta on päättynyt, ei nouse enää näkyville vastaanottajien valinnassa."
  },
  {
    "id": "a58",
    "title": "Toimittajan rekisteröinti : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001214313-toimittajan-rekister%C3%B6inti",
    "updated": "2026-03-20",
    "content": "Alla on kuvattu toimittajan rekisteröinnin vaiheet.Thinger.fi - kotisivuThingerin kotisivulta, thinger.fi, pääsee Hankinnan toimittajaportaaliin: Kirjaudu - Thinger Hankinta toimittajaportaaliAvautuu osoite: https://toimittajat.thinger.fi/vendors/loginToimittaja- loginToimittajan ei tarvitse muistaa salasanoja, sillä jokaisella kerralla toimittaja saa sähköpostiinsa kertakäyttöisen kirjautumiskoodin, jolla pääsee palveluun kirjautumaan/rekisteröitymään. Huomaa, että kirjautumiskoodi on voimassa vain n.5min!Kirjautumisen jälkeen rekisteröintiin liittyy muutama vaihe.Omat tiedotYrityksen valintaEtsi yrityksesi nimellä. Tarkastamme tässä vaiheessa edustusoikeutesi. Paina 'Tarkista edustusoikeus'. Saamme tästä viestin ja kun edustusoikeutesi on vahvistettu, voit jatkaa rekisteröitymistä.Yrityksen perustiedotVoit antaa yrityksestäsi ja itsestäsi tarkemman kuvauksen esim. vastuualueistasi.Yrityksen yhteystiedotVoit tarkistaa ja muokata yrityksesi yhteystietoja.Tiedot voi päivittää myös myöhemminkin.PalvelutVoit valita yrityksesi tarjoamat palvelut.ToimialueVoit määritellä millä alueilla yrityksesi toimii.Kun rekisteröinti on suoritettu, pääset siirtymään omalle etusivulle.Vastaanotetut tarjouspyynnötRekisteröinnin jälkeen toimittaja näkee omalla sivullaan kaikki hänelle lähetetyt tarjouspyynnöt sekä jo päättyneet tarjouspyynnöt, joihin hän on tarjonnut sekä tiedon johtiko tarjous voittoon vai häviöön tarjouskilvassa.Kirjautumislinkki - https://toimittajat.thinger.fi/vendors/login"
  },
  {
    "id": "a59",
    "title": "Millaisen sähköpostin toimittaja saa tarjouspyynnöstä? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190582-millaisen-s%C3%A4hk%C3%B6postin-toimittaja-saa-tarjouspyynn%C3%B6st%C3%A4-",
    "updated": "2026-03-20",
    "content": "Toimittaja saa sähköpostin osoitteesta no-reply@thinger.fi. Viestin otsikko: Tarjouspyyntö: <annettu nimi>Sähköpostissa on yksilöllinen linkki toimittajan tarjouslomakkeeseen.Huom! Osa webmaileista ei tunnista linkkiä klikattavaksi, vaan tällöin linkki pitää kopioida ja liittää selaimen osoiteriville."
  },
  {
    "id": "a60",
    "title": "Millaisen vahvistuksen toimittaja saa tarjouksen jättämisestä ? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190564-millaisen-vahvistuksen-toimittaja-saa-tarjouksen-j%C3%A4tt%C3%A4misest%C3%A4-",
    "updated": "2026-03-20",
    "content": "Sähköpostin sisältöJätettyään tarjouksen, toimittaja saa vahvistuksen jätetystä tarjouksesta sähköpostitse.Sähköpostin liitteenä löytyy PDF, jossa on sekä tarjouspyynnön tiedot että jätetyn tarjouksen tiedot. Tarjoukseen liittyvät liitteet on myös listattu pdfn lopussa.Huomaa, että tarjousta voi muokata jälkikäteen vain tarjouksen yhteyshenkilö.Sähköpostin liitteenä oleva pdf"
  },
  {
    "id": "a61",
    "title": "Toimittajan alustava vastaus tarjouspyyntöön : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190565-toimittajan-alustava-vastaus-tarjouspyynt%C3%B6%C3%B6n",
    "updated": "2026-03-20",
    "content": "Kun toimittaja klikkaa saapuneessa tarjouspyyntö-sähköpostissa olevaa linkkiä, hän päätyy alla olevaan sivuun. Toimittaja voi jättää alustavan arvion siitä, tulevatko he jättämään tarjouksen vai ei.Jos toimittajan tilanteet muuttuu, voi hän jättää uuden arvion niin monta kuin haluavat, kunnes joko tarjous on jätetty tai tarjouspyyntö on sulkeutunut.Valitessaan Todennäköisesti emme tarjoa voi toimittaja vielä erikseen määritellä syyn:Liikaa töitä juuri nytTyö ei ole sisällöltään meille sopivaKohteen sijainti on hankalaTarjouspyyntö vaatisi enemmän tietoaVaadittu hinnoittelu on liian riskialtisMuu syyvapaateksti kenttä, johon toimittaja voi jättää viestinTieto näkyy ylläpidossa sekä Aktiiviset tarjouspyynnöt näkymässä että Tarjouspyynnön vastaanottajat näkymässä."
  },
  {
    "id": "a62",
    "title": "Toimittaja: tarjouksen jättäminen : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001261077-toimittaja-tarjouksen-j%C3%A4tt%C3%A4minen",
    "updated": "2026-03-20",
    "content": "Toimittaja saa tarjouspyynnöstä sähköpostin, jossa linkki tarjouksen jättämiseen, Toimittajan saama sähköpostiLinkin takaa voi jättää alustavan arvion tarjouksen jättämisestäToimittajan alustava arvioTarjouksen jättäminenLinkin takaa avautuu lomake, josta voi ladata tarjouspyynnön ja samalla jättää tarjouksen, ks.kuva.Täytä kentät, lataa tiedostoja ja LÄHETÄ TARJOUSViesti Lähetä tarjous- nappulan jälkeenTarjouksen jättäjälle näytetään seuraavanlainen viesti, kun hän on lähettämässä tarjousta:Kun tarjous on jätetty, sähköpostiin tulee vahvistus asiasta. Kun tarjous on jo jätettyKun toimittaja on jo jättänyt tarjouksen ja mahdollisesti klikkaa sähköpostissa olevaa linkkiä uudestaan, näkyy tarjouspyynnöllä seuraava viesti:Tarjousta voi vielä muokata painamalla MUOKKAA TARJOUSTAhttps://thinger.freshdesk.com/support/solutions/articles/48001190565-toimittajan-alustava-vastaus-tarjouspyynt%C3%B6%C3%B6n"
  },
  {
    "id": "a63",
    "title": "Palautteen kerääminen toimittajilta : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001190563-palautteen-ker%C3%A4%C3%A4minen-toimittajilta",
    "updated": "2026-03-20",
    "content": "Toimittaja saa vapaaehtoisen palautekyselyn tarjouksen jättämisen jälkeen.Tulleet palautteet näytetään Tarjouspyynnön yhteydessä:"
  },
  {
    "id": "a64",
    "title": "Toimittajan yhteystietojen kerääminen ja rekisteriseloste : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001196665-toimittajan-yhteystietojen-ker%C3%A4%C3%A4minen-ja-rekisteriseloste",
    "updated": "2026-03-20",
    "content": "Jättämällä tarjouksen toimittaja hyväksyy, että hänen tiedot tallennetaan järjestelmän toimittajarekisteriin.Rekisteriseloste löytyy Yhteyshenkilön tietokenttien yhteydestä sekä tästä linkistä: RekisteriselosteSelosteesta käy ilmi mitä kerätään ja mitä oikeuksia toimittajalla on tietojen suhteen."
  },
  {
    "id": "a65",
    "title": "Voiko toimittaja muokata jättämäänsä tarjousta? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001218832-voiko-toimittaja-muokata-j%C3%A4tt%C3%A4m%C3%A4%C3%A4ns%C3%A4-tarjousta-",
    "updated": "2026-03-20",
    "content": "Toimittaja voi muokata tarjoustaan niin kauan kunnes tarjouspyyntö on päätetty.Tarjousta pääsee muokkaamaan kirjautumalla osoitteeseen: https://toimittajat.thinger.fi/vendors/login Ensimmäisellä kerralla toimittajan pitää rekisteröityä palveluun. Rekisteröinnistä lisää täältä: Toimittajan rekisteröintiKirjautumisen ja mahdollisen rekisteröinnin jälkeen toimittaja näkee etusivullaan jättämänsä tarjoukset, jotka ovat vielä muokattavissa. Tässä näkymässä on siis vain omat jätetyt tarjoukset."
  },
  {
    "id": "a66",
    "title": "Kun vastausaikaa on jatkettu : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001272612-kun-vastausaikaa-on-jatkettu",
    "updated": "2026-03-20",
    "content": "Kun tarjouspyynnön vastausaikaa on jatkettu, toimittaja saa siitä sähköpostia:Kun klikkaa spostissa olevaa linkkiä ja tarjous on jo jätetty, se kerrotaan seuraavasti: MUOKKAA TARJOUSTA- nappulalla pääset päivittämään jättämääsi tarjousta."
  },
  {
    "id": "a67",
    "title": "Miksi tarjouspyynnön hintakenttä ei hyväksy pilkkua erottimena? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001233424-miksi-tarjouspyynn%C3%B6n-hintakentt%C3%A4-ei-hyv%C3%A4ksy-pilkkua-erottimena-",
    "updated": "2026-03-20",
    "content": "Syynä tähän ongelmaan on tietokoneen oletuskieli/alue asetukset.Windows käyttäjätMene Ohjauspaneeli (Asetukset)/Control Panel Klikkaa Aika- ja alueasetukset/Clock and Region ja valitse Alue/RegionKlikkaa Lisäasetukset/Additional settingsTarkista Desimaalierotin/Desical symbol että se on määritetty pilkuksi.Ota muutokset käyttöön Käytä/Apply ja käynnistä tämän jälkeen selain uusiksi.MAC käyttäjätOngelman saa korjattua siten, että menee Macin asetuksiin ja General (Yleinen) osiosta käy lisäämässä Safarin sovelluksiin ja määrittelee kieleksi Suomi-Finnish."
  },
  {
    "id": "a68",
    "title": "Raportit : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001243630-raportit",
    "updated": "2026-03-20",
    "content": "Raportteja on 4 erilaista: Yleiskuva, Vastuullisuus, Palautteet ja Käyttöönotto.Yleiskuva kertoo lähetettyjen tarjouspyyntöjen tilanteen. Vastuullisuus ottaa kantaa, kuinka moni voittaja on luotettava kumppani ja keiltä toimittajilta tilataan eniten. Palautteet kokoaa yhteen kaikkien tarjouspyyntöjen palautteet toimittajilta. Käyttöönotto- raportilta näet, miten järjestelmän käyttöönotto organisaatiossasi on sujunut.Yksityiskohtainen kuvausYleiskuvaYleiskuva raportilta näet seuraavat asiat valitun suodatuksen mukaan tarjouspyyntöjen määrät kuukausitasollatarjouspyyntöjen ja tarjousten kokonaismäärättarjouspyynnöt statuksittainLähetetyt ja suljetut tarjouspyynnötVastuullisuusVastuullisuus raportilta löytyy listaa toimittajista, jotka ovat eniten kilpailutuksia voittaneet. Näkee ,moniko voittaneista toimittajista on ollut luotettava kumppani sillä hetkellä, kun tarjous on jätetty sekä näkee moneltako toimittajalta normaalisti tarjouksia pyydetään.PalautteetPalautteet näkyvät aina kunkin tarjouspyynnön Vastaanottajat osuudessa, mutta sen lisäksi tulleita palautteita voi tarkistella yhdellä näkymällä. Palautteen sisältöä ja siihen liittyvän tarjouspyynnön voi avata palautteen kautta.KäyttöönottoKäyttöönotosta voi seurata kuinka palvelu on otettu organisaatiossa käyttöön, paljonko tarjouspyyntöjä on tehty ja ketkä ovat tehneet tarjouspyyntöjä."
  },
  {
    "id": "a69",
    "title": "Miten lisään tuntikirjauksen tarjouspyynnölle? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001173681-miten-lis%C3%A4%C3%A4n-tuntikirjauksen-tarjouspyynn%C3%B6lle-",
    "updated": "2026-03-20",
    "content": "Tarjouspyynnölle pystyy kaikissa vaiheissa lisäämään tuntikirjauksia ja niin monta kertaa kuin on tarve. Tuntikirjaus kohdistuu auki olevaan tarjouspyyntöön sekä tallentuu kirjautuneen käyttäjän tuntikirjaukseksi.Luonnos- tilaLuonnos -tilassa olevalle tarjouspyynnölle tuntikirjausten lisäys tapahtuu seuraavasta paikasta:3:n pisteen takaa löytyy valikosta Lisää tuntikirjausVoit valita suoraan 15min, 30min tai 1 tunti tai voit Muu vaihtoehdon takaa määritellä tarkemmin 15min tarkkuudella käyttämäsi työajan.Lisäksi voit määritellä selitteen, esim. \"Tarjouspyynnin luonti\", \"Tarjouspyynnön tietojen täydennys\", jne. tuntikirjaukselle.Lähetetty ja Suljettu- tilaLähetetty ja Suljettu -tilassa olevalle tarjouspyynnölle tuntikirjausten lisäys tapahtuu seuraavista paikoista:Joko menemällä Tuntikirjaukset välilehdelle ja klikkaamalla Lisää tuntikirjaus Tai Valitsemalla Toiminnot ja sieltä valikosta Lisää tuntikirjausVoit valita suoraan 15min, 30min tai 1tunti tai voit Muu vaihtoehdon takaa määritellä tarkemmin 15min tarkkuudella käyttämäsi työajan.Lisäksi voit määritellä selitteen, esim. \"Tulleiden tarjousten käsittely, \"Tarjouspyynnön päättäminen\", jne. tuntikirjaukselle."
  },
  {
    "id": "a70",
    "title": "Miten löydän tuntikirjaukset? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001173686-miten-l%C3%B6yd%C3%A4n-tuntikirjaukset-",
    "updated": "2026-03-20",
    "content": "Kirjatut tunnit tarjouspyynnöille löytyvät joko tarjouspyyntökohtaisesti jokaisesta tarjouspyynnöstä tai käyttäjäkohtaisesti tuntiraporttinäkymästä.Lähetetylle ja suljetulle tarjouspyynnölle tallennetut tunnit tarjouspyyntökohtaisesti löytyy Tuntikirjaukset välilehdeltä:Käyttäjäkohtaisen raportin saa haettua Tuntiraportti valikon kautta.Oletuksena aikavälihaussa on edellinen kokonainen kuukausi.Kirjatut tunnit näkyvät summattuna kyseiseltä aikaväliltä tarjouspyynnöittäin per valittu omistaja."
  },
  {
    "id": "a71",
    "title": "Unohditko salasanasi ? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001184864-unohditko-salasanasi-",
    "updated": "2026-03-20",
    "content": "Jos olet unohtanut salasanasi tai haluat muuten vaihtaa salasanasi, saat tilattua salasananvaihtolinkin kirjautumisikkunasta klikkaamalla Unohditko salasanasi? ja syöttämällä tämän jälkeen sähköpostiosoitteesi.Linkki on voimassa rajoitetun ajan."
  },
  {
    "id": "a72",
    "title": "Tarvitsetko uusia tunnuksia käyttäjille tai onko tarvetta päättää poistuneiden käyttäjien tunnuksia? : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001236038-tarvitsetko-uusia-tunnuksia-k%C3%A4ytt%C3%A4jille-tai-onko-tarvetta-p%C3%A4%C3%A4tt%C3%A4%C3%A4-poistuneiden-k%C3%A4ytt%C3%A4jien-tunnuksia-",
    "updated": "2026-03-20",
    "content": "Ole tällöin yhteydessä tukeen osoitteessa support@thinger.fi ja kerro uusien/poistuneiden käyttäjien sähköpostiosoitteet."
  },
  {
    "id": "a73",
    "title": "Thinger Hankinta tuki : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001185597-thinger-hankinta-tuki",
    "updated": "2026-03-20",
    "content": "Thinger Hankinta Tuki palvelee arkipäivisin toimistoaikaan, myös loma-aikoina. sähköposti: support@thinger.fi puhelin: 02 77980Tukisivusto ja artikkelitMyös ?- merkkiä painamalla pääset suoraan meidän tukisivustolle etsimään artikkeleita/ohjeita. Tukisivuston kautta on myös helppo jättää meille tukipyyntöä."
  },
  {
    "id": "a74",
    "title": "Helmikuu 2026 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001280649-helmikuu-2026-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Helmikuun päivitys tuo mukanaan pari yritystason asetusta sekä yhden uuden mallipohjan.Vesikaton kuntoarvio -mallipohjaMallipohja tehty yhteistyössä Innocaten Matias Surakan kanssa.Mallipohjat löydät: Mallipohja eri tarjouspyynnöilleToimeksiantaja sekä projektinumeroNyt on mahdollista lisätä projektinumero sisäistä seurantaa varten. Samoin on mahdollista lisätä toimeksiantaja- tieto, silloin kun se on tarpeellista.Projektinumero- ja Toimeksiantaja- kentät saa näkyviin yrityksen asetusten kautta.Yrityksen asetukset 2. Yleiset - vipu ON/OFFKentät näkyvät tarjouspyynnöllä seuraavasti:Toimeksiantaja- kenttä lukee virallista yritysrekisteriä, voit etsiä y-tunnuksella tai nimelläTulosteetEsikatsele - esikatselussa projektinumeroa ei näytetä, toimeksiantaja näytetäänToiminnot - Tarjouspyynnön tiedotRaportit - Yleiskuva - Lataa raporttijos kentät on asetettu näkymään, näkyvät ne excel-raportissaExcel raportti lähetetyistä tarjouspyynnöistäVoit ladata Raportit - Yleiskuva osiosta listan lähetetyistä tarjouspyynnöistä haluamallasi aikavälillä"
  },
  {
    "id": "a75",
    "title": "Marraskuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001278198-marraskuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Marraskuun päivitys tuo mukanaan mm.seuraavaa: Kyvykkyys lisätä muistiinpanoja tarjouspyyntöön liittyenVoit tarvittaessa lisätä tarjouspyynnölle huomioita ts.muistiinpanoja. HUOMIOT- osio löytyy työpöydän yläosasta, ks.kuvaToimme Hankintaan myös muutaman pienemmän parannuksen mm.kohteen kuvaus näkyville Sidosryhmä -näkymään, jos kuvaus on annettu tarjouspyynnöllä"
  },
  {
    "id": "a76",
    "title": "Lokakuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001277668-lokakuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Lokakuun päivitys toi mukanaan pitkälti taustapalveluiden päivityksiä uusimpiin versioihin sekä seuraavat alla mainitut ominaisuudet ja korjaukset.Lokakuussa on tullut 2 uutta mallipohjaa HankintaanPutkistojen kuntotutkimusKaukolämmön alajakokeskuksen uusimisen suunnitteluLiiteongelma korjattu Safari selaimen kanssaSafari selainta käytettäessä, jos liitteen nimessä oli ääkkösiä, ei liite latautunut järjestelmään sisään oikein. Reply-to osoite käyttöön sähköposteihinJos O365 tai Gmail sähköpostiluvitusta ei ole tehtynä, lähtee järjestelmästä viestit no-reply@thinger.fi osoitteesta. Aiemmin kun toimittaja vastasi näihin viesteihin, ohjautui vastaukset takaisin tähän no-reply osoitteeseen. Jatkossa jos toimittajan sähköposti tukee reply-to osoitetta, ohjautuu toimittajien lähettämät viestit tarjouspyynnön tekijän sähköpostiin, vaikkei luvitusta olisikaan tehtynä.Huom! Toimii vain silloin kun toimittaja itse vastaa viestiin. Poissaoloviestit eivät edelleenkään ohjaudu ja tähän suosittelemme edelleen luvituksen tekemistä: Sähköpostin lähetys omasta osoitteesta (Office 365, Gmail)"
  },
  {
    "id": "a77",
    "title": "Syyskuu 2025 päivitys, osa 2 : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001276591-syyskuu-2025-p%C3%A4ivitys-osa-2",
    "updated": "2026-03-20",
    "content": "Syyskuun toinen päivitys tuo tullessaan seuraavat uudet ominaisuudet:Toimittajien automaattinen muistutus lähestyvästä jättöpäivästä (käyttäjätoive)Jatkossa järjestelmästä lähtee automaattisesti toimittajalle muistutusviesti 5 päivää ennen tarjouspyynnön päättymispäivää, jos toimittaja ei ole tarjousta jättänyt. Viestiä ei tosin lähetetä, jos toimittaja on ilmoittanut, ettei aio jättää tarjousta.Vertailuexcelin nimeämisen uudistus (käyttäjätoive)Olemme siistineet vertailuexcelin nimestä turhia merkkejä pois. Muita pienempiä taustapalveluiden kehityksiä ja bugikorjauksia"
  },
  {
    "id": "a78",
    "title": "Syyskuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001275973-syyskuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Syyskuun päivitys tuo tullessaan seuraavat ominaisuudet: Tarjouspyyntöjen järjestys työpöydälläLuonnoksetViimeisin luotu tarjouspyyntö tulee alimmaksi.Luonnoksen voi poistaa roskakorikuvakkeesta. LähetetytAikaisimmin päättyvä tarjouspyyntö ylimpänäOdottaa päätöstäOletusjärjestys: Aikaisimmin päättyvä tarjouspyyntö ylimpänäJärjestys voidaan kääntää sarakkeen yläpuolella olevasta nuolipainikkeesta. Järjestyksen vaihto kestää selaimen session ajan eli kun käyt muilla sivuilla järjestys pysyy samana. Kun suljet selaimen tai välilehden ja menet uudelleen sovellukseen, on järjestys palautunut oletukseen.Tarjouspyynnössä näytetään tarjouspyynnön päättymispäiväLukitus-ikonit Lukitusikonit näyttävät tarjouspyynnön oikeaa tilaa Odottaa päätöstä- sarakkeessaEi lukittulukittu avattu"
  },
  {
    "id": "a79",
    "title": "Elokuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001275440-elokuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Elokuun päivitys tuo tullessaan seuraavat ominaisuudet:Tarjousten katselu lukittuina - asetusHankinnan asetusten kautta, voitte helposti itse asettaa tarjousten lukituksen päälle yrityksellesi. Lukituksen saa tarjouspyynnön lähetysvaiheessa toki otettua pois päältä, mutta suosittelemme vahvasti lukitsemaan tarjousten katselun, kunnes vastausaika on umpeutunut.Yrityksen toiminta päättynyt -tiedon näyttäminenJos yrityksen toiminta on lakannut tai yritys on mennyt konkurssiin, näytetään tieto Toiminta päättynyt sekä vertailu näkymässä että toimittajarekisterissä. Lisäksi toimittaja, jonka toiminta on päättynyt, ei nouse enää näkyville vastaanottajien valinnassa."
  },
  {
    "id": "a80",
    "title": "Heinäkuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001274356-hein%C3%A4kuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Heinäkuun päivitys tuo seuraavan uuden ominaisuuden:Tarjouspyynnön lukituksen asettaminen automaattisesti päälleKun tarjouspyyntö luodaan joko tyhjältä pöydältä tai kopioiden, voidaan yrityksen asetuksiin asettaa oletus, että kaikki tarjouspyynnöt ovat oletuksena lukittuina.Lukituksen saa toki lähetysvaiheessa pois niin halutessaan.Huomaa, että automaattinen lukitus on yritystason asetus eli jos se laitetaan päälle, koko yrityksen kaikkien tekijöiden tarjouspyynnöt on oletusarvoisesti lukittu.Jos haluat tämän yrityksellesi päälle, olethan yhteydessä meidän tukeen: support@thinger.fi"
  },
  {
    "id": "a81",
    "title": "Kesäkuu 2025 päivitys osa 2 : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001273258-kes%C3%A4kuu-2025-p%C3%A4ivitys-osa-2",
    "updated": "2026-03-20",
    "content": "Luotettava Kumppani -tiedon näyttöTapa, jolla Luotettava Kumppani -tieto esitetään, muuttui. Logon yhteydessä näytetään nyt erillinen ikoni, joka kuvaa toimittajan tilannetta. Jos ikoni on vihreä ok, kaikki on kunnossa. Ikoni voi olla myös keltainen varoitus tai harmaa, jolloin tiedot puuttuvat. Tämä auttaa tunnistamaan tilanteet, joissa asiaan on syytä kiinnittää erityistä huomiota. Tässä esimerkki tilanteesta, jossa tietoja ei ole käytössä. Rajapintatunnisteen hakeminen ja asetusMikäli yrityksesi on Vastuu Groupin asiakas, voit nyt hakea toimittajan Luotettava Kumppani -raportin suoraan järjestelmän sisällä. Raporttien lataaminen edellyttää aina järjestelmään syötettyä Luotettava Kumppani -rajapintatunnistetta. Ennen ominaisuuden hyödyntämistä sinun pitää siis luoda ja asettaa Vastuu Groupin rajapintatunniste ylläpidossa.Rajapintatunniste on ladattavissa Vastuu Groupin palvelun sisältä luomalla uusi rajapintatunniste. Kirjoita alla olevaan ruutuun Thinger ja palvelu opastaa luomaan uuden tunnisteen. Se on käytännössä pitkä merkkisarja. HUOM! Vaatii Vastuu Groupin Valvoja rajapinta -lisenssin.Kopioi saatu rajapintatunniste Yrityksen asetukset kohtaan Thinger Hankinnan sisällä. Raporttien haku suoraan Hankinnan sisälläMikäli yrityksesi on Vastuu Groupin asiakas, voit nyt hakea toimittajan Luotettava Kumppani -raportin suoraan järjestelmän sisällä. Itse raportti on täsmälleen sama kuin Vastuu Groupin palvelusta ladattava - se vain ladataan rajapinnan kautta.Voit ladata raportin suoraan vertailunäkymässä toimittajan alta. Mahdollisesti aiemmin ladatut raportit näkyvät samassa yhteydessä. Raportti on ladattavissa myös toimittajan kortilta."
  },
  {
    "id": "a82",
    "title": "Kesäkuu 2025 päivitys : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001272708-kes%C3%A4kuu-2025-p%C3%A4ivitys",
    "updated": "2026-03-20",
    "content": "Kesäkuun alun päivitys tuo taustapalveluiden päivittymisen lisäksi seuraavat käyttäjätoiveet:Kellonaika termi näkyville jos tarjouspyynnölle on määritelty kellonaikaJos jättöpäivän lisäksi on määritelty kellonaika, erotetaan tämä nyt selkeästi klo -termilläTarjous.pdf:ään näkyville tarjouspyynnön julkaisupäiväTarjous.pdf:n otsikon alla näkyy jatkossa tarjouspyynnön julkaisupäivä."
  },
  {
    "id": "a83",
    "title": "Huhtikuu 2025 päivitys osa 2 : Support",
    "category": "Thinger Hankinta",
    "url": "https://thinger.freshdesk.com/support/solutions/articles/48001271382-huhtikuu-2025-p%C3%A4ivitys-osa-2",
    "updated": "2026-03-20",
    "content": "Uusi tarjouslomakkeen hintakenttätyyppi: HintaVoit ottaa kantaa onko hintakenttä veroton vai verollinen. Tietoa ei tarvitse enää erikseen kirjoittaa otsikkoon tai yksikköön, vaan tieto tulee näkyville automaattisesti yksikön perään. Numero -tyyppinen kenttä säilyy edelleen olemassa olevana.Kun kopioit olemassa olevan tarjouspyynnön, kääntyy vanhat numero -tyyppiä olevat kentät pääsääntöisesti automaattisesti hinta tyyppisiksi."
  }
];

export default articles;
