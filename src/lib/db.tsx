import dotenv from 'dotenv'
import { neon } from '@neondatabase/serverless';
import AlbumOBJ, { altAlbumOBJ } from './music_modules/albums/album.obj';
import { readAlbums, readAlbumsByArtist, readAlbumsByDescription, readAlbumsById, readAlbumsByTitle, updateAlbum, createAlbum, deleteAlbum } from './music_modules/albums/albums.queries';
import { readTracks, createTrack, updateTrack, deleteTrack } from './music_modules/tracks/tracks.queries';
import TrackOBJ, { altTrackOBJ } from './music_modules/tracks/tracks.model';
import PlaylistOBJ, { altPlaylistOBJ } from './music_modules/playlist/playlist.model';
import { readPlaylists, readPlaylistTracks, addPlaylistTracks, removePlaylistTrack, editPlaylist, deletePlaylist, createPlaylist } from './music_modules/playlist/playlist.queries';

dotenv.config()

async function SQL(query:string){
    const sql = neon(process.env.DATABASE_URL!);
    const response = await sql.query(query)
    return response
}

class albumDB {
  public async READ(
      artist:string|null = null,
      id:number|null = null,
      title:string|null = null,
      description:string|null = null,
    ) {
      if (artist != null){
        console.log(readAlbumsByArtist(artist))
        return SQL(readAlbumsByArtist(artist))
      }
      else if (id != null){
        console.log(readAlbumsById(id))
        return SQL(readAlbumsById(id))
      }
      else if (title != null){
        console.log(readAlbumsByTitle(title))
        return SQL(readAlbumsByTitle(title))
      }
      else if (description != null){
        console.log(readAlbumsByDescription(description))
        return SQL(readAlbumsByDescription(description))
      }
      else {
        return SQL(readAlbums())
      }
    }

  public async CREATE(album:AlbumOBJ|altAlbumOBJ){
      return SQL(createAlbum(album))
  }

  public async UPDATE(album:AlbumOBJ){
      return SQL(updateAlbum(album))
  }

  public async DELETE(id:number){
      return SQL(deleteAlbum(id))
  }

}

class trackDB{
  public READ(albumID:number){
    return SQL(readTracks(albumID))
  }
  public CREATE(track:TrackOBJ|altTrackOBJ){
    return SQL(createTrack(track))
  }
  public UPDATE(track:TrackOBJ){
    return SQL(updateTrack(track))
  }
  public DELETE(trackID:number){
    return SQL(deleteTrack(trackID))
  }
}

class playlistDB{
  public CREATE(playlist:altPlaylistOBJ){
    return SQL(createPlaylist(playlist));
  }

  public READ(id:number | null = null){
    if (id==null){
      return SQL(readPlaylists())
    }
    else{
      return SQL(readPlaylistTracks(id))
    }
  }

  public EDIT(playlist:PlaylistOBJ){
    return SQL(editPlaylist(playlist))
  }

  public DELETE(playlist:PlaylistOBJ){
    return SQL(deletePlaylist(playlist))
  }

  public ADD_TRACKS(playlist:PlaylistOBJ, tracks:TrackOBJ[]){
    return tracks.map((track:TrackOBJ) => {
      return SQL(addPlaylistTracks(playlist, track))
    })
  }

  public REMOVE_TRACKS(playlist:PlaylistOBJ, tracks:TrackOBJ[]){
    return tracks.map((track:TrackOBJ) => {
      return SQL(removePlaylistTrack(playlist, track))
    })
  }
}

export const DBAlbum = new albumDB();
export const DBTrack = new trackDB();
export const DBPlaylist = new playlistDB();