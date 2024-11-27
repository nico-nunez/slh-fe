type PartyCreator = {
    _id: string;
    displayName: string;
};

type PartyCardData = {
    _id: string; //
    title: string; //
    creator: PartyCreator;
    status: string;
    updatedAt: string;
    numMembers: number;
};

type GETPublicParties = PartyCardData[];

type DashboardPartyData = {
    _id: string; // '67314ec1f9168a079ee15cf9';
    title: string; // "Isadora's Xmas Party";
    secret: string; // '0B38L648HM3QE09Z';
    selectionsOn: string; // '2024-12-24T00:00:00.000Z';
    exchangeOn: string; // '2024-12-25T00:00:00.000Z';
    creator: string; // '67314a6cf9168a079ee15cab';
    lists: string[]; // ids?
    members: string[]; // ['67314a6cf9168a079ee15cab'];
    public: boolean; // true;
    status: 'open' | 'closed'; // 'open';
    subscribers: string[]; // ['67314a6cf9168a079ee15cab'];
    exclusions: string[]; // ids?
    createdAt: string; // '2024-11-11T00:24:33.257Z';
    updatedAt: string; // '2024-11-11T00:24:33.257Z';
    __v: number; // 0;
};

type GETPartyData = {
    party: {
        _id: '672788fda844633ff6cc5622';
        title: 'Grab bag 2024';
        secret: '0E8186I77516F9S7';
        selectionsOn: '2024-11-23T00:00:00.000Z';
        exchangeOn: '2024-12-24T00:00:00.000Z';
        creator: {
            _id: '636fbd51d6a5a6574d21c24f';
            displayName: 'Nick';
        };
        lists: [
            {
                _id: '673aacfb0cad9aa58511d7e0';
                title: 'Lettie';
                creator: '6372cc93aa72fc7f1bc84f93';
            },
            {
                _id: '674273850cad9aa58511fbd9';
                title: '~*~ All I Want For Christmas ~*~';
                creator: '6370495bdadb48d3b9352776';
            },
            {
                _id: '673f57070cad9aa58511e09d';
                title: 'Merry & Bright';
                creator: '637036bbdadb48d3b935273d';
            },
        ];
        members: [
            {
                _id: '637adf7f44b1d543c1ba9454';
                displayName: 'Dannyboy';
            },
            {
                _id: '637279f6aa72fc7f1bc84d97';
                displayName: 'Ebby';
            },
            {
                _id: '637036bbdadb48d3b935273d';
                displayName: 'Joanne';
            },
            {
                _id: '63727681aa72fc7f1bc84ce7';
                displayName: 'Joe';
            },
            {
                _id: '656d1e67d6d0d401bad07d83';
                displayName: 'Kody';
            },
            {
                _id: '63727214aa72fc7f1bc84bfd';
                displayName: 'Kristina';
            },
            {
                _id: '6372cc93aa72fc7f1bc84f93';
                displayName: 'Lettie';
            },
            {
                _id: '6379a66d2d78c38459150bb5';
                displayName: 'Lew';
            },
            {
                _id: '6370495bdadb48d3b9352776';
                displayName: 'Manda';
            },
            {
                _id: '6372e095aa72fc7f1bc84ff8';
                displayName: 'Melissa';
            },
            {
                _id: '63727347aa72fc7f1bc84c33';
                displayName: 'Myrna';
            },
            {
                _id: '636fbd51d6a5a6574d21c24f';
                displayName: 'Nick';
            },
            {
                _id: '6372c2adaa72fc7f1bc84ee1';
                displayName: 'Toni';
            },
        ];
        public: true;
        status: 'in progress';
        subscribers: [
            '636fbd51d6a5a6574d21c24f',
            '63727681aa72fc7f1bc84ce7',
            '63727214aa72fc7f1bc84bfd',
            '637adf7f44b1d543c1ba9454',
            '63727347aa72fc7f1bc84c33',
            '6372c2adaa72fc7f1bc84ee1',
            '6370495bdadb48d3b9352776',
            '637036bbdadb48d3b935273d',
            '6379a66d2d78c38459150bb5',
            '6372e095aa72fc7f1bc84ff8',
            '656d1e67d6d0d401bad07d83',
            '637279f6aa72fc7f1bc84d97',
            '6372cc93aa72fc7f1bc84f93',
            '6727abf7a844633ff6cc60ed',
        ];
        exclusions: [
            {
                member_id: {
                    _id: '636fbd51d6a5a6574d21c24f';
                    displayName: 'Nick';
                };
                excluded_id: {
                    _id: '637036bbdadb48d3b935273d';
                    displayName: 'Joanne';
                };
                _id: '672798503507bbf26504e010';
            },
            {
                member_id: {
                    _id: '636fbd51d6a5a6574d21c24f';
                    displayName: 'Nick';
                };
                excluded_id: {
                    _id: '637279f6aa72fc7f1bc84d97';
                    displayName: 'Ebby';
                };
                _id: '672798513507bbf26504e017';
            },
            {
                member_id: {
                    _id: '636fbd51d6a5a6574d21c24f';
                    displayName: 'Nick';
                };
                excluded_id: {
                    _id: '6370495bdadb48d3b9352776';
                    displayName: 'Manda';
                };
                _id: '672798513507bbf26504e01c';
            },
            {
                member_id: {
                    _id: '637036bbdadb48d3b935273d';
                    displayName: 'Joanne';
                };
                excluded_id: {
                    _id: '637279f6aa72fc7f1bc84d97';
                    displayName: 'Ebby';
                };
                _id: '672798513507bbf26504e020';
            },
            {
                member_id: {
                    _id: '637036bbdadb48d3b935273d';
                    displayName: 'Joanne';
                };
                excluded_id: {
                    _id: '6370495bdadb48d3b9352776';
                    displayName: 'Manda';
                };
                _id: '672798513507bbf26504e026';
            },
            {
                member_id: {
                    _id: '637279f6aa72fc7f1bc84d97';
                    displayName: 'Ebby';
                };
                excluded_id: {
                    _id: '6370495bdadb48d3b9352776';
                    displayName: 'Manda';
                };
                _id: '672798513507bbf26504e02c';
            },
            {
                member_id: {
                    _id: '63727214aa72fc7f1bc84bfd';
                    displayName: 'Kristina';
                };
                excluded_id: {
                    _id: '6372c2adaa72fc7f1bc84ee1';
                    displayName: 'Toni';
                };
                _id: '672798513507bbf26504e034';
            },
            {
                member_id: {
                    _id: '63727214aa72fc7f1bc84bfd';
                    displayName: 'Kristina';
                };
                excluded_id: {
                    _id: '63727681aa72fc7f1bc84ce7';
                    displayName: 'Joe';
                };
                _id: '672798513507bbf26504e03c';
            },
            {
                member_id: {
                    _id: '63727214aa72fc7f1bc84bfd';
                    displayName: 'Kristina';
                };
                excluded_id: {
                    _id: '6372e095aa72fc7f1bc84ff8';
                    displayName: 'Melissa';
                };
                _id: '672798513507bbf26504e045';
            },
            {
                member_id: {
                    _id: '6372c2adaa72fc7f1bc84ee1';
                    displayName: 'Toni';
                };
                excluded_id: {
                    _id: '63727681aa72fc7f1bc84ce7';
                    displayName: 'Joe';
                };
                _id: '672798513507bbf26504e04f';
            },
            {
                member_id: {
                    _id: '6372c2adaa72fc7f1bc84ee1';
                    displayName: 'Toni';
                };
                excluded_id: {
                    _id: '6372e095aa72fc7f1bc84ff8';
                    displayName: 'Melissa';
                };
                _id: '672798513507bbf26504e05a';
            },
            {
                member_id: {
                    _id: '63727681aa72fc7f1bc84ce7';
                    displayName: 'Joe';
                };
                excluded_id: {
                    _id: '6372e095aa72fc7f1bc84ff8';
                    displayName: 'Melissa';
                };
                _id: '672798513507bbf26504e066';
            },
            {
                member_id: {
                    _id: '6372cc93aa72fc7f1bc84f93';
                    displayName: 'Lettie';
                };
                excluded_id: {
                    _id: '6379a66d2d78c38459150bb5';
                    displayName: 'Lew';
                };
                _id: '672798513507bbf26504e073';
            },
            {
                member_id: {
                    _id: '6372cc93aa72fc7f1bc84f93';
                    displayName: 'Lettie';
                };
                excluded_id: {
                    _id: '637adf7f44b1d543c1ba9454';
                    displayName: 'Dannyboy';
                };
                _id: '672798513507bbf26504e081';
            },
            {
                member_id: {
                    _id: '6372cc93aa72fc7f1bc84f93';
                    displayName: 'Lettie';
                };
                excluded_id: {
                    _id: '656d1e67d6d0d401bad07d83';
                    displayName: 'Kody';
                };
                _id: '672798513507bbf26504e090';
            },
            {
                member_id: {
                    _id: '6379a66d2d78c38459150bb5';
                    displayName: 'Lew';
                };
                excluded_id: {
                    _id: '637adf7f44b1d543c1ba9454';
                    displayName: 'Dannyboy';
                };
                _id: '672798513507bbf26504e0a0';
            },
            {
                member_id: {
                    _id: '6379a66d2d78c38459150bb5';
                    displayName: 'Lew';
                };
                excluded_id: {
                    _id: '656d1e67d6d0d401bad07d83';
                    displayName: 'Kody';
                };
                _id: '672798513507bbf26504e0b1';
            },
            {
                member_id: {
                    _id: '637adf7f44b1d543c1ba9454';
                    displayName: 'Dannyboy';
                };
                excluded_id: {
                    _id: '656d1e67d6d0d401bad07d83';
                    displayName: 'Kody';
                };
                _id: '672798513507bbf26504e0c3';
            },
        ];
        createdAt: '2024-11-03T14:30:21.979Z';
        updatedAt: '2024-11-24T01:55:18.605Z';
        __v: 3;
        isMember: false;
        disableJoin: true;
    };
    lists: {
        '6372cc93aa72fc7f1bc84f93': {
            _id: '673aacfb0cad9aa58511d7e0';
            title: 'Lettie';
            creator: '6372cc93aa72fc7f1bc84f93';
        };
        '6370495bdadb48d3b9352776': {
            _id: '674273850cad9aa58511fbd9';
            title: '~*~ All I Want For Christmas ~*~';
            creator: '6370495bdadb48d3b9352776';
        };
        '637036bbdadb48d3b935273d': {
            _id: '673f57070cad9aa58511e09d';
            title: 'Merry & Bright';
            creator: '637036bbdadb48d3b935273d';
        };
    };
    userLists: [];
    joinCode: '';
    exclusionRequests: [];
    excludeUserList: [
        {
            _id: '637adf7f44b1d543c1ba9454';
            displayName: 'Dannyboy';
        },
        {
            _id: '637279f6aa72fc7f1bc84d97';
            displayName: 'Ebby';
        },
        {
            _id: '637036bbdadb48d3b935273d';
            displayName: 'Joanne';
        },
        {
            _id: '63727681aa72fc7f1bc84ce7';
            displayName: 'Joe';
        },
        {
            _id: '656d1e67d6d0d401bad07d83';
            displayName: 'Kody';
        },
        {
            _id: '63727214aa72fc7f1bc84bfd';
            displayName: 'Kristina';
        },
        {
            _id: '6372cc93aa72fc7f1bc84f93';
            displayName: 'Lettie';
        },
        {
            _id: '6379a66d2d78c38459150bb5';
            displayName: 'Lew';
        },
        {
            _id: '6370495bdadb48d3b9352776';
            displayName: 'Manda';
        },
        {
            _id: '6372e095aa72fc7f1bc84ff8';
            displayName: 'Melissa';
        },
        {
            _id: '63727347aa72fc7f1bc84c33';
            displayName: 'Myrna';
        },
        {
            _id: '636fbd51d6a5a6574d21c24f';
            displayName: 'Nick';
        },
        {
            _id: '6372c2adaa72fc7f1bc84ee1';
            displayName: 'Toni';
        },
    ];
    selection: null;
};
