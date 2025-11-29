export const getLoginValidationMessages = (t: any) => ({
  email: {
    invalid: t("invalidEmail"),
    required: t("emailRequired"),
  },
  password: {
    minLength: t("passwordMinLength"),
    required: t("passwordRequired"),
  },
});
