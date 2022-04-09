export default  {
    namespaced: true,
    state: {
        fields: []
    },
    mutations: {
        SET_FIELDS: (state, payload) => (state.fields = payload)
    },
    actions: {
        async getFields({ commit }) {
            const res = await fetch("api/fields");

            const data = await res.json();

            commit("SET_FIELDS", data);
        }
    },
    getters: {
        fieldLength: state => {
            return state.fields.length
        }
    }
}