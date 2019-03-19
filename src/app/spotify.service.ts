import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQDGNGS_HWSzDI1sl_UL3jbRM6kOIuzapzU0gbMjpXmQc4MygijMBN8Q3Vt5En62w8Ksmbeeqx4IbLYrnhTZXvQdhdZIeN2pHVxvvq6a3mQwo5aNNQ4D7JRJchPhXqgq91A_BZkyGKwAcAMaToTDSSCin-w4-ySmTByrsw"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
