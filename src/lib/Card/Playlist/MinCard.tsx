"use client"
import PlaylistOBJ from '@/lib/music_modules/playlist/playlist.model';
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const MinPlaylistCard = (playlist:PlaylistOBJ) => {
    return (
        <Link href={`playlist?id=${playlist.id}`} passHref>
            <Card>
                <h1>{playlist.name}</h1>
            </Card>
        </Link>
    )
}

export default MinPlaylistCard