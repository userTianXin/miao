export default {
    path : '/movie',
    component:()=>import('@/views/Movie'),
    children:[{
        path:'/movie/city',
        component:()=>import('@/components/City')
    },
    {
        path:'/movie/comingSoon',
        component:()=>import('@/components/ComingSoon')
    },
    {
        path:'/movie/search',
        component:()=>import('@/components/Search')
    },
    {
        path:'/movie/nowPlaying',
        component:()=>import('@/components/NowPlaying')
    },
    {
        path:'/movie',
        redirect:'/movie/nowPlaying'
    }]
}