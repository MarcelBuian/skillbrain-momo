const make = (name, website) => {
    return {
        name: name,
        website: website,
    };

    // Acelasi lucru, scris pe scurt
    // return { name, website };
};

// Selector
const getName = (company) => company.name;
const getWebsite = (company) => company.website;

export { make, getName, getWebsite }