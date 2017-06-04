var err = new Error('TEST PENDING');
function pending(){
	throw err;
}

function context(ctxDescription){
	return '(context ' + ctxDescription + ')';
}

module.exports = {
	context: context,
	pending: pending
}