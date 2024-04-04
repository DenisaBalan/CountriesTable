import axios from 'axios';

const fetchCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');

    const data = response.data.map((country, index) => {
        return {
            id: index,
            name: country.name.common,
            population: country.population,
            region: country.region
        }
    })
    /*  Bubble sort -> cea mai ineficienta algoritm de sortare
        [2, 4, 1, 3]
        [1, 4, 2, 3]
        [1, 2, 4, 3]
        [1, 2, 3, 4]
        Quick sort/Merge sort -> cea mai rapida metoda de sortare
    */
    for(let i = 0; i < data.length - 1; i++)
        for(let j = i + 1; j < data.length; j++)
            if(data[i].population > data[j].population)
            {
                let aux = data[i];
                data[i] = data[j];
                data[j] = aux;
            }

    return data;
}

export {
    fetchCountries
}