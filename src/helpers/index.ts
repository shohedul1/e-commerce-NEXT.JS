export const getProducts = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};

export const getPhones = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phone",{
        cache:"no-cache"
    });
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};

export const getPhonecases = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/phonecase",{
        cache:"no-cache"
    });
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};

export const getWatches = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/watch",{
        cache:"no-cache"
    });
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};
export const getAccessories = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/accessories",{
        cache:"no-cache"
    });
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};


//Calculate Percentage

export const calculatePercentage = (previousPrice:any,price:any)=>{
    return !!parseFloat(price) && !! parseFloat(previousPrice) ? (100 - (previousPrice / price)*100).toFixed(0) : 0;
}