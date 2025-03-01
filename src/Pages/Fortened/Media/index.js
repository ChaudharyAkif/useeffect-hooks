import React, { useRef } from 'react'
import  Ahudio1  from  '../../../Assets/audio.mp3'
import { Button } from 'antd'


const Media = () => {
    const AudioMedia = useRef(null)
  const handleplay =()=>{
    AudioMedia.current.play()
  }
  const handleStop =()=>{
    AudioMedia.current.pause()
  }
  return (
<>
<Button onClick={handleplay}> Play</Button>
<Button onClick={handleStop}> Stop</Button>
<audio src={Ahudio1} ref={AudioMedia} controls />
</>
  )
}

export default Media
