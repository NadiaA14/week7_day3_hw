import React from "react";
import ListSong from "./ListSong";

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <ListSong song={song} key={index} index={index}/>
    })

  return (
    <>
        <ol>
            {songItems}
        </ol>

    </>
  )


}






export default SongList;