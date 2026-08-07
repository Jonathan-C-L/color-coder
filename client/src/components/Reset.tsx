import { config } from '../config/config';
import { IconRefresh } from '@tabler/icons-react';

type ResetProp = {
    resetCallback: () => void;
}

export const Reset = ({resetCallback}: ResetProp) => {
    return (
        <button type="button" onClick={() => resetCallback()}>
            <IconRefresh size={config.ICON_SIZE} />
            Reset
        </button>
    );
};