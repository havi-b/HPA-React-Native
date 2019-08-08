export default (state = { showTextInput: false }, action) => {
	switch (action.type) {
		case 'LOGIN':
			return (showTextInput = true);
		case 'BACK':
			return (showTextInput = false);
	}
};
