declare namespace _default {
    const _extends: string[];
    export { _extends as extends };
    export const plugins: string[];
    export const rules: {
        'arrow-body-style': string[];
        'arrow-parens': string[];
        'comma-dangle': string[];
        'lines-between-class-members': (string | {
            exceptAfterSingleLine: boolean;
        })[];
        'no-bitwise': (string | {
            allow: string[];
        })[];
        'no-console': string;
        'no-debugger': string;
        'no-param-reassign': (string | {
            props: boolean;
        })[];
        'no-restricted-syntax': string[];
        'object-shorthand': string;
        quotes: string[];
        semi: string;
        'vue/html-indent': (string | number)[];
        'vue/attributes-order': (string | {
            alphabetical: boolean;
        })[];
        'vue/max-attributes-per-line': (string | {
            singleline: number;
            multiline: {
                max: number;
                allowFirstLine: boolean;
            };
        })[];
        'vue/attribute-hyphenation': (string | {
            ignore: string[];
        })[];
        'vue/html-self-closing': (string | {
            html: {
                void: string;
                normal: string;
                component: string;
            };
            svg: string;
            math: string;
        })[];
        'vue/html-closing-bracket-newline': (string | {
            singleline: string;
            multiline: string;
        })[];
        'import/extensions': (string | {
            ts: string;
            tsx: string;
            js: string;
            jsx: string;
        })[];
        'import/prefer-default-export': string;
        'import/no-dynamic-require': string;
        'import/no-extraneous-dependencies': string;
        indent: string;
        'no-unused-vars': string;
        camelcase: string;
        'no-dupe-class-members': string;
        'no-shadow': string;
        'no-use-before-define': string;
        '@typescript-eslint/indent': (string | number | {
            SwitchCase: number;
            MemberExpression: number;
        })[];
        '@typescript-eslint/no-unused-vars': (string | {
            args: string;
        })[];
        '@typescript-eslint/naming-convention': (string | {
            selector: string;
            format: null;
        })[];
        '@typescript-eslint/no-dupe-class-members': string;
        '@typescript-eslint/no-shadow': string;
        '@typescript-eslint/no-use-before-define': (string | {
            ignoreTypeReferences: boolean;
            typedefs: boolean;
            functions: boolean;
        })[];
        '@typescript-eslint/no-empty-interface': (string | {
            allowSingleExtends: boolean;
        })[];
        'max-len': string;
        'no-undef': string;
        'no-alert': string;
        'global-require': string;
        'no-mixed-operators': string;
        'no-underscore-dangle': string;
        'class-methods-use-this': string;
        'no-async-promise-executor': string;
        '@typescript-eslint/no-this-alias': string;
        '@typescript-eslint/no-var-requires': string;
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/no-non-null-assertion': string;
        '@typescript-eslint/explicit-module-boundary-types': string;
    };
}
export default _default;
