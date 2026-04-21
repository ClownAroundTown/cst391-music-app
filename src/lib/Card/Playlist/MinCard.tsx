"use client"
import { Card } from 'react-bootstrap';
import Link from 'next/link';

const MinPlaylistCard = (props:{id:number, name:String}) => {
    return (
        <Link href={`playlist/view/?id=${props.id}`} passHref>
            <Card className="MinPlaylistCard">
                <h3>{props.name}</h3>
            </Card>
        </Link>
    )
}

export default MinPlaylistCard