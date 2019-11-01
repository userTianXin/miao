export default {
    path : '/cinema',
    component:()=>import('@/views/Cinema'),
    children:[{
        path:'/cinema/allcity',
        component:()=>import('@/components/AllCity')
    },
    {
        path:'/cinema/brand',
        component:()=>import('@/components/Brand')
    },
    {
        path:'/cinema/feature',
        component:()=>import('@/components/Feature')
    },
]
}