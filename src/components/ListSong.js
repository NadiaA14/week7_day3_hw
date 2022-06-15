import React from "react";



const ListSong = ({song}) => {


    return (

        <ol><h2>{song["im:name"].label}</h2> {song["im:artist"].label}</ol>

    )



}

export default ListSong;