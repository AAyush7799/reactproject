// Generating All Constants for Sagas and Reducers.

let default_reducers = ['loading', 'success', 'error', "save", "reset", "fetch_success", "fetch_error", 'fetch', 'unload']
let default_reducer_prefix = "REDUCERS"
let default_saga_prefix = "SAGAS"

function generateConsts(type) {
	switch (type) {
		case 'auth': return {
			reducers: default_reducers,
			actions: ['login'],
			name: "AUTH"
		}
		case 'home': return {
			reducers: default_reducers,
			actions: ['newProject',],
			name: "HOME"
		}
	}
}
export default function constants(type) {
	let constants = {
		reducers: {},
		sagas: {}
	};
	let genConsts = generateConsts(type);

	for (let i in genConsts.actions) {
		if (!constants.sagas[genConsts.actions[i]]) {
			constants.sagas[genConsts.actions[i]] = {}
		}
		constants.sagas[genConsts.actions[i]] = `${type}/${default_saga_prefix}/${genConsts.actions[i]}`;
		for (let j in genConsts.reducers) {
			if (!constants.reducers[genConsts.actions[i]]) {
				constants.reducers[genConsts.actions[i]] = {}
			}
			constants.reducers[genConsts.actions[i]][genConsts.reducers[j]] = `${type}/${default_reducer_prefix}/${genConsts.actions[i]}/${genConsts.reducers[j]}`;
		}
	}
    // console.log("constants Hello" , constants)
	return constants;
}


