import { useState } from 'react';
import { Text, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE, FileWithPath } from '@mantine/dropzone';
import ReactCrop from 'react-image-crop'
import { Crop } from 'react-image-crop/dist/types';

interface DropZoneProps {
    forImage: string;
}






export function DropZone({forImage}: DropZoneProps) {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [url, setUrl] = useState("")
  const [crop, setCrop] = useState<Crop>({
    unit: 'px', // Can be 'px' or '%'
    x: 25,
    y: 25,
    width: 1178,
    height: 400
  })
  

  const previews = files.map((file, index) => {
    const imageUrl = URL.createObjectURL(file);

    return (
      <ReactCrop maxWidth={1178} onChange={c => setCrop(c)} maxHeight={400} crop={crop}>
      <img src={imageUrl} />
    </ReactCrop>
    );
  });

  return (
    <div style={{width: "100%"}}>
      <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles}>
        <Text align="center">Drop images here</Text>
      </Dropzone>

      <SimpleGrid
        cols={1}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        mt={previews.length > 0 ? 'xl' : 0}
      >
        
      {previews}
      </SimpleGrid>

    </div>
  );
}