$(document).ready(function(){
  $("#menu_icon").click(function(){
    $("#fc-content .fc-element.fc-menu-item.fc-text, #fc-content .fc-menu-item").toggle();
  });

  
});
let langResourcesArr = {
  "en": {
    "1":"POURABLE",
    "2":"POURABLE",
    "3":"POURABLE",
    "4":"POURABLE",
    "5":"POURABLE",
    "6":"PRODUCT INFO",
    "7":"ForteCrete150 is a special class of densely packed fiber reinforced composite with optimized granular packing and very low water contetn that offers exceptional strength, durability, ductility, pull-out resistence and long term stability. It is designed to exhibit outstanding mechanical propertires including sustained postcracking tensile strength. ForteCrete150 is non-porous concrete imprevious to water and chemicals. It is highly resistant against acid waters, deicing salt, freeze-thaw deterioration/degradation, chloride ion penetration, chemical attack and carbonation",
    "8":"APPLICATIONS",
    "9":"ForteCrete150 is suitable for casting urban street furniture, thin stairs and balconies, interior decor panels, decorative facades and imact and blast resistant structures. It is primarily used for road overlays, links slags, expansion joint keys, strengthening of concrete and steel members, pier jacketing and is a closure pour UHCP material to connect prefabricated structural elements on-site. It can be used to repair traditional, cracked and failing concrete and build structures taht significantly outlast traditional concrete ones.",
    "10":"PROPERTIES",
    "11":"Tests were performed at University of Belgrade, Faculty of Civil Engineering."
  },
  "sr": {
    "1":"POURABLE",
    "2":"POURABLE",
    "3":"POURABLE",
    "4":"POURABLE",
    "5":"POURABLE",
    "6":"OPIS PROIZVODA",
    "7":"ForteCrete150 spada u specijalnu klasu gusto pakovanih mikroarmiranih betona na bazi čeličnih vlakana, sa optimalnom granulacijom i vrlo niskim vodocementnim faktorom. Odlikuje se izvanrednim čvrstoćama pri pritisku, zatezanju i savijanju, kao i visokim stepenom trajnosti, duktilnosti i postojanosti u hemijski agresivnim sredinama. Projektovan je da ima superiorne mehaničke karakteristike, uključujući i povećanu rezidualnu čvrstoću nakon formiranja prslina. ForteCrete150 je visoko otporan na dejstvo agresivnih hemikalija, abraziju, oštećenja nastala delovanjem soli za odmrzavanje, odnosno cikličnim smrzavanjem-odmrzavanjem, kao i na prodor hlorida i karbonatizaciju.",
    "8":"UPOTREBA",
    "9":"ForteCrete150 je pogodan za prefabrikaciju elemenata gradske infrastrukture, tankih stepeništa i balkona, panela za unutrašnju dekoraciju, fasadnih elemenata i konstrukcija otpornih na eksplozivna/udarna dejstva. Primarno se koristi za završne slojeve saobraćajnica, vezne ploče, zone mostovskih dilatacija, ojačanja betonskih i čeličnih konstruktivnih elemenata i kao veza za spajanje prefabrikovanih elemenata na gradilištu.",
    "10":"SVOJSTVA",
    "11":"Testovi su izvršeni na Univerzitetu u Beogradu, Građevinski Fakultet."
  },
};

function changeLanguage(clickedLangChoiceId, productsPage) {
  $(function() { 
      $(".translation").each(function() {
        let currentlyIteratedTranslationKey = $(this).attr("key");
        let localizedValForTranslationKey = langResourcesArr[clickedLangChoiceId][currentlyIteratedTranslationKey];
        $(this).text(localizedValForTranslationKey);
      });
      if(productsPage==1){
        if(clickedLangChoiceId == "en"){
          document.getElementById("fc_products_img").src = "img/fc_tests_eng.png";
        }else{
          document.getElementById("fc_products_img").src = "img/fc_tests_srb.png";
        }
      }
    });
}