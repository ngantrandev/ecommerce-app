import { useCallback, useState } from 'react';
import { ImageProps } from 'expo-image';
import { Image as ExpoImage } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const fallbackImage = require('~/assets/images/fallback.png'); // Đường dẫn ảnh thay thế

export default function Image({ style, source, placeholder, ...props }: ImageProps) {
  const [error, setError] = useState(false); // Trạng thái lỗi

  const handleOnError = useCallback(() => {
    setError(true);
  }, []);

  return (
    <ExpoImage
      style={[
        {
          width: '100%',
          height: '100%',
          borderRadius: 10,
        },
        style,
      ]}
      source={error ? fallbackImage : source}
      placeholder={placeholder || blurhash}
      contentFit="cover"
      transition={1000}
      onError={handleOnError}
      {...props}
    />
  );
}
