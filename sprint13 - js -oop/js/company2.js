const make = (name, website) => {
    return {
        name: name,
        website: website,
        getName() {
            return this.name;
        },
        getWebsite() {
            return this.website;
        },
    };
};

export { make }