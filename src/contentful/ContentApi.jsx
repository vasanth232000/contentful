import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "kz8zfg2g99h1",
  environment: "master",
  accessToken: "KPy3vmXkbRO5YcZHtzasrWY0Xl435bpGQchFQsp3B-8",
});

export const useFetchApi = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const datas = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item?.sys?.id;
        const img = image?.fields?.file?.url;
        return { id, img, title, url };
      });
      setData(datas);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading };
};
