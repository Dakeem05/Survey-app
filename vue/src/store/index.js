import {createStore} from "vuex";
import axiosClient from "../axios";

const tmpSurveys = [
    {
        id:100,
        title: "theCodeholic youtube channel content",
        slug:"thecodeholic-youtube-channel-content",
        status:"draft",
        image:"https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description:"My name is Zura.<br>I am a Web Developer with 9+ years of experience, free educationa",
        created_at:"2021-12-20 18:00:00",
        updated_at:"2021-12-20 18:00:00",
        expire_at:"2021-12-31 18:00:00",
        questions:[
            {
                id:1,
                type:"select",
                questions:"From which country are you",
                description:null,
                data:{
                    options:[
                        {
                            uuid:"f8af96f2-1d80-4632-9e9e-b560670e52ea",
                            text:"USA"
                        },
                        {
                            uuid:"201c1ff5-23c9-42f9-bfb5-bbc850536440",
                            text:"Georgia"
                        },
                        {
                            uuid:"b5c09733-a49e-460a-ba8a-526863010729",
                            text:"Germany"
                        },
                        {
                            uuid:"2abf1cee-f5fb-427c-a220-b5d159ad6513",
                            text:"India"
                        },
                        {
                            uuid:"8d14341b-ec2b-4924-9aea-bda6a53b51fc",
                            text:"United Kingdom"
                        },
                    ]
                } 
            },
            {
                id:2,
                type:"checkbox",
                question:"Which language videos do you want to see on my channel",
                description:"Lorem ipsum huig uhg97  gog ugougg h hoh ho h0oh00",
                data:{
                    options:[
                        {
                            uuid:"f8af962-1d80-4632-9e9e-b560670e52ea",
                            text:"Javascript"
                        },
                        {
                            uuid:"42f66856-b024-4cf4-812c-a104f36910bf",
                            text:"PHP"
                        },
                        {
                            uuid:"244d5452-cd48-4b16-91a5-f41d44ba9a4d",
                            text:"HTML + CSS"
                        },
                        {
                            uuid:"f8287303-c07f-4947-8d4c-c54e38bcb271",
                            text:"ALl of the above"
                        },
                        {
                            uuid:"d93ffa9f-544f-4517-aab1-cbc7523ae09e",
                            text:"Everything Zura thinks will be good"
                        },
                    ]
                }
            },
            {
                id:3,
                type:"checkbox",
                question:"Which PHP framework videoss do you want to see in channel",
                description:"Lorem ipsum huig uhg97  gog ugougg h hoh ho h0oh00",
                data:{
                    options:[
                        {
                            uuid:"f8af962-1d80-4632-9e9e-b560670e52ea",
                            text:"Laravel"
                        },
                        {
                            uuid:"dbe522a8-51a8-45ea-8b52-9e915c2ad4dc",
                            text:"Yii2"
                        },
                        {
                            uuid:"ba5608fb-e002-4627-bffa-e1ba627275da",
                            text:"Codeigniter"
                        },
                        {
                            uuid:"fec344f9-b688-43c0-8446-6d64b55f3d96",
                            text:"Sympfony"
                        },
                    ]
                }
            },
            {
                id:4,
                type:"radio",
                question:"What LAravel framework do you love most?",
                description:"Lorem ipsum huig uhg97  gog ugougg h hoh ho h0oh00",
                data:{
                    options:[
                        {
                            uuid:"563805ae-a90b-41e1-8496-dd628ed933c8",
                            text:"Laravel 5"
                        },
                        {
                            uuid:"f59abe18-77aa-4712-829f-5e9cec9d5557",
                            text:"Laravel 6"
                        },
                        {
                            uuid:"b4c19c8b-57f2-4ae5-8028-d0140dcae518",
                            text:"LAravel 7"
                        },
                        {
                            uuid:"732f69fd-937f-4e87-a7c2-ad4c5e56226f",
                            text:"LAravel 8"
                        },
                    ]
                }
            },
            {
                id:5,
                type:"checkbox",
                question:"What  type of products do you want to see on my chgannel built with laravel?",
                description:"Lorem ipsum huig uhg97  gog ugougg h hoh ho h0oh00",
                data:{
                    options:[
                        {
                            uuid:"7cee7e40-727b-4a03-b1aa-b7ac3396a897",
                            text:"Rest Api"
                        },
                        {
                            uuid:"ab3b2cb9-98bf-4da6-bafc-1327ebe14a20",
                            text:"E-commerce"
                        },
                        {
                            uuid:"f3e32fd7-5d01-4eaa-952b-2720cd002903",
                            text:"Real Estate"
                        },
                        {
                            uuid:"7f3c59ba-7d4d-4ee6-a6b2-4102ff8c3a6e",
                            text:"All of the above"
                        },
                    ]
                }
            },
            {
                id: 6,
                type:"text",
                question:"WHat's your favourite Youtub channel?",
                description:null,
                data:{},
            },
            {
                id:7,
                tye:"textarea",
                question:" What do you think about TheCodeholic channel",
                description:"Write your honest opinion. Everything is anonymous",
                data:{}
            }

        ]
    },
    {
        id:200,
        title:"LAravel 8",
        slug:"laravel-8",
        status:"active",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
        description:`Laravel is a web application 
         framawork with expression, elegant syntax. We've`,
         created_at:"2021-12-20 18:00:00",
         updated_at:"2021-12-20 18:00:00",
         expire_at:"2021-12-31 18:00:00",
         questions:[]
    },
    {
        id:300,
        title:"Vue 3",
        slug:"vue-3",
        status:"active",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
        description:`Vue (pronounced /vju:/, like view is a progressive framework for building)`,
         created_at:"2021-12-20 17:00:00",
         updated_at:"2021-12-20 17:00:00",
         expire_at:"2021-12-31 00:00:00",
         questions:[]
    },
    {
        id:400,
        title:"Tailwind 3",
        slug:"tailwind-3",
        status:"active",
        image:"data:image/png;base64,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",
        description:`A utility-first CSS framework packed with classes like <code>flex</code>,`,
         created_at:"2021-12-20 14:00:00",
         updated_at:"2021-12-20 14:00:00",
         expire_at:"2021-12-31 00:00:00",
         questions:[]
    },
]
const store = createStore({
    state:{
        user:{
            data:{},
            token:sessionStorage.getItem('TOKEN')
        },
        surveys:[...tmpSurveys],
        questionTypes:['text', 'select', 'radio', 'checkbox', 'textarea'],
    },
    getter:{},
    actions:{
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
