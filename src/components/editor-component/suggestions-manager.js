/* */
const createSuggester = (dictionnary = {}) =>
  suggest(
    Object.entries(dictionnary).reduce(
      (a, [section, values]) => ({
        ...a,
        [section]: mergeTokens(values.map(token => prepareToken(token)))
      }),
      {}
    )
  );

/* */
const suggest = index => prefix =>
  Object.entries(index).reduce(
    (a, [section, dico]) =>
      prefix in dico ? { ...a, [section]: [...dico[prefix]] } : a,
    {}
  );

/* */
const prepareToken = token =>
  token.split("").reduce(
    ({ result, step }, letter) => ({
      result: { ...result, [`${step}${letter}`]: token },
      step: `${step}${letter}`
    }),
    {
      result: {},
      step: ""
    }
  );

const mergeTokens = tokenized =>
  tokenized.reduce(
    (dico, { result }) =>
      Object.entries(result).reduce(
        (p, [c, step]) => ({
          ...p,
          [c]: c in dico ? [...dico[c], step] : [step]
        }),
        dico
      ),
    {}
  );

/* */
export const appendSection = index => (section, values) => ({
  ...index,
  [section]: null
});

export default createSuggester;
