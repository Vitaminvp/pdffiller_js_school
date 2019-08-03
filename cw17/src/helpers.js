export const invariant = (testValue, errorMessage) => {
    if (!testValue) {
        throw new Error(errorMessage);
    }
};
