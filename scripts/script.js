var langResourcesArr = {
  "en": {
    "menu-0a":"Company",
    "menu-0":"COMPANY",
    "menu-1":"About",
    "menu-2":"Partners",
    "menu-3":"PRODUCT",
    "menu-4":"Product Info",
    "menu-5":"Technical Data Sheet",
    "menu-6":"Certificates",
    "menu-7":"Published Papers",
    "menu-8":"GALLERY",
    "menu-9":"CONTACT",
    "1":"Product",
    "2":"Certificates",
    "3":"Properties and Durability",
    "4":"IMK Report No. 402",
    "5":"Published Papers",
    "6":"PRODUCT INFO",
    "7":"ForteCrete150 is a special class of densely packed fiber reinforced composite with optimized granular packing and very low water contetn that offers exceptional strength, durability, ductility, pull-out resistence and long term stability. It is designed to exhibit outstanding mechanical propertires including sustained postcracking tensile strength. ForteCrete150 is non-porous concrete imprevious to water and chemicals. It is highly resistant against acid waters, deicing salt, freeze-thaw deterioration/degradation, chloride ion penetration, chemical attack and carbonation",
    "8":"APPLICATIONS",
    "9":"ForteCrete150 is suitable for casting urban street furniture, thin stairs and balconies, interior decor panels, decorative facades and imact and blast resistant structures. It is primarily used for road overlays, link slabs, expansion joint keys, strengthening of concrete and steel members, pier jacketing and is a closure pour UHCP material to connect prefabricated structural elements on-site. It can be used to repair traditional, cracked and failing concrete and build structures thatt significantly outlast traditional concrete ones.",
    "10":"PROPERTIES",
    "11":"Tests were performed at University of Belgrade, Faculty of Civil Engineering.",
    "12":"ForteCrete Doo is a company based in Negotin, Serbia, specialized in the development, production, and commercial trade of Ultra-High-Performance Concrete and UHPC premixes. The company was founded in 2021.",
    "13":"densely packed fiber reinforced matrix with optimized granular packing",
    "14":"outstanding mechanical properties",
    "15":"up to 400 times more durable material against corrosion, abrasion and impact than ordinary concrete",
    "16":"highly resistant against acid waters, mechanical abrasion and erosion",
    "17":"extremely low permeability",
    "18":"ultra high-strength, ductile material",
    "19":"high resistance to deicing salt and freeze-thaw deterioration",
    "20":"design flexibility, improved aesthetics",
    "21":"random distribution of steel fiber throughout concrete mix",
    "22":"longer life span of structures",
    "23":"exhibit exceptional energy absorption, capacity and resistance to fragmentation. Ideal material to perform under explosive, impact or shock loads",
    "24":"increased girder span with light-weight slender cross-sections",
    "25":"rapid construction, increased material efficiency & lower transportation cost",
    "26":"Address:",
    "27":"Coordinates:",
    "28":"POURABLE",
    "29":"UHCP",
    "30":"ULTRA HIGH",
    "31":"PERFORMANCE",
    "32":"CONCRETE"
  },
  "sr": {
    "menu-0a":"Kompanija",
    "menu-0":"KOMPANIJA",
    "menu-1":"O Nama",
    "menu-2":"Partneri",
    "menu-3":"PROIZVOD",
    "menu-4":"Informacije",
    "menu-5":"Tehnički Listovi",
    "menu-6":"Sertifikati",
    "menu-7":"Objavljeni Članci",
    "menu-8":"GALERIJA",
    "menu-9":"KONTAKT",
    "1":"Proizvod",
    "2":"Sertifikati",
    "3":"Svojstva i Izdržljivost",
    "4":"IMK Izveštaj Br. 402",
    "5":"Objavljeni Članci",
    "6":"OPIS PROIZVODA",
    "7":"ForteCrete150 spada u specijalnu klasu gusto pakovanih mikroarmiranih betona na bazi čeličnih vlakana, sa optimalnom granulacijom i vrlo niskim vodocementnim faktorom. Odlikuje se izvanrednim čvrstoćama pri pritisku, zatezanju i savijanju, kao i visokim stepenom trajnosti, duktilnosti i postojanosti u hemijski agresivnim sredinama. Projektovan je da ima superiorne mehaničke karakteristike, uključujući i povećanu rezidualnu čvrstoću nakon formiranja prslina. ForteCrete150 je visoko otporan na dejstvo agresivnih hemikalija, abraziju, oštećenja nastala delovanjem soli za odmrzavanje, odnosno cikličnim smrzavanjem-odmrzavanjem, kao i na prodor hlorida i karbonatizaciju.",
    "8":"UPOTREBA",
    "9":"ForteCrete150 je pogodan za prefabrikaciju elemenata gradske infrastrukture, tankih stepeništa i balkona, panela za unutrašnju dekoraciju, fasadnih elemenata i konstrukcija otpornih na eksplozivna/udarna dejstva. Primarno se koristi za završne slojeve saobraćajnica, vezne ploče, zone mostovskih dilatacija, ojačanja betonskih i čeličnih konstruktivnih elemenata i kao veza za spajanje prefabrikovanih elemenata na gradilištu.",
    "10":"SVOJSTVA",
    "11":"Testovi su izvršeni na Univerzitetu u Beogradu, Građevinski Fakultet.",
    "12":"ForteCrete Doo je kompanija za razvoj, proizvodnju I trgovinu betona ultra viskokih performansi kao I UHPC premiksa sa središtem u Negotinu, Srbija. Kompanija je osnovana 2021.",
    "13":"gusto pakovana mešavina sa optimalnom granulacijom armirana čeličnim vlaknima",
    "14":"izvanredne mehaničke karakteristike",
    "15":"do 400 puta otporniji materijal na koroziju, agresivne vode, abraziju i udarna opterećenja od običnog betona",
    "16":"ekstremno niska propustljivost za vodu i gasove",
    "17":"ultra visoke čvrstoce, duktilni materijal",
    "18":"visoka otpornost na dejstvo soli za odmrzavanje i na oštecenja nastala ciklusima smrzavanja-odmrzavanja",
    "19":"velika fleksibilnost u projektovanju, unapredjena estetika",
    "20":"ravnomerna distribucija čeličnih vlakana u mešavini",
    "21":"duži vek trajanja konstrukcija",
    "22":"ispoljava izvanredne osobine u smislu absorbcije energije i otpornosti na fragmentaciju. Idealan materijal za skloništa",
    "23":"održivi beton superiorne čvrstoće",
    "24":"očekivani životni vek konstrukcija preko 200 godina bez praktičnog održavanja",
    "25":"potencijalna ušteda do 40% u ukupnim troškovima projekta kao i značajno ubrzanje u izvođenju",
    "26":"Adresa:",
    "27":"Koordinate:",
    "28":"LIVENI",
    "29":"UHCP",
    "30":"BETON",
    "31":"ULTRA VISOKIH",
    "32":"PERFORMANSI"
  }
};

