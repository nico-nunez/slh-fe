import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// API REQUESTS
import {
    getPartyData,
    updateMembers,
    makePartySelections,
} from '../../../../apis';
import { useMutation } from '@tanstack/react-query';

// CONTEXT
import { useAuthContext } from '../../../../contexts';

// COMPONENTS
import ConfirmationModal from '../../../../components/Confirmation-Modal';

// ROUTING
import {
    Link,
    createFileRoute,
    SearchSchemaInput,
} from '@tanstack/react-router';
export const Route = createFileRoute('/_private/parties/$partyId/')({
    validateSearch: (search: Record<string, string> & SearchSchemaInput) => ({
        join_code: search?.join_code,
    }),
    component: () => <ViewParty />,
    loader: async ({ params }) => getPartyData(params.partyId),
});

type ConfirmAction = {
    header: string;
    content: string;
    onConfirm: () => void;
};

// PARTY VIEW PAGE
function ViewParty() {
    const { user } = useAuthContext();
    const data = Route.useLoaderData();
    const { join_code } = Route.useSearch();
    const [secretInput, setSecretInput] = useState('');

    useEffect(() => {
        if (!join_code) return;
        setSecretInput(join_code);
    }, [join_code]);

    // MAKE SELECTIONS CONFIRMATION
    const [confirmation, setConfirmation] = useState<ConfirmAction | null>(
        null
    );

    const selectionsMutation = useMutation({
        mutationFn: (partyId: string) => makePartySelections(partyId),
    });

    const membersMutation = useMutation({
        mutationFn: (body: UpdateMembersBody) => updateMembers(body),
    });

    const isPastSelectionsDate = data.party.selectionsOn
        ? new Date(new Date().toUTCString()) > new Date(data.party.selectionsOn)
        : false;

    const onCopyInvite = () => {
        if (!data.party) {
            toast.error('Invite link is not available.');
            return;
        }
        const inviteURL = `https://santaslilhelper.net/parties/${data.party._id}?join_code=${data.party.secret}`;

        navigator.clipboard.writeText(inviteURL);
        toast.info('Link copied to clipboard.');
    };

    const onClickMakeSelections = (
        evt: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        evt.preventDefault();
        if (!data.party) return;

        const confirmMsg = {
            header: 'Make Selections',
            content:
                'You are attempting to make selections prior to the set date.',
            onConfirm: () => selectionsMutation.mutate(data.party._id),
        };

        if (data.selection) {
            confirmMsg.content =
                'Selections already exist and will be overwritten.';
        }

        setConfirmation(confirmMsg);
    };

    const onCancelConfirm = () => {
        setConfirmation(null);
    };

    // HANDLE JOIN PARTY
    const onJoinParty = (evt: React.FormEvent) => {
        evt.preventDefault();

        membersMutation.mutate({
            id: data.party._id,
            secret: secretInput,
        });
    };

    // JSX
    return data ? (
        <div className="card mx-auto w-full bg-base-100 shadow-xl md:w-3/4">
            <div className="card-body">
                <div className="prose max-w-none text-center">
                    <h2 className="mb-0">{data.party.title}</h2>
                    <div>
                        <span className="italic">
                            Created by: {data.party.creator.displayName}
                        </span>
                    </div>
                    {user?.id === data.party.creator._id ? (
                        // Show
                        <div className="inline-flex gap-3 italic">
                            <Link
                                to="/parties/$partyId/edit"
                                params={{ partyId: data.party._id }}
                            >
                                Edit
                            </Link>
                            <a href="#">Delete</a>
                            <a href="#" onClick={onClickMakeSelections}>
                                Make Selections
                            </a>
                        </div>
                    ) : !isPastSelectionsDate && !data.party.isMember ? (
                        <form
                            onSubmit={onJoinParty}
                            className="form-control mt-4 items-center gap-2"
                        >
                            <input
                                className="form-control input input-bordered"
                                name="secret"
                                placeholder="Party code"
                                onChange={({ currentTarget: { value } }) =>
                                    setSecretInput(value)
                                }
                                value={secretInput}
                                disabled={!!join_code}
                                required
                            />
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={!secretInput}
                            >
                                Join
                            </button>
                        </form>
                    ) : null}

                    {!isPastSelectionsDate && data.party.isMember ? (
                        <div className="mt-3">
                            <button
                                className="link font-bold italic"
                                onClick={onCopyInvite}
                            >
                                Invite link <i className="icon-copy" />
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className="divider"></div>
                <div className="flex flex-col justify-between gap-3 md:flex-row">
                    <div className="flex flex-col items-center">
                        <span className="">Names Drawn:</span>{' '}
                        <span className="text-lg font-bold">
                            {data.party.selectionsOn.split('T')[0]}
                        </span>
                    </div>
                    {data.selection ? (
                        <div className="flex flex-col items-center">
                            <span className="">Selection:</span>{' '}
                            <span className="text-xl font-bold">
                                {data.selection.displayName}
                            </span>
                        </div>
                    ) : null}
                    <div className="flex flex-col items-center">
                        <span className="">Gifts Exchanged:</span>{' '}
                        <span className="text-lg font-bold">
                            {data.party.exchangeOn.split('T')[0]}
                        </span>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="w-full overflow-x-auto">
                    <table className="table bg-base-300">
                        <thead>
                            <tr>
                                <th className="text-lg md:text-center">
                                    Members
                                </th>
                                <th className="text-end text-lg md:text-center">
                                    Lists
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.party.members.map((member) => (
                                <tr key={member._id}>
                                    <td className="md:text-center">
                                        {member.displayName}
                                    </td>
                                    <td className="md:max-w-1/2 max-w-24 text-end md:text-center">
                                        {data.lists?.[member._id] ? (
                                            <Link
                                                className="link"
                                                to="/lists/$listId"
                                                params={{
                                                    listId: data.lists[
                                                        member._id
                                                    ]._id,
                                                }}
                                                title={
                                                    data.lists[member._id].title
                                                }
                                            >
                                                {data.lists[member._id].title}
                                            </Link>
                                        ) : (
                                            'N/A'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* --- Delete Party / Make Selections Confirmation --- */}
            {confirmation ? (
                <ConfirmationModal
                    isOpen={true}
                    header={`Confirm: ${confirmation.header}`}
                    content={
                        <div className="mt-4 flex flex-col">
                            <span>{confirmation.content}</span>
                            <span>Are you sure you want to continue?</span>
                        </div>
                    }
                    onCancel={onCancelConfirm}
                    onConfirm={confirmation.onConfirm}
                />
            ) : null}
        </div>
    ) : (
        <h1>Unable to find the party you're looking for :(</h1>
    );
}
