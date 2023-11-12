export const getProducts = async()=>{
    const res = await fetch("https://jsonserver.reactbd.com/amazonpro",{
        cache:"no-cache"
    })
    if(!res.ok){
        throw new Error ("Failed to fetch products");
    }
    return res.json();
};