module.exports =  function capitalize(string){
    return typeof string === 'string'? string.trim()[0].toUpperCase() + string.trim().slice(1) : null;
}

