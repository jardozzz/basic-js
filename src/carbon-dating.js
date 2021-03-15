const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof(sampleActivity)=="string" && (Number(sampleActivity)>0) && arguments.length>0 && sampleActivity<MODERN_ACTIVITY){
        return ( Math.ceil((HALF_LIFE_PERIOD/0.693)*Math.log(MODERN_ACTIVITY/Number(sampleActivity))))
    }
    else{
        return false
    }
}


//