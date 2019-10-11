/* INSERT_CHARACTER */
export const INSERT_CHARACTER = 'editor/insert-charactere';
export const insertCharacter = char => ({
	type: INSERT_CHARACTER,
	payload: { char },
});
