export const albumQueries = {
    readAlbums:`
    SELECT * FROM albums`,
    readAlbumsByArtist:`
    SELECT
    id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM music.albums
    WHERE music.albums.artist=?`,
    readAlbumsByArtistSearch: `
    SELECT
    id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM music.albums
    WHERE music.albums.artist LIKE ?`,
    readAlbumsByDescriptionSearch:`
    SELECT
    id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM music.albums
    WHERE music.albums.description LIKE ?`,
    readAlbumsByAlbumID:`
    SELECT
    id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM music.albums
    WHERE music.albums.id=?`,
    createAlbum:`
    INSERT INTO ALBUMS(title, artist,description,year,image) VALUES(?,?,?,?,?)
    `,
    updateAlbum:`
    UPDATE music.albums
    SET title=?, artist=?, year=?,description=?
    WHERE id=?
    `,
    deleteAlbum: `
    DELETE FROM music.albums
    WHERE id=?
    `,
}