const checkStubCreds = async() => {
    try {
    const resp = await fetch('./logindetails.json');
    const response = resp.json();
    return response;
    } catch (err){
        console.log("There wasa a problem fetching content" + err.message);
    }
}

export default checkStubCreds;
