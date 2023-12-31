import {createStore} from "vuex";
import axiosClient from "../axios";


const store = createStore({
    state:{
        user:{
            data:{},
            token:sessionStorage.getItem('TOKEN')
        },
        surveys:{
            loading:false,
            links:[],
            data:[]
        },
        currentSurvey:{
            loading:false,
            data:{}
        },
        questionTypes:['text', 'select', 'radio', 'checkbox', 'textarea'],
        notification:{
            show:false,
            message:null,
            type:null,
        },
        dashboard:{
            loading:false,
            data:{}
        },
    },
    getter:{},
    actions:{
        getDashboardData({commit}){
            commit("dashboardLoading", true);
            return axiosClient.get("/dashboard").then((res)=>{
                commit("dashboardLoading", false);
                commit("setDashboardData", res.data);
                return res;
            }).catch((err)=>{
                commit("dashboardLoading", false);
                return console.error();
            })
        },
        getSurvey({commit}, id){
            commit('setCurrentSurveyLoading', true);
            return axiosClient.get(`survey/${id}`)
                    .then((res)=>{
                        commit("setCurrentSurvey", res.data);
                        commit('setCurrentSurveyLoading', false)
                    })
                    .catch((err)=>{
                        commit('setCurrentSurveyLoading', false);
                        return err;
                    })
        },
        saveSurvey({commit}, survey){
            
            delete survey.image_url;
            let response;
            if(survey.id){
                response = axiosClient.put(`/survey/${survey.id}`, survey).then((res)=>{
                        commit("setCurrentSurvey", res.data);
                        return res;
                    })
            } else {
                response = axiosClient.post('/survey', survey).then((res)=>{
                    commit("setCurrentSurvey", res.data);
                    return res;
                })
            }
            return response;
        },
        deleteSurvey({}, id){
            return axiosClient.delete(`/survey/${id}`)
        },
        getSurveys({commit}, {url = null} = {}){
            url = url || 'survey'
            commit("setSurveysLoading", true)
            return axiosClient.get(url).then((res)=>{
                commit("setSurveysLoading", false)
                commit("setSurveys", res.data);
                return res
            })
        },
        saveSurveyAnswer({commit}, {surveyId, answers}){
            return axiosClient.post(`/survey/${surveyId}/answer`, {answers})
        },
        getSurveyBySlug({commit}, slug){
            commit("setCurrentSurveyLoading", true);
            return axiosClient.get(`/survey-by-slug/${slug}`).then((res)=>{
                commit("setCurrentSurvey", res.data);
                commit("setCurrentSurveyLoading", false);
                return res;
            }).catch((err)=>{
                commit("setCurrentSurveyLoading", false);
                throw err;
            })
        },
        register({commit}, user){
            return axiosClient.post("/register", user)
            .then(({data}) =>{
                commit('setUser', data);
                return data;
            })
        },
        login({commit}, user){
            return axiosClient.post("/login", user)
            .then(({data}) =>{
                commit('setUser', data);
                return data; 
            })
        },
        logout({commit}){
            return axiosClient.post('/logout')
            .then((response)=>{
                commit('logout')
                return response
            })
        }
    },
    mutations:{
        dashboardLoading:(state, loading)=>{
            state.dashboard.loading = loading
        },
        setDashboardData:(state, data)=>{
            state.dashboard.data = data
        },
        notify:(state, {message, type})=>{
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false
            }, 4000);
        },
        setCurrentSurveyLoading:(state, loading)=>{
            state.currentSurvey.loading = loading;
        },
        setCurrentSurvey:(state, survey)=>{
            state.currentSurvey.data = survey.data;
        },
        setSurveysLoading:(state, loading)=>{
            state.surveys.loading = loading;
        },
        setSurveys:(state, survey)=>{
            state.surveys.data = survey.data;
            state.surveys.links = survey.meta.links;
        },
        logout: (state) => {
            state.user.data ={};
            state.user.token = null
        },
        setUser:(state, userData) => {
            state.user.data = userData.user;
            state.user.token = userData.token;
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules:{}
} )

export default store; 



// name: 'Tom Cook',
// email: 'tom@example.com',
// imageUrl:
//   'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
