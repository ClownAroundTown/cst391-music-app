import PlaylistOBJ from "./playlist.model"
import TrackOBJ from "../tracks/tracks.model"

export const readPlaylists = () => {
    return `
    SELECT * FROM playlist
    `
}

export const readPlaylistTracks = (id:number) => {
    return `SELECT * FROM playlist_tracks WHERE playlist_id=${id}`
}

export const readPlaylistByTitle = (title:string) => {
    return `SELECT * FROM playlist WHERE name LIKE '%${title}%'`
}

export const readPlaylistByID = (id:number) => {
    return `SELECT * FROM playlist WHERE id = ${(id)}`
}

export const createPlaylist = (playlist:PlaylistOBJ) => {
    return `
    INSERT INTO playlist (name) VALUES('${(playlist.name)}')
    `
}

export const editPlaylist = (playlist:PlaylistOBJ) => {
    return `UPDATE playlist
    SET name = '${(playlist.name.replaceAll("'", "''"))}'
    WHERE id = ${(playlist.id)};
    `
}

export const deletePlaylist = (playlist:PlaylistOBJ) => {
    return `DELETE FROM playlist WHERE playlist_id = ${(playlist.id)}`
}

export const addPlaylistTracks = (playlist:PlaylistOBJ, track:TrackOBJ) => {
    return `INSERT INTO playlist_tracks (playlist_id, track_id) VALUES(${(playlist.id)}, ${(track.id)})
    `
}

export const removePlaylistTrack = (playlist:PlaylistOBJ, track:TrackOBJ) => {
    return `DELETE FROM playlist_tracks WHERE playlist_id = ${(playlist.id)} AND track_id = ${(track.id)}`
}