
const TPS_2008_ET_APRES = 0.05;

const TVQ_2013_ET_APRES = 0.09975;
const TVQ_2012 = 0.095;
const TVQ_2011 = 0.085;

function calculTPS(year, montantSansTaxe){
    return montantSansTaxe * TPS_2008_ET_APRES
}

function calculTVQ(year, montantSansTaxe){
    if (year >= 2013) 
        return montantSansTaxe * TVQ_2013_ET_APRES
    else if (year === 2012)
        return montantSansTaxe * TVQ_2012
    else
        return montantSansTaxe * TVQ_2011
} 

export  {
    calculTPS,
    calculTVQ
}