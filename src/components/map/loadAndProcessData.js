import { tsv, json ,csv } from 'd3';
import { feature } from 'topojson-client';

export const loadAndProcessData = () => 
	Promise
		.all([
      tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
      json('https://unpkg.com/world-atlas@1.1.4/world/50m.json'),
      csv('https://raw.githubusercontent.com/maru25-alt/data/master/countries.csv')
    	])
		.then(([tsvData, topoJSONdata, data]) => {
       console.log(data)
        const rowById = tsvData.reduce((accumulator, d) => {
          accumulator[d.iso_n3] = d;
          return accumulator;
        }, {});

        const countries = feature(topoJSONdata, topoJSONdata.objects.countries);

        countries.features.forEach(d => {
          Object.assign(d.properties, rowById[d.id]);
        });

        return countries;
});
  	