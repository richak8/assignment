export const dateToTimestamp = (date) => {
    const convertedDate = new Date(date);
    return convertedDate.getTime();
}

export const timestampToDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toDateString();
}

export const sortByTimestamp = (input) => {
   return input.sort((a,b) => {
        return b.timestamp - a.timestamp;
    })
}