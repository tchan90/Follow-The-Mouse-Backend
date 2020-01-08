const isEmpty = value => 
        value===undefined||
        value===null||
        //checking if its an empty object
        (typeof value==='object' && Object.keys(value).length)===0||
        //checking if its an empty string
        (typeof value==='string' && value.trim().length===0)

module.exports = isEmpty; 