import TrackOBJ, { altTrackOBJ } from "./tracks.model"

export const readTracks = (albumID:number) => {
    return `
    SELECT * FROM tracks
    WHERE album_id=${(albumID)}
    `
}

export const readOneTrack = (ID:number) => {
    return `
    SELECT * FROM tracks
    WHERE id=${(ID)}
    `
}

export const createTrack = (track:altTrackOBJ) => {
    return `
    INSERT INTO tracks (album_id, title, number, video_url) VALUES(${(track.id)},'${(track.title?.replaceAll("'", "''"))}',${(track.number)},'${(track.video)}')
    `
}

export const updateTrack = (track:TrackOBJ|altTrackOBJ) => {
    return `UPDATE tracks
    SET title = '${(track.title?.replaceAll("'", "''"))}', number = ${((track.number))}, video_url = '${(track.video)}', lyrics = '${((track.lyrics?.replaceAll("'", "''")))}'
    WHERE id = ${(track.id)};
    `
}

export const deleteTrack = (id:number) => {
    return `DELETE FROM tracks WHERE id = ${(id)}?`
}