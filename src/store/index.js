import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import {BASE_URL} from "../../vue.config";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loadedMeetups:
            [
                {imageUrl: '/1', id: '/1', title: '/1', data: new Date(), location: 'ne Usa 1'},
                {imageUrl: '/2', id: '/2', title: '/2', data: new Date(), location: 'ne Usa 2'},
                {imageUrl: '/3', id: '/3', title: '/3', data: new Date(), location: 'ne Usa 3'},
                {imageUrl: '/4', id: '/4', title: '/4', data: new Date(), location: 'ne Usa 4'},
            ],
        user: null,
        loading: false,
        error: null,
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser(state, payload) {
            state.user = payload;
        },
        setLoading(state, payload) {
            state.loading = payload;
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null;
        }
    },
    actions: {
        createMeetup({commit}, payload) {
            const meetup = {
                id: '212',
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
            };
            commit('createMeetup', meetup)
        },
        signUserUp({commit}, payload) {
            commit('setLoading', true);
            const signUp = {
                email: payload.email,
                password: payload.password,
            };
            axios.post(BASE_URL + '/', signUp)
                .then(user => {
                    commit('setLoading', false);
                    commit('setError', error);
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    };
                    commit('setUser', newUser)
                })
                .catch(
                    error => {
                        console.log(error);
                    });
        },
        signUserin({commit}, payload) {
            commit('setLoading', false);
            commit('clearError');
            const signIn = {
                email: payload.email,
                password: payload.password,
            };
            axios.post(BASE_URL + '/', signIn)
                .then(user => {
                    commit('setLoading', false);
                    commit('setError', error);
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    };
                    commit('setUser', newUser)
                })
                .catch(
                    error => {
                        commit('setLoading', false);
                        commit('setError', error);
                        console.log(error);
                    });
        }
    },
    modules: {},
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date;
            });
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5);
        },
        loadedMeetup(state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user(state) {
            return state.user;
        }
    }
})
