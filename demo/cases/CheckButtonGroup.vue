<template>
    <article>
        <h1><code>&lt;veui-check-button-group&gt;</code></h1>
        <section>
            <veui-checkbox v-model="disabled">
                禁用
            </veui-checkbox>
        </section>
        <section>
            <p>
                <veui-check-button-group
                    v-model="picked1"
                    :items="data1"
                    :disabled="disabled"
                >
                    <template slot-scope="props">
                        {{ props.label }}
                    </template>
                </veui-check-button-group>
            </p>
            <p>value: {{ picked1 }}</p>
        </section>
        <section>
            <p>
                <veui-check-button-group
                    v-model="picked2"
                    :items="data2"
                    ui="s"
                    :disabled="disabled"
                >
                    <template slot-scope="props">
                        {{ props.label }}
                    </template>
                </veui-check-button-group>
            </p>
            <p>value: {{ picked2 }}</p>
        </section>
        <section>
            <p>
                <veui-check-button-group
                    v-model="picked3"
                    :items="data3"
                    ui="s"
                    :disabled="disabled"
                >
                    <template slot-scope="props">
                        <veui-icon :name="props.icon"/>
                    </template>
                </veui-check-button-group>
            </p>
            <p>value: {{ picked3 }}</p>
        </section>
    </article>
</template>

<script>
import {CheckButtonGroup, Checkbox, Icon} from 'veui';
import 'veui-theme-blue-icons/check';
import 'veui-theme-blue-icons/times';
import 'veui-theme-blue-icons/sync';
import 'veui-theme-blue-icons/edit';

export default {
    name: 'check-button-group-demo',
    components: {
        'veui-check-button-group': CheckButtonGroup,
        'veui-checkbox': Checkbox,
        'veui-icon': Icon
    },
    data() {
        return {
            picked1: ['Hirasawa Yui', 'Akiyama Mio'],
            picked2: [],
            picked3: [],
            disabled: false,
            data1: [
                {
                    value: 'Hirasawa Yui',
                    label: 'Hirasawa Yui'
                },
                {
                    value: 'Akiyama Mio',
                    label: 'Akiyama Mio'
                },
                {
                    value: 'Nakano Azusa',
                    label: 'Nakano Azusa'
                }
            ],
            data2: [
                {
                    value: 'Hirasawa Yui',
                    label: 'Hirasawa Yui'
                },
                {
                    value: 'Akiyama Mio',
                    label: 'Akiyama Mio'
                },
                {
                    value: 'Nakano Azusa',
                    label: 'Nakano Azusa'
                }
            ],
            data3: [
                {
                    value: 'check',
                    icon: 'check'
                },
                {
                    value: 'times',
                    icon: 'times'
                },
                {
                    value: 'sync',
                    icon: 'sync'
                },
                {
                    value: 'edit',
                    icon: 'edit'
                }
            ]
        };
    }
};
</script>
