export const API_USER = "shpax";
export const URL_FORM = `http://forms-app.brutgroot.com/${API_USER}/forms/`;
export const URL_FORM_LIST = `http://forms-app.brutgroot.com/${API_USER}/forms/list`;

const data = {
    id: 5,
    name: "My Brand New Form",
    fields: [
        {
            type: "text",
            name: "username",
            label: "enter username here",
            placeholder: "John Doe"
        },
        {
            type: "number",
            name: "year",
            label: "enter year of birth ",
            placeholder: "2006"
        },
        {
            type: "dropdown",
            name: "gender",
            label: "Gender",
            items: [
                {
                    name: "Male",
                    value: "m"
                },
                {
                    name: "Female",
                    value: "w"
                }
            ],
            default: 0
        },
        {
            type: "checkmark",
            name: "news",
            label: "get news on email"
        }
    ]
};