import 'veui-theme-blue-icons/check-circle';
import 'veui-theme-blue-icons/exclamation-circle';
import 'veui-theme-blue-icons/info-circle';
import 'veui-theme-blue-icons/times-circle';
import 'veui-theme-blue-icons/chevron-left';
import 'veui-theme-blue-icons/chevron-right';
import 'veui-theme-blue-icons/times';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            success: 'check-circle',
            warning: 'exclamation-circle',
            info: 'info-circle',
            error: 'times-circle',
            prev: 'chevron-left',
            next: 'chevron-right',
            close: 'times'
        },
        parts: {
            prev: 'icon',
            next: 'icon',
            close: 'icon'
        },
        ui: {
            size: {
                values: ['s', 'm'],
                default: 'm',
                inherit: true
            },
            style: {
                values: ['strong']
            }
        }
    },
    'alert'
);
