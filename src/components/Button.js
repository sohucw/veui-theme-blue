import 'veui-theme-blue-icons/loading';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            loading: 'loading'
        },
        ui: {
            style: {
                values: ['translucent', 'primary', 'strong', 'text', 'icon']
            },
            size: {
                values: ['xs', 's', 'm', 'l', 'xl'],
                default: 'm'
            }
        }
    },
    'button'
);
