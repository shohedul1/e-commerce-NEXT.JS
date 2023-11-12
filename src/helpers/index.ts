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