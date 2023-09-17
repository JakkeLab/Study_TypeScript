// type Country = "Spain" | "Germany" | "France";
// type Language = "Spanish" | "German" | "French";
const CountryList = ["Spain", "France"] as const;   //Make readonly
type Country = typeof CountryList[number];


//Function will tell is the 
function isCountry(text: string): text is Country {
    return CountryList.includes(text as any);
}

function registerUser(name: string, country: string) {
    if(isCountry(country)) {
        country
    }
}


// //When error occurs
// type Three = 3;
// let three: Three = 4;