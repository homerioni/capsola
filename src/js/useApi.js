export const fetching = async (settings, err) => {
    let resp = '';
    let headers = {
        'Content-Type': 'application/json',
        'X-API-Key': '062634cd-71ba-43be-aaf1-40ff40aace68'
    }
    try {
        const response = await fetch(settings.url, {
            crossDomain: true,
            method: settings.method || 'POST',
            body: settings.data && JSON.stringify(settings.data),
            headers: headers
        });
        resp = await response.json();
        if (!response.ok) {
            if (resp.error.description) {
                throw new Error(resp.error.description);
            } else {
                throw new Error(resp.error.message);
            }
        }
    } catch (e) {
        if (err) err();

        if (e.message === 'Failed to fetch') {
            throw new Error('Нет соединения с сервером')
        } else {
            throw new Error(e.message)
        }
    }

    return resp;
}