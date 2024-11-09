type NotificationData = {
    title: string;
    content: string;
    generator: string;
    recipients: string[]; // user ids
    readBy: string[]; // user ids
    _id: string;
    updatedAt: string;
    createdAt: string;
};

type UserData = {
    id: string;
    avatar: string;
    displayName: string;
    email: {
        address: string;
        verified: boolean;
    };
    notifications: NotificationData[];
    verified: true;
};

type POSTLoginResponse = {
    user: UserData | null;
    errorMessage?: string;
};
