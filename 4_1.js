const wyswietlacz = document.getElementById('wysw');
let theallequation = "";

const przyciski = document.querySelectorAll('.przycisk-kalkulatora');

function aktualizuj(){
    wyswietlacz.innerText = theallequation;
}
aktualizuj();

przyciski.forEach(przycisk => {
    przycisk.addEventListener('click', function() {
        const wartoscPrzycisku = przycisk.dataset.value; 

        if (theallequation === "" && (wartoscPrzycisku === '+' || wartoscPrzycisku === '-' || wartoscPrzycisku === '*' || wartoscPrzycisku === '/' || wartoscPrzycisku==='.')) {
             return; 
        }
        //(theallequation === "0" || theallequation === "1" || theallequation === "2" || theallequation === "3" || theallequation === "4" || theallequation === "5" || theallequation === "6" || theallequation === "7" || theallequation === "8" || theallequation === "9" )
        if( (theallequation.slice(theallequation.length-1,theallequation.length) === '+' || theallequation.slice(theallequation.length-1,theallequation.length) === '-' || theallequation.slice(theallequation.length-1,theallequation.length) === '*' || theallequation.slice(theallequation.length-1,theallequation.length) === '/' || theallequation.slice(theallequation.length-1,theallequation.length)==='.') && (wartoscPrzycisku === '+' || wartoscPrzycisku === '-' || wartoscPrzycisku === '*' || wartoscPrzycisku === '/' || wartoscPrzycisku==='.')){
            return theallequation
        }

        theallequation += wartoscPrzycisku;
        aktualizuj();
    });
});

document.getElementById('bac').addEventListener('click', function(){
    theallequation = theallequation.slice(0, theallequation.length - 1);
    aktualizuj();
})
document.getElementById('clea').addEventListener('click', function(){
    theallequation = "";
    aktualizuj();
})
document.getElementById('wyn').addEventListener('click', function(){
    try{
        let wynik = eval(theallequation);
        if(isNaN(wynik))
        {
            wynik = ""
        }
        theallequation = wynik
        aktualizuj();

    }
    catch(error){
        theallequation = "";
        aktualizuj();
    }
})
