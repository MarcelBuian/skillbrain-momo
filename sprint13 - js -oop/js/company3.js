function Company(name, website) {
    this.name = name;
    this.website = website;
    this.getName = function () {
        return this.name;
    };
    this.getWebsite = function () {
        return this.website;
    };
}

export { Company }