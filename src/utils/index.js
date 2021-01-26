export function createIdGenerator() {
    let id = 0;
    return () => id++;
}
export const API_URL = 'https://course-vue.javascript.ru/api';
export function xhr({
    method, url, body={},
}) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, `${API_URL}/${url}`);
    xhr.send(body);
    xhr.onprogress = (e) => {
        console.log(e);
    }
}

export async function fetchMeetups() {
    return fetch(`${API_URL}/meetups`);
}
export async function fetchMeetup(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`);
}
export function getMeetupCoverLink(imageId) {
    return `${API_URL}/images/${imageId}`;
}

const locale = navigator.language;
export const createFormatter = (options) => {
  return new Intl.DateTimeFormat(locale, {
    ...options,
  });
};
export const MY = createFormatter({
  month: 'long',
  year: 'numeric',
});
export const MYD = createFormatter({
  month: 'long',
  year: '2-digit',
  day: 'numeric',
});

