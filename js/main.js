const app = new Vue ({
    el: '#app',
    data: {
        phoneNumber: '+1 (305) 1234-5678',
        mail: 'hello@example.com',
        OpenHours: {
            openDay: 'Mon',
            closeDay: 'Sat',
            openHour: '9.00',
            closeHour: '18.00',
        },
        menu: [
            {
                name: 'home',
                sub: [],
            },
            {
                name: 'about',
                sub: [],
            },
            {
                name: 'services',
                sub: [],
            },
            {
                name: 'pricing',
                sub: [],
            },
            {
                name: 'blog',
                sub: [],
            },
        ]
    },
});