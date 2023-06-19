export const AuthSingInValidate = {
    username: {
        validation: {
            required: {
                value: true,
                message: 'required',
            },
            maxLength: {
                value: 30,
                message: '30 characters max',
            },
        },
    },
    password: {
        validation: {
            required: {
                value: true,
                message: 'required',
            },
            maxLength: {
                value: 30,
                message: '30 characters max',
            },
        },
    }
}