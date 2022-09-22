import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import zIndex from '@mui/material/styles/zIndex';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
          <div style={{
            background: "linear-gradient(90deg, rgba(44,37,161,1) 0%, rgba(24,185,180,1) 0%, rgba(193,1,186,1) 100%, rgba(175,109,29,1) 100%, rgba(255,149,0,1) 100%)",
            zIndex: 10,
            height: "300px"
          }}/>
          <ChannelCard channelDetail={channelDetail} 
          marginTop="-93px" />
      </Box>
      <Box display="flex" p="2">
          <Box sx={{ mr: { sm: "100px" }}} />
          <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail