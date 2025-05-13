export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const streamPath = url.pathname.replace("/proxy/", "");
    const target = `http://tv.bdiptv.store:80/live/restream/restreamkak/${streamPath}`;

    const modifiedHeaders = {
      'Referer': 'http://tv.bdiptv.store',
      'User-Agent': 'VLC/3.0.11 LibVLC/3.0.11',
      'Origin': 'http://tv.bdiptv.store',
    };

    return fetch(target, {
      method: 'GET',
      headers: modifiedHeaders
    });
  }
}