$(document).ready(function(){
  $("#menu_icon").click(function(){
    $("#fc-content .fc-element.fc-menu-item.fc-text, #fc-content .fc-menu-item").toggle();
  });

  if (sessionStorage.getItem("currentLanguage") !== "null") {
    changeLanguage(sessionStorage.getItem("currentLanguage"));
  }else{
    changeLanguage("en");
  }

});

function changeLanguage(clickedLangChoiceId) {
  sessionStorage.setItem("currentLanguage", clickedLangChoiceId);
  if (document.getElementById("fc-product-product-info") != null) {
    if($(window).width() < 600){
      if(clickedLangChoiceId == "en"){
        document.getElementById("fc_products_img_mobile").src = "img/table_eng.png";
      }else if(clickedLangChoiceId == "sr"){
        document.getElementById("fc_products_img_mobile").src = "img/table_srb.png";
      }
    }else{
      if(clickedLangChoiceId == "en"){
        document.getElementById("fc_test_preformed").style.marginTop = "43%";
        document.getElementById("fc_products_img_desktop").src = "img/fc_tests_eng.png";
      }else if(clickedLangChoiceId == "sr"){
        document.getElementById("fc_test_preformed").style.marginTop = "36%";
        document.getElementById("fc_products_img_desktop").src = "img/fc_tests_srb.png";
      }

    }
  }
  if (document.getElementById("fc-data-download-link") != null){
    document.getElementById("fc-data-download-link").href="./data/technical_data/fc150_technical_data_" + sessionStorage.getItem("currentLanguage") + ".pdf";
  }
  if (document.getElementById("fc-certs-cert1") != null){
    document.getElementById("fc-certs-cert1").href="./data/certificates/" + sessionStorage.getItem("currentLanguage") + "_certificate_190.pdf";
    document.getElementById("fc-certs-cert2").href="./data/certificates/" + sessionStorage.getItem("currentLanguage") + "_report_402.pdf";
  }
  $(function() { 
    $(".translation").each(function() {
      let currentlyIteratedTranslationKey = $(this).attr("key");
      if(langResourcesArr[clickedLangChoiceId] != undefined){
        let localizedValForTranslationKey = langResourcesArr[clickedLangChoiceId][currentlyIteratedTranslationKey];
        $(this).text(localizedValForTranslationKey);
      }
    });
  });
}