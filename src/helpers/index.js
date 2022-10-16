export const getContacts = () => {
    try {
        const contacts = localStorage.getItem("contacts");
        return JSON.parse(contacts);
    } catch (error) {
        throw new Error("Failed to get contacts!!!");
    }
}