import { Link } from '@tanstack/react-router';

interface PartyCardProps {
    data: PartyCardData;
}

function PartyCard({ data }: PartyCardProps) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body gap-4 italic">
                <div>
                    <h2 className="card-title justify-center">{data.title}</h2>
                    <div className="text-center text-sm">{data.status}</div>
                </div>
                <div className="flex justify-between">
                    <span>Creator: {data.creator.displayName}</span>
                    <span>Members: {data.numMembers}</span>
                </div>
                <div className="card-actions justify-center">
                    <Link
                        to="/parties/$partyId"
                        params={{ partyId: data._id }}
                        className="btn btn-primary"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PartyCard;
