export const getTime = () => {
    const date = new Date();

    let ampm = "am";
    let hours = date.getHours();

    if (hours >= 12) {
        ampm = "pm";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    let minutes = date.getMinutes();

    const hh = hours < 10 ? `0${hours}` : hours;
    const mm = minutes < 10 ? `0${minutes}` : minutes;

    return `${hh}:${mm} ${ampm}`;
};
