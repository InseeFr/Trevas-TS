/* */
const createSuggester = async ({ variables = [] }) => {
  const varIndex = await mergeTokens(
    variables.map(token => prepareToken(token))
  );
  return suggest({ variables: varIndex });
};

/* */
const suggest = index => prefix => {
  const variables =
    prefix in index.variables ? [...index.variables[prefix]] : [];
  return { variables };
};

/* */
const prepareToken = (token, index) =>
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
  Promise.resolve(
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
    )
  );

export default createSuggester;
/*

dictionnary : {
    variables: [...string]
}

*/
