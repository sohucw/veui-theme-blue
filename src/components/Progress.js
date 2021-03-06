import 'veui-theme-blue-icons/check';
import 'veui-theme-blue-icons/times';
import 'veui-theme-blue-icons/check-circle';
import 'veui-theme-blue-icons/times-circle';
import config from 'veui/managers/config';

config.defaults(
    {
        icons: {
            success: 'check',
            error: 'times',
            successBar: 'check-circle',
            errorBar: 'times-circle'
        },
        ui: {
            size: {
                values: ['s', 'm'],
                default: 'm',
                data: {
                    m: {
                        radius: 54,
                        strokeWidth: 8,
                        strokeLinecap: 'round'
                    },
                    s: {
                        radius: 54,
                        strokeWidth: 4,
                        strokeLinecap: 'round'
                    }
                },
                inherit: true
            }
        }
    },
    'progress'
);
