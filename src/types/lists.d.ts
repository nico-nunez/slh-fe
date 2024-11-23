type NewListItem = {
    _id?: string;
    description: string;
    link: string;
};

type ListItemData = {
    description: string; // 'Toys';
    link: string; // '';
    _id: string; // '67314be0f9168a079ee15cdc';
};

type ListData = {
    _id: string; //  '67314b2df9168a079ee15cbb';
    title: string; // "Isadora's Xmas List";
    items: ListItemData[];
    public: boolean;
    subscribers: string[]; // ids?
    creator: { _id: string; displayName: string }; // '67314a6cf9168a079ee15cab';
    createdAt: string; // '2024-11-11T00:09:17.887Z';
    updatedAt: string; // '2024-11-11T00:12:16.435Z';
    __v: 0; // number;
};

type PaginationData = {
    numPages: number;
    current: number;
    baseURL: string;
};

type GETPublicLists = {
    lists: ListData[];
    pages: PaginationData;
    searchBy: string;
    searchString: string;
};

type PublishListBody = {
    title: string;
    items: NewListItem[];
    public: boolean;
};

type POSTPublishList = {
    message: string;
    data: Omit<ListData, 'creator'> & { creator: string };
};
