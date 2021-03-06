import 'veui-theme-blue-icons/chevron-left';
import 'veui-theme-blue-icons/chevron-down';
import 'veui-theme-blue-icons/chevron-right';
import 'veui-theme-blue-icons/chevron-double-left';
import 'veui-theme-blue-icons/chevron-double-right';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            prev: 'chevron-left',
            next: 'chevron-right',
            backward: 'chevron-double-left',
            forward: 'chevron-double-right',
            expand: 'chevron-down'
        },
        ui: {
            size: {
                values: ['s', 'm'],
                inherit: true
            }
        },
        parts: {
            nav: 'icon',
            toggle: 'text'
        }
    },
    'calendar'
);
