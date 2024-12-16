```javascript
import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

const fetchData = async () => {
  // Simulate an asynchronous operation
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { data: 'Updated Data' };
};

const MyComponent = () => {
  const [data, setData] = useState(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchAndSetState = async () => {
      const result = await fetchData();
      if (isMounted.current) {
        setData(result.data);
      }
    };

    fetchAndSetState();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <View>
      {data ? <Text>{data}</Text> : <Text>Loading...</Text>}
    </View>
  );
};

export default MyComponent;
```