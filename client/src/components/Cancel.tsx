type CancelProp = {
    resetCallback: () => void;
}

export const Cancel = ({resetCallback}: CancelProp) => {
    return (
        <button type="button" onClick={() => resetCallback()}>
            Cancel
        </button>
    );
};