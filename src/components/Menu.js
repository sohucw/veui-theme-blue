import 'veui-theme-blue-icons/chevron-right';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            expand: 'chevron-right',
            collapse: 'chevron-right'
        },
        ui: {
            size: {
                values: ['s', 'm', 'l'],
                inherit: true,
                default: 'm'
            }
        },
        parts: {
            toggle: 'icon'
        }
    },
    'menu'
);
