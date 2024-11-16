type PartyData = {
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

type GETDashboardData = {
    lists: ListData[];
    parties: PartyData[];
    selections: [];
};
