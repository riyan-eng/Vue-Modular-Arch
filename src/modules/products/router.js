const moduleRoute = {
    path: "/products",
    component: '',
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