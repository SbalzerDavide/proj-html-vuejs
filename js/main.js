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
        ], 
        plans: [
            {
                name: 'Standard',
                cost: 490,
                icon: 'fas fa-space-shuttle',
                popular: false,
                features:[
                    {
                        name: 'Standard Accounting',
                        status: true,
                    },
                    {
                        name: 'Platform Access',
                        status: true,
                    },
                    {
                        name: 'Business Orentation',
                        status: false,
                    },
                    {
                        name: 'Dedicated Consultant',
                        status: false,
                    },
                    {
                        name: 'Personal Assistance',
                        status: false,
                    },
                ]
            },
            {
                name: 'Professional',
                cost: 890,
                icon: 'fas fa-briefcase',
                popular: true,
                features:[
                    {
                        name: 'Standard Accounting',
                        status: true,
                    },
                    {
                        name: 'Platform Access',
                        status: true,
                    },
                    {
                        name: 'Business Orentation',
                        status: true,
                    },
                    {
                        name: 'Dedicated Consultant',
                        status: false,
                    },
                    {
                        name: 'Personal Assistance',
                        status: false,
                    },
                ]
            },
            {
                name: 'Ultimate',
                cost: 1390,
                icon: 'far fa-gem',
                popular: false,
                features:[
                    {
                        name: 'Standard Accounting',
                        status: true,
                    },
                    {
                        name: 'Platform Access',
                        status: true,
                    },
                    {
                        name: 'Business Orentation',
                        status: true,
                    },
                    {
                        name: 'Dedicated Consultant',
                        status: true,
                    },
                    {
                        name: 'Personal Assistance',
                        status: true,
                    },
                ]
            },

        ]
    },
});