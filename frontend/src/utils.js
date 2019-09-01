export const getKeyFromValue = (dict, value) => {
    for (let key in dict)
        if (dict[key] === value)
            return key;
};

export const getHeaders = token => ({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
    }
});