const anUndefinedProperty: any = undefined;

const searchView = {
  video: { name: 'LEGO Movie' },
  text: undefined,
  audio: { name: 'LEGO Movie Soundtrack' },
};

const searchResults = {
  video: { name: 'LEGO Movie' },
  text: null,
  audio: { name: 'LEGO Movie Soundtrack' },
};

console.log(anUndefinedProperty, searchView, searchResults);
