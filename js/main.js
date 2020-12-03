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
        //index for sider
        beforeIndex: '',
        firstIndex: 0,
        secondIndex: 1,
        thirdIndex: 2,
        afterIndex: 3,
        //slider
        move: false,
        pos: '',
        news:[
            {
                path:'news-1.jpg',
                title: 'Increasing creativity is possible for everyone',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                author: 'Andrea Miller',
                access: 'two Days Ago'
            },
            {
                path:'news-2.jpg',
                title: 'Because market research is part of the business plan',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                author: 'Charly Brown',
                access: '1 Week Ago'
            },
            {
                path:'news-3.jpg',
                title: 'Working from home is now a trend',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                author: 'Madeleine Day',
                access: 'Yesterday'
            },
            {
                path:'news-4.jpg',
                title: 'Text of 4th news',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                author: 'Paul Frank',
                access: 'Today'
            },
            {
                path:'news-5.jpg',
                title: 'Text of 5th news',
                text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
                author: 'Anne Philips',
                access: 'three Days Ago'
            },
        ],
    },
    created(){
        this.beforeIndex = this.news.length -1;
        console.log(this.beforeIndex);
    },
    methods:{
        toggleMenu(index){
            if (this.menu[index].open != null){
                this.menu[index].open = !this.menu[index].open;
                if(this.menu[index].open === true){
                    for (i = 0; i < this.menu.length; i++){
                        if (i != index){
                            this.menu[i].open = false; 
                        };
                    };
                };
            };
        },
        goRight(){
            this.pos = 'pos-right'
            this.move = true;
            setTimeout( ()=> {
                this.move = false;

                // before index
                this.beforeIndex --;
                if (this.beforeIndex < 0){
                    this.beforeIndex = this.news.length -1; 
                };

                //first index
                this.firstIndex --;
                if (this.firstIndex < 0){
                    this.firstIndex = this.news.length -1; 
                };
                //second index
                this.secondIndex --;
                if (this.secondIndex < 0){
                    this.secondIndex = this.news.length -1; 
                };

                //third index
                this.thirdIndex --;
                if (this.thirdIndex < 0){
                    this.thirdIndex = this.news.length -1; 
                };

                //after index
                this.afterIndex --;
                if (this.afterIndex < 0){
                    this.afterIndex = this.news.length -1; 
                };
            },1000)
        },
        goLeft(){
            this.pos = 'pos-left'
            this.move = true;
            setTimeout( ()=> {
                this.move = false;
                
                //before index
                this.beforeIndex ++;
                if (this.beforeIndex == this.news.length){
                    this.beforeIndex = 0; 
                };

                //first index
                this.firstIndex ++;
                if (this.firstIndex == this.news.length){
                    this.firstIndex = 0; 
                };
                
                //second index
                this.secondIndex ++;
                if (this.secondIndex == this.news.length){
                    this.secondIndex = 0; 
                };

                //third index
                this.thirdIndex ++;
                if (this.thirdIndex == this.news.length){
                    this.thirdIndex = 0; 
                };

                //after index
                this.afterIndex ++;
                if (this.afterIndex == this.news.length){
                    this.afterIndex = 0; 
                };
            },1000)
        },

    }
});