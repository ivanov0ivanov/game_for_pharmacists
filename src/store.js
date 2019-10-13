import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        people: [
            {
                id: 1,
                img: require('./assets/img/png/person-1.png'),
                name: 'Марія',
                years: 19,
                description: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'
            },
            {
                id: 2,
                img: require('./assets/img/png/person-2.png'),
                name: 'Степан',
                years: 61,
                description: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
            },
            {
                id: 3,
                img: require('./assets/img/png/person-3.png'),
                name: 'Любов',
                years: 58,
                description: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною'
            },
            {
                id: 4,
                img: require('./assets/img/png/person-4.png'),
                name: 'Олександр',
                years: 20,
                description: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
            },
            {
                id: 5,
                img: require('./assets/img/png/person-5.png'),
                name: 'Ірина',
                years: 55,
                description: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
            }
        ],
        drugs: [
            {
                id: 1,
                name: 'Препарат 1',
                sold: 0,
                icon: require('./assets/img/svg/sad.svg'),
                class: 'sad',
                background: 'background: linear-gradient(258.29deg, #8049C7 0%, #CA57FD 100%)',
                action: 'left'
            },
            {
                id: 2,
                name: 'Препарат 2',
                sold: 0,
                icon: require('./assets/img/svg/happy.svg'),
                class: 'happy',
                background: 'background: linear-gradient(258.29deg, #169AE4 0%, #0CC4FA 100%)',
                action: 'top'
            },
            {
                id: 3,
                name: 'Препарат 3',
                sold: 0,
                icon: require('./assets/img/svg/heart.svg'),
                class: 'heart',
                background: 'background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%)',
                action: 'right'
            }
        ],
        currentPerson: [],
        restPeople: 0,
        actionAnimation: ''
    },

    getters: {
        getPeople: state => state.people,
        getDrugs: state => state.drugs,
        getCurrentPerson: state => state.currentPerson,
        getRestPeople: state => state.restPeople,
        getActionAnimation: state => state.actionAnimation
    },

    mutations: {
        CURRENT_PERSON(state, current) {
            state.currentPerson.splice(0, 1, state.people[current]);
        },

        DRUGS_SOLD(state, id) {
            state.drugs = state.drugs.map(item => {
                if (item.id === id) {
                    item.sold = item.sold + 1
                }
                return item
            })
        },

        CLEAN_SOLD(state, clean) {
            state.drugs = state.drugs.map(item => {
                item.sold = Number(clean);
                return item
            });
        },

        REST_PEOPLE(state, count) {
            state.restPeople = count;
        },

        ACTION_ANIMATION(state, action) {
            state.actionAnimation = action;
        }
    },

    actions: {
        currentPerson({commit}, current) {
            commit('CURRENT_PERSON', current)
        },

        drugsSold({commit}, id) {
            commit('DRUGS_SOLD', id)
        },

        cleanSold({commit}, clean) {
            commit('CLEAN_SOLD', clean)
        },

        restPeople({commit}, count) {
            commit('REST_PEOPLE', count)
        },

        actionAnimation({commit}, action) {
            commit('ACTION_ANIMATION', action)
        }
    }
});
