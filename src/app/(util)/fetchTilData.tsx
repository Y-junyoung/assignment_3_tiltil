export type TIL = {
  date: string | number | Date;
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
};

export async function fetchTilData(): Promise<TIL[]> {
  try {
    const url =
      "https://port-0-ballang-server-qrd2als49b8m4.sel5.cloudtype.app/til";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };
    const response = await fetch(url, options);
    const data: TIL[] = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    return [];
  }
}
