
export const getApiResource = async (url) => {

    try {
        const res = await fetch(url);

        if(!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        }

        return await res.json(); 
    } catch (err) {
        console.error('Could not fetch.', err.message);
        return false;
    }
    
}

// (async () => {
//     const body = await getApiResource(SWAPI_ROOT+SWAPI_PEOPLE)
//     console.log(body);
    
// })()

export const makeConcurrentRequest = async (url) => {
    const res = await Promise.all(url.map( res => {
        return fetch(res).then(res => res.json())
    }));

    return res;
}