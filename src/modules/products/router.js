const moduleRoute = {
    path: "/products",
    component: ()=> import('./Module.vue'),
    children: [
        {
            path: '/',
            component: ''
        },
        {
            path: ':id',
            component: ''
        }
    ]
}

export default router =>{
    router.addRoutes([moduleRoute])
}