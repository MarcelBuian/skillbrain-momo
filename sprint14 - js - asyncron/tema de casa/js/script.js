(async function () {

    async function getData() {
        try {
            const response = await fetch('../data/data.json');
            const data = await response.json();

            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const data = await getData();

    // todo: restul codului in care deja avem acces la data.

})();
