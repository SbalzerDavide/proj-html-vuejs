const app = new Vue ({
    el: '#app',
    data: {
        phoneNumber: '+1 (305) 1234-5678',
        mail: 'hello@example.com',
        address: 'Main Avenue, 987',
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
                sub: [
                    'The Company',
                    'Institutional',
                    'Social & Events',
                    'Innovation',
                    'Environment',
                    'Technlogy'
                ],
                open: false,
            },
            {
                name: 'services',
                sub: [
                    'Audit & Assurance',
                    'Financial Advisory',
                    'Analytics M&A',
                    'Middle Marketing',
                    'Legal Consulting',
                    'Regulatory Risk'
                ],
                open: false,
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

        ],
        newsletter: {
            name: '',
            email: '',
        },
        message: {
            name: '',
            email: '',
            phone: '',
            text:'',
        },
        siteMap:[
            {
                category: 'About',
                sub: [
                    'The Company',
                    'Institutional',
                    'Social & Events',
                    'Innovation',
                    'Environment',
                    'Technlogy'
                ],
            },
            {
                category: 'Services',
                sub: [
                    'Audit & Assurance',
                    'Financial Advisory',
                    'Analytics M&A',
                    'Middle Marketing',
                    'Legal Consulting',
                    'Regulatory Risk'
                ],
            },
            {
                category: 'Support',
                sub: [
                    'Responsability',
                    'Terms of Use',
                    'About Cookies',
                    'Privacy Policy',
                    'Accessibility',
                    'Information'
                ],
            },
        ],
    },
    methods:{
        toggleMenu(index){
            console.log(index);
            if (this.menu[index].open != null){
                this.menu[index].open = !this.menu[index].open;
                console.log(this.menu[index].open);
                if(this.menu[index].open === true){
                    for (i = 0; i < this.menu.length; i++){
                        if (i != index){
                            this.menu[i].open = false; 
                        };
                    };
                };
            }
        }
    }
});