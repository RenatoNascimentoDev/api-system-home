import * as yup from "yup";

export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
const OBJECT_REGEX = /^[0-9a-fA-F]{24}$/;

export const createUserBodySchema = yup
    .object({
        name: yup.string().trim().required("Nome é obrigatório"),
        email: yup
            .string()
            .trim()
            .lowercase()
            .email("Email inválido")
            .required("Email é obrigatório"),
        password: yup
            .string()
            .required("Senha é obrigatório")
            .matches(
                PASSWORD_REGEX,
                "Senha deve ter no mínimo 6 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial"
            ),
            avatar_id: yup
                .string()
                .nullable()
                .notRequired()
                .test("is-objectid", "avatar_id inválido", (value) => value == null || OBJECTID_REGEX.test(value)),
    })
    .noUnknown(true, "Campo não permitido");

export const changePasswordBodySchema = yup
    .object({
        password: yup
            .string()
            .required("Senha é obrigatória")
            .matches(
                PASSWORD_REGEX,
                "Senha deve ter no mínimo 6 caracteres, 1 letra maiúscula, 1 número e 1 caractere especial"
            ),
    })
    .noUnknown(true, "Campo não permitido");