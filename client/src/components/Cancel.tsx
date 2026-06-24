type CancelProp = {
    reset: () => void;
}

export const Cancel = ({reset}: CancelProp) => {
    return (
        <button type="button" onClick={() => reset()}>
            Cancel
        </button>
    );
};