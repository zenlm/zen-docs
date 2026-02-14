import { docs } from './.source/index.ts';

console.log('docs type:', typeof docs);
console.log('docs methods:', Object.keys(docs));
console.log('has getPage:', typeof docs.getPage);
console.log('has getPages:', typeof docs.getPages);
