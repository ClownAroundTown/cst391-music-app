import AlbumOBJ, { altAlbumOBJ } from "./album.obj"

export const readAlbums = () => {
    return `SELECT * FROM albums`
}

export const readAlbumsByArtist = (artist:string) => {
    return `SELECT id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM music.albums
    WHERE albums.artist=${(artist)}`
}

export const readAlbumsById = (id:number) => {
    return `SELECT * FROM albums WHERE id = ${(id)}`
}

export const readAlbumsByDescription = (desc:string) => {
    return `SELECT id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM albums WHERE albums.description LIKE ${(desc)}`
}

export const readAlbumsByTitle = (title:string) => {
    return `SELECT id as albumId, title AS title, artist AS artist, description AS description, year AS year, image AS image FROM albums WHERE albums.description LIKE ${(title)}`
}

export const updateAlbum = (album:AlbumOBJ) => {
    return (`UPDATE albums SET title='${album.title}', artist='${album.artist}', year=${album.year}, image='${album.image}', description='${(album.description).replaceAll("'", "''")}' FROM (SELECT * FROM albums) WHERE albums.id=${album.albumId}`)
}

export const createAlbum = (album:AlbumOBJ|altAlbumOBJ) => {
    return (`INSERT INTO albums(title, artist, year, image, description) VALUES('${album.title}','${album.artist}',${album.year}, '${album.image}', '${(album.description).replaceAll("'", "''")}')`)
}

export const deleteAlbum = (id:number) => {
    return `DELETE FROM albums WHERE id = ${(id)}?`
}