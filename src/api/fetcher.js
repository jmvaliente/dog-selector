export const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching data");
    }
    return response.json();
  };