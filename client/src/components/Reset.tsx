type ResetProp = {
    resetCallback: () => void;
}

export const Reset = ({resetCallback}: ResetProp) => {
    return (
        <button type="button" onClick={() => resetCallback()}>
            Reset
        </button>
    );
};