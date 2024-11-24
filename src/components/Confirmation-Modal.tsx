interface ConfirmationModalProps {
    isOpen?: boolean;
    header?: React.ReactNode;
    content?: React.ReactNode;
    onCancel: () => void;
    onConfirm: () => void;
}

function ConfirmationModal({
    isOpen = false,
    content = null,
    header = null,
    onCancel,
    onConfirm,
}: ConfirmationModalProps) {
    // JSX
    return (
        <dialog
            id="my_modal_1"
            className={`modal ${isOpen ? 'modal-open' : ''}`}
            open={isOpen}
        >
            <div className="modal-box">
                {typeof header === 'string' ? (
                    <h3 className="text-lg font-bold">{header}</h3>
                ) : (
                    header
                )}

                {typeof content === 'string' ? (
                    <p className="py-4">{content}</p>
                ) : (
                    content
                )}
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn" onClick={onCancel}>
                            Cancel
                        </button>
                        <button
                            className="btn btn-warning ms-4"
                            onClick={onConfirm}
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}

export default ConfirmationModal;
