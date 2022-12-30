export const sortByName = (sortDirection) => (a, b) => {
    sortDirection === true && ([a, b] = [b, a]);
    return a.name.localeCompare(b.name);
};

export const sortById = (sortDirection) => (a, b) => {
    sortDirection === true && ([a, b] = [b, a]);
    return a.id.localeCompare(b.id);
};

export const sortByDate = (sortDirection) => (a, b) => {
    sortDirection === true && ([a, b] = [b, a]);
    return a.createdAt.localeCompare(b.createdAt);
};